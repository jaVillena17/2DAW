try:
    n1 = int(input("Escribe el primer número"))
    n2 = int(input("Escribe el segundo número"))
    n3 = int(input("Escribe el tercer número"))

    if (n1>n2 and n2>n3): 
        print(n1,n2,n3)
    elif (n1>n2 and n1<n3):
        print(n3,n1, n2)
    elif (n1<n2 and n2<n3):
        print(n3,n2,n1)
    elif(n1>n2 and n3>n2):
        print(n1,n3,n2)
    elif(n2>n1 and n1>n3):
        print(n2,n1,n3)
    elif(n2>n1 and n3>n1):
        print(n2,n3,n1)
    elif(n1>n2 and n1>n3):
        print(n1,n2,n3)
    elif(n2>n1 and n2>n3):
        print(n2,n1,n3)
    elif(n3>n1 and n3>n2):
        print(n3, n2, n1)
    else:
        print(n1,n2,n3)
except:
    print("NÚMEROS, COÑO")