try:
    num = int(input("Introduce un número"))
    if  (num%10==0):
        print(num,"es múltiplo de 10")
    else:
        print(num,"no es múltiplo de 10")
except:
    print("Un número, coño")