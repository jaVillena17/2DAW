nombre = input("Pon tu nombre, pichita ")
numero = 10
print("Hola "+nombre,numero)
var1 = var2 = 3;
print(type(nombre))
"""
Comentario
"""
print(isinstance(numero, int))
"""Instance Of de manual"""
numCad = input("Introduce un numero")
print(isinstance(numCad, int))
"""Función para convertir cadena a int, es como un casting"""
numero2 = int(numCad)
print(numero2+5)
print(isinstance(numero2, int))
"""Otra forma"""
print(numero2.is_integer)

"""Prueba con try catch"""
edad = input("Introduce tu edad")
try:
    print("Tienes "+int(edad)+" años")
except:
    print("Esperaba un número, crack")
