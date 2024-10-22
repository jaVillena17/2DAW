try:
    fib = int(input("Introduce la cantidad de numeros de la serie de Fibonacci que deseas ver"))
    string = "01"
    last = 1
    last2 = 0;
    cont = 0;

    while (cont!=fib):
        num = last + last2
        last2 = last
        last = num
        string += str(num)
        cont += 1
    print("Serie de Fibonacci:",string);
except:
    print("NUMEROS")