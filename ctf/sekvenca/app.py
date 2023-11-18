from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
from Crypto.Random import get_random_bytes

key = get_random_bytes(32)
data = b"proba"

def myEncrypt(value,key):  
    cipher = AES.new(key, AES.MODE_ECB)
    padded = pad(bytes([value]),AES.block_size)
    return cipher.encrypt(padded)

for val in data.upper():
    print(myEncrypt(val,key).hex())
