# Open a file called "my-file.txt"
# Write your name in it as a single line
# If the program is unable to write the file,
# then it should print an error message like: "Unable to write file: my-file.txt"

def write_single_line():
    try:
        fw = open("my-file.txt", "w")
        fw.write("Tamara")
    except:
        print("Unable to write file: my-file.txt")


write_single_line()
