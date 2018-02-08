from bokahilla import app
from bokahilla import models as model
from flask import render_template

"""
 Router and Controller - code that runs the model and renders the view
"""
# top level - index of all books (book list)
@app.route('/')
@app.route('/index')
def index():
    booklist = model.booklist   # Þarf að útfæra betur. Gagnavinnsla og hjúpun á að vera í model, nota getbooklist aðferð frekar.
    # View - the template to be completed / look and feel of the page
    return render_template('bokalisti.html', booklist=booklist)


# next level - isbn letter code is a specific book
# The International Standard Book Number (ISBN) is a unique  numeric commercial book identifier.
# https://en.wikipedia.org/wiki/International_Standard_Book_Number
@app.route("/book/<isbn>")
def book(isbn):
    # this is what "matched" will look like
    # matched = {"isbn":"0-943396-04-2","name":"Lord of the rings", "publisher":"KT Publishing"}
    # matched = model.book.getbook(isbn)
    # Samanburður (filter, regex osfrv.) á að vera í model.
    book = model.GetBook(isbn)
    return render_template('book.html', book=book)