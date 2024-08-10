# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
n = int(input("Enter a number "))
for i in range(1,n+1):
    if i%3==0:
        print(i, "Fizz ")
    if i % 5 ==0:
        print(i, "Bus")
