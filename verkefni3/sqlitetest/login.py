import sqlite3
import time
import sys

def Login():
    while True:
        username = input("Username: ")
        password = input("Password: ")
        with sqlite3.connect("Quiz.db") as db:
            cursor = db.cursor()
        find_user = ("SELECT * FROM user WHERE username = ? AND password = ?")
        cursor.execute(find_user,[(username),(password)])
        results = cursor.fetchall()

        if results:
            for i in results:
                print("Welcome "+i[2])
            break

        else:
            print("Username and password not recognised")
            again = input("Do you want to try again?(y/n): ")
            if again.lower() == "n":
                print("Goodbye")
                time.sleep(1)
                break
def newuser():
    found = 0
    while found == 0:
        newusername = input("username: ")
        with sqlite3.connect("Quiz.db") as db:
            cursor = db.cursor()
        findUser= ("SELECT * FROM user WHERE username = ?")
        cursor.execute(findUser,[(newusername)])

        if cursor.fetchall():
            print("Username taken")
        else:
            found = 1
    firstname = input("firstname: ")
    surname = input("surname: ")
    password = input("password: ")
    passagain = input("password again: ")
    while password != passagain:
        print("passwords didnt match")
        password = input("password: ")
        passagain = input("password again: ")
    insertdata= '''INSERT INTO user(username,firstname,surname,password)
    VALUES(?,?,?,?)'''
    cursor.execute(insertdata,[(newusername),(firstname),(surname),(password)])
    db.commit()


def menu():
    while True:
        print("Welcome to my system")
        menu = ('''
        1 - create new user
        2 - login to user
        3 - exit
        \n''')
        userChoice = input(menu)

        if userChoice == "1":
            newuser()
        elif userChoice== "2":
            Login()
        elif userChoice == "3":
            print("Goodbye")
            sys.exit()

        else:
            print("skrifað rangt inn")

menu()