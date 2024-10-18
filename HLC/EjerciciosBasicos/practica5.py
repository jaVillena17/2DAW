try:
    hojas = int(input("Escribe el número de hojas que tendrá el cuaderno"))
    if (hojas%3==0):
        print("El cuaderno tiene",hojas," hojas",hojas//3,"son rojas", hojas//3,"son verdes y",hojas//3,"son azules")
    elif (hojas%3==1): 
        print("El cuaderno tiene",hojas," hojas",(hojas//3)+1,"son rojas", hojas//3,"son verdes y",hojas//3,"son azules")
    else:
        print("El cuaderno tiene",hojas," hojas",(hojas//3)+1,"son rojas", (hojas//3)+1,"son verdes y",hojas//3,"son azules")
except:
    print("Numero, crack")
           