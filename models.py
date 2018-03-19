# -*- coding: utf-8 -*-

# Model - the business logic of the application

# The model is all to do with the data that's to be handled by the application
# and nothing to do with how it's presented / wired into the view
# functions that work with data (files, database, api etc.)

# very simple class
class Book:

    def __init__(self, isbn,name,descript):
        self.isbn=isbn
        self.name = name
        self.descript=descript

def GetBook(search):
    for book in booklist:
        if book.isbn==search:
            return book

# data
booklist = [
    Book("978-0330478861","Twisted metal","Penrose is a world of intelligent robots who have forgotten their own distant past, a world where all metal, even that of their own wire-based minds, is fought over—a valuable resource to be reused and recycled. Now full-scale war looms, as the soldiers of Artemis sweep across the continent of Shull, killing or converting every robot to their stark philosophy. Only the robots of Turing City stand in their way, robots who believe that they are something more than metal. Karel is one such robot—or is he? Karel finds himself conscripted into the Artemisian army and sent toward the frozen kingdoms of the north, and toward the truth about the legendary Book of the Robots, a text which may finally explain the real history of this strange world, and perhaps of his own mind. In a completely alien but brilliantly realized landscape, here is a powerful story of superb action, barbaric cruelty, and intense emotional impact."),
    Book("978-1782952459","the spook's apprentice","Thomas Jason Ward is the seventh son of a seventh son and has been apprenticed to the local Spook. The job is hard, the Spook is distant and many apprentices have failed before Thomas. Somehow Thomas must learn how to exorcise ghosts, contain witches and bind boggarts. One day, he meets a young girl called Alice who tricks into freeing Mother Malkin, the most evil witch in the County, the horror begins.")
]