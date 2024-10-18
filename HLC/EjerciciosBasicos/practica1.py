
try:
    num1 = float(input("Escribe el primer número"))
    num2= float(input("Escribe el segundo número"))
    print("El doble del segundo número es:",num2*2)
    print("La tercera parte del primer numero es:",num1/3)
    print("El cuadrado de la suma de los dos numero es:",pow((num1+num2),2))
    print("La decima parte de la suma de cuadrados de ambos números es",(pow(num1,2)+pow(num2,2))/10)
except:
    print("Pon números, coño")
    