try:
    hour = int(input("Introduce la hora (solo la hora, no los minútos). Formato 24 horas"))
    if(hour < 1 or hour >24):
        print("Hora no válida")
    elif (hour >= 6 and hour<=12):
        print("Buenos días")
    elif (hour>=13 and hour<=20):
        print("Buenas tardes")
    else:
        print("Buenas noches");
except:
    print("Número, coño")