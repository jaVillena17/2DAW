try:
    n1 = int(input("Imprime el valor inicial del rango"))
    n2 = int(input("Imprime el valor final del rango"))
    prime = True
    cont = 2;
    print("Los numeros primos desde",n1,"a",n2,"son:")
    for n in range(n1, n2+1,1):
        if n==1: continue
        if (n%2!=0):
            cont=3;
            while n%cont != 0:
                cont += 2
        if cont == 2: continue
        elif cont == n: print(n)
except:
    print("Numeros")