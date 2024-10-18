try: 
    n1 = int(input("Introduce el primer número"))
    n2 = int(input("Introduce el segundo número"))
    if (n1%2 == 0 and n2%2==0):
        print("Ambos son pares")
    elif (n1%2!=0 and n2%2!=0):
        print("Ambos son impares")
    else:
        print("Uno es par y otro no")
except:
    print("NÚMEROS, COÑO")