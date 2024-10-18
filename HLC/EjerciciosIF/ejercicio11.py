try:
    money = int(input("Introduce la cantidad de dinero a convertir"))
    op = int(input("Escribe el número de la divisa a la que quieras convertir\n1.- Libras\n2.- Dólares\n3.- Yenes \n4.- Bolíbares"))
    if (op == 1):
        print(money, "euro/s son ",money*0.83 ,"libra/s")
    elif (op == 2):
        print(money, "euro/s son ",money*1.09 ,"dolar/es")
    elif (op == 3):
        print(money, "euro/s son ",money*162.42 ,"yen/es japoneses")
    elif (op == 4):
        print(money, "euro/s son ",money*42.44 ,"bolívar/es venezolanos")
except: 
    print("NUMEROS COÑO, NUMEROS")