try:
    num = int(input("Introduce el número que quieres comprobar si es primo"))
    prime = True
    cont = 2;

    if (num%2!=0):
        cont = 3;
        while num%cont != 0:
            cont += 2;
    if cont == 2: print("El número",num," no es primo")
    elif cont == num: print("El número",num,"es primo")
    else: print("El número",num,"es primo")
except:
    print("Numeros, coño")