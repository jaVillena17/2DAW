try:
    largos = int(input("Introduce cuantos largos has realizado"))
    longitudPiscina = float(input("Introduce la longitud de la piscina"))
    total = largos * longitudPiscina
    
    print("El nadador ha nadado un total de ",total/1000,"km, de los cuales:")
    if(largos%2==0):print("De los cuales", total/2,"metros son a estilo crol y",total/2,"metros son a espalda")
    else: print("De los cuales", (largos//2+1)*longitudPiscina,"metros son a estilo crol y",largos//2*longitudPiscina,"metros son a espalda")
except:
    print("Números, coño")
