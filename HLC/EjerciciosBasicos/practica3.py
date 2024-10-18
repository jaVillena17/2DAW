try:
    n  = int(input("Escribe el número que deseas comprobar"))
    print("El número es cero:",n==0)
    print("El número es positivo:",n>0)
    print("El número es menor que 100:",n<100)
    print("El número es par:",n%2==0)
except:
    print("Un número, coño")