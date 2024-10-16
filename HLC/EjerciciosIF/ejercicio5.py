try:
    month = int(input("Introduce tu mes de nacimiento"))
    day = int(input("Introduce tu día de nacimiento"))
    
    if((month==3 and day >= 21) or (month==4 and day <= 19)):
        print("Eres Aries")
    elif((month==4 and day >= 20) or (month==5 and day <= 20)):
        print("Eres Tauro")
    elif((month==5 and day >= 21) or (month==6 and day <= 20)):
        print("Eres Géminis")
    elif((month==6 and day >= 21) or (month==7 and day <= 22)):
        print("Eres Cáncer")
    elif((month==7 and day >= 23) or (month==8 and day <= 22)):
        print("Eres Leo")
    elif((month==8 and day >= 23) or (month==9 and day <= 22)):
        print("Eres Virgo")
    elif((month==9 and day >= 23) or (month==10 and day <= 22)):
        print("Eres Libra")
    elif((month==10 and day >= 23) or (month==11 and day <= 21)):
        print("Eres Escorpio")
    elif((month==11 and day >= 22) or (month==12 and day <= 21)):
        print("Eres Sagitario")
    elif((month==12 and day >= 22) or (month==1 and day <= 19)):
        print("Eres Capricornio")
    elif((month==1 and day >= 20) or (month==2 and day <= 19)):
        print("Eres Acuario")
    elif((month==2 and day >= 19) or (month==3 and day <= 20)):
        print("Eres Piscis")
    else:
        print("Fecha no válida, por lo que sea")
except:
    print("Números, coño")