try:
    hours = int(input("Introduce el número de horas que has trabajado"))
    if (hours <= 40):
        salary = hours * 16
        print("Sueldo:",salary,"€")
    else:
        diff = hours - 40;
        salary = 40*16 + diff*20
        print("Sueldo:",salary,"€")
except:
    print("Numeros, coño")