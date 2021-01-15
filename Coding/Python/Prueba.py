direccion = "prat 123,temuco" \
",Chile"
print(direccion)
direccion2='''Mi direccion es 
av. siempre viva
Punta Arenas
'''
print(direccion2)
#
print(1)
print("uno")
# esto es un comentario
# El contenido define el tipo de variable
numero = 1
print(numero)
numero = "uno"
print("esto es un texto",numero)

#if - else
numero=2
numero2= 2

if numero > numero2 :
    print(numero,"es mayor que",numero2)
elif numero < numero2 :
    print(numero2,"es mayor que",numero)
else :
    print(numero,"es igual a",numero2)

print()
print("Hola, cual es tu nombre?")
#recibir respuesta del teclado
respuesta = input()
print("su nombre es",respuesta)
print()
respuesta2 = input("Cual es tu email? ")
print(respuesta2)
#todo lo que se ingrese por input es str (texto)
respuesta3 = int(input("cual es tu edad? "))
print(respuesta3)
#resp
respuesta4 = input("Ingrese un numero ")
respuesta5 = input("Ingrese otro numero ")

print("el resultado es:",respuesta4+respuesta5)

print(type(respuesta3))
print(type(respuesta4))
------------------------------------------

import random
print("****************************************")
print("Realizar la selección de alumno a presentar ejercicio")
print("****************************************")

def obtenerNumero(alumnosTotales):
    numero = random.randint(1,alumnosTotales)
    return numero

print()
print("****************************************")
cantAlumnos = int(input("Ingrese total de alumnos asistentes a clases hoy"))
print("****************************************")
numElegido= obtenerNumero(cantAlumnos)
print()
print("****************************************")
print("*                                      *")
print("* El o La afortunada es:", numElegido,"  *")
print("*                                      *")
print("****************************************")
