lista_pares = [2,4,6,8,0]
print(lista_pares)#[2,4,6,8,0]

#todas las listas de pares (arreglos) comienzan en la posicion cero
print(lista_pares[0])#2

#tamaño de la lista(arreglo) = len(arreglo)
print(len(lista_pares))#5 (cantidad de elementos)

#acceder al ultimo elemento de la lista (arreglo)
print(lista_pares[len(lista_pares)-1])#0

#podemos recorrer el arreglo con valores negativos
print(lista_pares[-1])#0
print(lista_pares[-2])#8

# lista vacia
lista = []
print(len(lista))


arreglo = ["Hector","Zambrano","Leal", 31, True]

print(arreglo[-5])

#secciones de listas lista_pares = [2,4,6,8,0]
print(lista_pares[3:])# para que imprima los valores despùes de la pocision 3 en adelante
print(lista_pares[:3])# para que imprima todo los valores antes de la pocicion
print(lista_pares[::])# para que imprima todos los elementos


#igualdades y valores
lista = lista_pares     #igualando a lista_pares (si se modifica uno cambian los dos)
lista2 = lista_pares[:]  #obteniendo los valores (no cambia al cambiar lista_pares)
print(lista)#[2, 4, 6, 8, 0]

#para modificar un valor de la lista(arreglo)
lista_pares[2] = 5
print(lista_pares)#[2, 4, 6, 8, 0]


#agregar valores a un arreglo
lista.append("a")
print(lista)