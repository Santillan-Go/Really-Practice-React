



# list

## products  ED

id INT PRIMARY KEY AUTO_INCREMET,
title VARCHAR(255),
price DECIMAL,
description TEXT,
image VARCHAR(255),
rating  DECIMAL(2,1)


## categories EC
id_category INT PRIMARY KEY AUTO_INCREMET,
name VARCHAR(150)


## category_producto  EP
id_category FK
id_producto  FK
