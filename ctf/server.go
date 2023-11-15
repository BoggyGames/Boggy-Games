package main

import (
	"crypto/md5"
	"database/sql"
	"fmt"
	"html/template"
	"math"
	"math/rand"
	"net/http"
	"strconv"
	"strings"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

var (
	cookieHash string
	db         *sql.DB
)

func main() {
	connectToDatabase()

	hash := md5.New()
	randomNumber := rand.Int31n(math.MaxInt32)
	_, _ = hash.Write([]byte(strconv.Itoa(int(randomNumber))))
	md5 := hash.Sum(nil)
	cookieHash = fmt.Sprintf("%x", md5)

	fileServer := http.FileServer(http.Dir("./static"))
	http.Handle("/", fileServer)

	http.HandleFunc("/login.html", handleLoginPage)
	http.HandleFunc("/login", handleLogin)
	http.HandleFunc("/secret", handleSecret)

	fmt.Printf("Started server on port 8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Printf("%v", err)
	}
}

func connectToDatabase() {
	var err error
	db, err = sql.Open("sqlite3", "./db.sqlite")
	if err != nil {
		fmt.Printf("%v", err)
	}
}

func handleLoginPage(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/login.html")
	if err != nil {
		fmt.Fprintf(w, "ParseFiles() err: %v", err)
	}
	tmpl.Execute(w, struct{ LoginError bool }{false})
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseForm(); err != nil {
		fmt.Fprintf(w, "ParseForm() err: %v", err)
		return
	}
	username := r.FormValue("username")
	password := r.FormValue("password")
	username = strings.ReplaceAll(username, " ", "")
	password = strings.ReplaceAll(password, " ", "")

	if strings.HasPrefix(username, "admin") || strings.HasSuffix(username, "admin") {
		fmt.Fprintf(w, "You cannot log in as admin")
		return
	}

	if strings.HasSuffix(username, "-") || strings.HasSuffix(password, "-") {
		fmt.Fprintf(w, "SQL comments are not allowed!")
		return
	}

	query := fmt.Sprintf("SELECT username FROM users WHERE username='%s' AND password='%s'", username, password)
	rows, err := db.Query(query)

	if err != nil {
		fmt.Fprintf(w, "Query() err: %v", err)
		return
	}
	defer rows.Close()
	success := false
	var foundUsername string
	for rows.Next() {
		err := rows.Scan(&foundUsername)
		if err != nil {
			fmt.Fprintf(w, "Scan() err: %v", err)
			return
		}
		if foundUsername == "admin" {
			success = true
			break
		}
	}

	if success {
		cookie := http.Cookie{
			Name:    "session",
			Value:   cookieHash,
			Expires: time.Now().Add(time.Hour * 24),
			Path:    "/",
		}
		http.SetCookie(w, &cookie)
		http.Redirect(w, r, "/secret", http.StatusSeeOther)
		return
	}

	tmpl, err := template.ParseFiles("templates/login.html")
	if err != nil {
		fmt.Fprintf(w, "ParseFiles() err: %v", err)
	}
	tmpl.Execute(w, struct{ LoginError bool }{true})
}

func handleSecret(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/secret.html")
	if err != nil {
		fmt.Fprintf(w, "ParseFiles() err: %v", err)
		return
	}
	requestCookie, err := r.Cookie("session")
	if err != nil {
		requestCookie = &http.Cookie{Name: "session", Value: ""}
	}
	correctCookie := requestCookie.Value == cookieHash
	tmpl.Execute(w, struct{ CorrectCookie bool }{correctCookie})
}
