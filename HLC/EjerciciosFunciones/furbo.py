def printMenu():
    print("Seleccion opción:")
    print("1.- Añadir jugador a la lista de fichajes")
    print("2.- Eliminar jugador de la lista de fichajes")
    print("3.- Ver la lista completa de fichajes")
    print("4.- Buscar si un jugador específico está en la lista de fichajes")
    print("5.- Ordenar la lista de fichajes alfabeticamente")
    print("6.- Salir del programa")
    
def askPlayer():
    return input("Introduzca el nombre del jugador")
 
def addPlayer(lista):
    lista.append(askPlayer())
    
def removePlayer(lista):
    lista.remove(askPlayer())
    
def seePlayers(lista):
    print(lista)
    
def findPlayer(lista):
    return askPlayer() in lista

def orderList(lista):
    lista.sort()
    
    
jugadores = ["Ronaldo", "Benzema", "Bale", "Isco", "Asensio"]

op = 0;

while (op != 6):
    printMenu()
    op = int(input())
    if (op == 1):
        addPlayer(jugadores)
    elif (op == 2):
        removePlayer(jugadores)
    elif (op == 3):
        seePlayers(jugadores)
    elif (op == 4):
        if (findPlayer(jugadores)):
            print("El jugador está en la lista")
        else:
            print("Jugador no encontrado")
    elif (op == 5):
        orderList(jugadores)
    elif (op == 6):
        print("Saliendo del programa")
    else:
        print("Introduce una opción válida")



