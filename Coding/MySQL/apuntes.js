// ERD = ‘Entity Relacional Diagram' o ‘Diagrama de relación de entidad'



/*
=======Primera forma=======

Cada columna de su tabla solo puede tener 1 valor.

Ex. No debes tener una columna de dirección en tu tabla que enumere la dirección, la ciudad, el estado y el código postal, todos separados por comas.

=======Segunda forma=======

Cada columna de tu tabla que no sea una clave (primaria o extranjera) debe tener valores únicos.

Ex. Si tienes una tabla de películas con una columna de categorías, no debes repetir una categoría más de una vez.

=======Tercera forma=======

No puedes tener una columna sin clave que dependa de otra columna sin clave.

Ex. Si tienes una tabla de libros con columnas publisher_name y publisher_address, publisher_address y publisher_name deben separarse en una tabla separada y vincularse a los libros con una clave foránea. Publisher_address depende de publisher_name y ninguna de las columnas es una columna clave.*/

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
/*
====VARCHAR (número de caracteres)====

Se usa para almacenar valores no numéricos que pueden tener hasta 255 caracteres. Se llama VARCHAR porque puede almacenar un número variable de caracteres y solo usará el espacio requerido para cada registro almacenado en la base de datos. VARCHAR debería usarse para valores con diferentes longitudes de caracteres, como un correo electrónico, nombre o apellido.

====CHAR (número de caracteres)====

También se usa para almacenar valores no numéricos, sin embargo, utilizará todo el espacio para el número de caracteres establecido independientemente de qué valor se agregue a el. Por ejemplo, si configuró CHAR (15) e intento almacenar el valor "Codificación", usará el equivalente a 15 caracteres aunque "Codificación" tenga solo 6 caracteres. Char es bueno para usar en cosas que siempre tendrán un número determinado de caracteres. Char funcionaría bien para algo como una abreviatura de estado.

====INT====

Se usa para almacenar enteros.

Las columnas que encontrará principalmente utilizando el INT son cosas como un identificador único para cada tabla. La mayoría de las filas en una tabla no excederá de 2,1 mil millones de registros. INT es bueno para usar para la mayoría de los valores numéricos normales, como un número de teléfono o un código postal.

sin signo (solo números positivos): puede almacenar valores numéricos desde 0 hasta 4294967295

con signo (números positivos y negativos): puede almacenar valores numéricos desde -2147483648 hasta 2147483647

====BIGINT====

BIGINT se usaría para columnas que tendrían que almacenar grandes cantidades. En la mayoría de los casos, no necesitarías BIGINT, pero si quisieras almacenar algo como una identificación de Facebook cuando utilizas la API de Facebook, dado que tienen más de mil millones de usuarios, la identificación deberá ser un tipo de datos de BIGINT.

sin signo (solo números positivos nuevamente): puede almacenar valores numéricos desde 0 hasta 18446744073709551615

con signo (números positivos y negativos): puede almacenar valores numéricos desde 9223372036854775807 hasta -9223372036854775808.

====TINYINT====

TINYINT sería bueno usar para números que serán relativamente pequeños. Un buen ejemplo de algo que usaría un TINYINT es el identificador de nivel de usuario (0 - usuario inactivo, 1 - usuario activo, 9 - administrador).

sin signo: puede almacenar valores numéricos desde 0 hasta 255

con signo: puede almacenar valores numéricos desde -128 hasta 127

====FLOAT====

Se usa para almacenar números de coma flotante (números que necesitan tener decimales). Una columna de ejemplo para esto sería como un item_cost.

====TEXT====

Se usa para almacenar una gran cantidad de texto, como una descripción, mensaje o comentario. Usa esto para cualquier texto que VARCHAR () sea demasiado pequeño para manejar.

====DATE====

Se usa para almacenar una fecha y hora en el formato AAAA-MM-DD hh: mm: ss
*/