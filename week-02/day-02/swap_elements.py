# - Create a variable named `abc`
#   with the following content: `["first", "second", "third"]`
# - Swap the first and the third element of `abc`

abc = ["first", "second", "third"]
abc.insert(3, 'null')
abc[3] = abc[2]
abc[2] = abc[0]
abc[0] = abc[3]
del abc[3]

print(abc)
