# los comentarios son con gato

print("Hola mundo!!")
#  variables , son definidas por su contenido
num1= 10

palabra1="Hola"
print(palabra1)
print("tipo de dato 1",type(palabra1))

palabra1= 11
print(palabra1)

texto = "me encanta codificar en python"
print(texto)

#tipo de datos - type(variable)

print("tipo de dato",type(palabra1))

mayorDeEdad = True
print("variable mayorDeEdad",type(mayorDeEdad))

pi = 3.14159
print("pi",type(pi))#pi <class 'float'>

texto2 = "otro texto"
print("eso es"+texto2)#eso esotro texto
print("eso es",texto2)#eso es otro texto

#interpolacion
print(f"f variable1 {pi}, variable2 {texto2}")

#format
print("Format {} esto es una variable {}".format(pi,texto2))

#formatting
print("Formatting pi %d, variable2 %s"%(pi,texto2))

x = "hello world"
print(x.title())
print()
z = """hola 
mundo 
!!
"""
print(z)

y = '''este 
es 
otro 
mensaje
'''
print(y)

#imprimira una sola linea
u = "mensaje 1 "\
    "mensaje 2 "\
    "mensaje 3"
print(u)
