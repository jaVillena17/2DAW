try:    
    amount = int(input("Introduce el importe de tu compra para saber si tienes descuento"))
    if(amount > 300):
        off = amount - (amount*20/100)
        print("Tienes un 20% de descuento en tu compra. El precio se queda en",off,"€")
    else:
        print("No tienes descuento en tu compra de",amount,"€")
except: 
    print("Números, coño")