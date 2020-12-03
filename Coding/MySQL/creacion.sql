CREATE TABLE `hector`.`zambrano` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `nombre` VARCHAR(11) NOT NULL ,
    `apellido` VARCHAR(11) NOT NULL ,
    `covid` BOOLEAN NOT NULL DEFAULT FALSE ,
    PRIMARY KEY (`id`)
    )
    ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_spanish_ci;


/*!INSERCION DE ATRIBUTOS*/;
INSERT INTO `leal`(`id`, `nombre`, `apellido`, `covid`) VALUES (NULL,"Carla","Mora","0");
INSERT INTO `leal`(`id`, `nombre`, `apellido`, `covid`) VALUES (NULL,"Matias","Castro","0")
INSERT INTO `leal`(`id`, `nombre`, `apellido`, `covid`) VALUES (NULL,"Esteban","Zambrano","1")
INSERT INTO `leal`(`id`, `nombre`, `apellido`, `covid`) VALUES (NULL,"Hector","Zambrano","1")
INSERT INTO `leal`(`id`, `nombre`, `apellido`, `covid`) VALUES (NULL,"Maximiliano","Castro","0")

/*!SE PUEDE OMITIR VALOR AUTOINCREMENTAL*/;
INSERT INTO `leal`(`nombre`, `apellido`, `covid`) VALUES ("Sandra","Canio","0")

/*!MODIFICAR UN REGISTRO*/;
UPDATE `guillon` SET `id` = '6' WHERE `guillon`.`id` = 55;

/*!ELIMINAR UN REGISTRO*/;
DELETE FROM `guillon` WHERE `guillon`.`id` = 4

/*!CONSULTAR REGISTRO POR SU CLAVE PRIMARIA*/;
SELECT * FROM `guillon` WHERE `id`=2

-- BOLIANOS (Solo en mayusculas) TRUE(1), FALSE(0)
TRUE