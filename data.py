import json
print("This is Python JSON Operations")
jsonuser = """{
"ID": 1,
"Name": "John Doe",
"Address": {
    "Street": "123 Main St",
    "City": "Anytown",
    "Country": "USA"
}
}"""

#print( jsonuser) 
#print(type(jsonuser))

userDictionary = json.loads(jsonuser)
print(userDictionary)
print("ID:", userDictionary["ID"])

todo = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": False
}

jsonTodo = json.dumps(todo)
print(jsonTodo) 
print(type(jsonTodo))
  