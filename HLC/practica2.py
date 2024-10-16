try:
    area = pow(float(input("Introduce cuanto mide un lado de la base")),2)
    altura = float(input("Introduce cuanto mide la piramide de alto"))
    
    volumen = (1/3)* area * altura
    print("La piramide tiene un volumen de ",volumen,"metros cúbicos")
    print("Esto equivale a",volumen/2500,"piscinas olímpicas, con un volumen medio de 2500 metros cúbicos")
except:
    print("Escribe numeros, coño")
