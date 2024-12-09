class biblioteca:
    def __init__(self):
        self.librosDisponibles = ["Reina Roja", "Loba Negra", "Rey Blanco", "Cicatriz", "El Paciente"]
        self.librosPrestados = ["El Bestiario de Axlin", "El Secreto de Xein", "La Misión de Rox"]
    
    def agregar_libro(self, titulo):
        self.librosDisponibles.append(titulo)
        
    def mostrar_libros_disponibles(self):
        print(self.librosDisponibles)
    
    def prestar_libro(self, titulo):
        try:
            index = self.librosDisponibles.index(titulo)
            self.librosPrestados.append(self.librosDisponibles.pop(index))
        except:
            print("No existe ningún libro con dicho título")
    
    def devolver_libro(self, titulo):
        try:
            index = self.librosPrestados.index(titulo)
            self.librosDisponibles.append(self.librosPrestados.pop(index))
        except:
            print("No existe ningún libro con dicho título")
    
    def buscar_libro(self, titulo):
        if(titulo in self.librosDisponibles):
            return 0
        elif(titulo in self.librosPrestados):
            return 1
        else:
            return 2
            
biblio = biblioteca()
print(biblio.librosDisponibles)
print(biblio.librosPrestados)

biblio.prestar_libro("Reina Roja")
print(biblio.librosDisponibles)
print(biblio.librosPrestados)

def printMenu():
    print("Elija una opción:")
    print("1.- Agregar libro")
    print("2.- Mostrar libros disponibles")
    print("3.- Prestar libro")
    print("4.- Devolver libro")
    print("5.- Buscar libro")
    print("6.- Salir")
    


op = 0

while (op != 6):
    printMenu()
    op = int(input())
    if (op == 1):
        biblio.agregar_libro("Libro de Prueba")
    elif (op == 2):
        biblio.mostrar_libros_disponibles()
    elif (op == 3):
        biblio.prestar_libro("Libro de Prueba")
    elif (op == 4):
        biblio.devolver_libro("Libro de Prueba")
    elif (op == 5):
        biblio.buscar_libro("Libro de Prueba")
    elif (op == 6):
        print("Saliendo del programa")
    else:
        print("Introduce una opción válida")