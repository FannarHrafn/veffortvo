import sqlite3

with sqlite3.connect("Quiz.db") as db:
    cursor =db.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS user(
userID INTEGER PRIMARY KEY,
username VARCHAR(20) NOT NULL,
firstname VARCHAR(20) NOT NULL,
surname VARCHAR(20) NOT NULL,
password VARCHAR(20) NOT NULL);
''')

cursor.execute("""
INSERT INTO user(username,firstname,surname,password)
VALUES ("test_user","Bob","Smith","mrBOB")
""")

db.commit()

cursor.execute("SELECT * FROM user")
print(cursor.fetchall())

