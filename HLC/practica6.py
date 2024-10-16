name = input("Introduce tu nombre")
ape1 = input("Introduce tu primer apellido")
ape2 = input("Introduce tu segundo apellido")
lowername = name.lower()

if (lowername[0]==lowername[len(name)-1] and len(ape1) == len(ape2)):
   print(name, ape1, ape2," Persona APTA para participar en el concurso")
else:
   print(name, ape1, ape2," Persona NO APTA para participar en el concurso")