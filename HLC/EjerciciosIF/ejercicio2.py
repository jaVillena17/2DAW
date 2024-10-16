try:
    n1 = int(input("Introduce el primer número"))
    n2 = int(input("Introduce el segundo número"))
    if n1>n2: print(n1,"es mañor que",n2)
    elif n2>n1: print(n2,"es mayor que",n1)
    else: print("Ambos números son iguales")
except:
    print("Números, coño")