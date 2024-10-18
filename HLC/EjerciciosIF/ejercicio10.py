try:
    num = int(input("Introduce un número entre 0 y 99999"))
    if (num >= 0 or num <= 99999):
        print("El número",num,"tiene un total de",len(str(num)),"cifras")
    else:
        raise Exception("METE UN NUMERO ENTRE 0 Y 99999 OSTIA")
except: 
    print("NUMEROS COÑO")