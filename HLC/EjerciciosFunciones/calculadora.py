#Funciones
def printMenu():
    print("Seleccione la operación que desea realizar: \n1.- Suma\n2.- Resta\n3.- Multiplicación\n4.- División\n5.- Salir")
    
def add(n1, n2):
    return n1+n2

def resta(n1,n2):
    return n1-n2

def mult(n1, n2):
    return n1*n2

def div(n1, n2):
    if(n2!=0): return n1%n2
    else: return "Tonto"

#Programa
try:
    printMenu()
    op = int(input())
    if op != 1 and op !=2 and op!=3 and op!=4 and op != 5:
        print("Introduce un valor válido")
    else:
        n1 = int(input("Introduce el primer número"))
        n2 = int(input("Introduce el segundo número"))

        if op == 1:
            print("El resultado de la suma es:",add(n1,n2))
        elif op == 2:
            print("El resultado de la resta es", resta(n1,n2))
        elif op == 3:
            print("El resutado de la multiplicación es:",mult(n1,n2))
        elif op == 4:
            print("El resultado de la división es:",div(n1,n2))
        else:
            print("Exit")
except:
    print("Que metas números, tonto")
    


