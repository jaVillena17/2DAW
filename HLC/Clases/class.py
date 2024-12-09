class Punto:
    def __init__(self,x,y):
        self.x = x
        self.y = y
    def pintarPunto(self):
        print("Coordenada X:",self.x,"Coordenadada Y:",self.y)
    
    def iguales(self, p):
        if(self.x == p.x and self.y == p.y):
            print("Iguales")
        else:
            print("Distintos")
punto = Punto(4,5)
punto.pintarPunto()