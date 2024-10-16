numGoles = input ("Introduce el número de goles")
numMatches = input("Ahora introduce el número de partidos jugados")
try:
    media = int(numGoles)/int(numMatches)
    print("Has marcado un total de "+numGoles+" goles en "+numMatches+" partidos. Media de "+str(media)+" goles por partido")
except:
    print("Tenías que meter números")

golesLocal =input("Escribe cuantos goles ha metido el equipo local")
golesVisitante = input("Escribe cuantos goles ha marcado el equipo visitante")
try:
    golAverage = abs(int(golesLocal) - int(golesVisitante))
    print("Hay una diferencia de "+str(golAverage)+" goles")
except:
    print("Mete números, coño")
    