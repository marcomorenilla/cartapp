# Cartapp
Proyecto de carro de compra con React + Tailwind CSS + Spring Boot + MaríaDB
___

## 1. Descripción.

Se trata de una pequeña aplicación que muestra un catálogo de productos y permite simular parte del funcionamiento de un carro de compras.

## 2. Uso.

La aplicación se compone de dos ventanas aunque tenga 3 opciones en el menú:

1. **Home**: Se utiliza para redireccionar la navegación desde la raíz del servidor al catálogo.
2. **Catálogo**: Muestra 6 productos sacados de la web de [Arena](https://www.arenasport.com/es_es/) mostrando nombre, descripción, imagen, precio y dándo la opción de añadir al carro.
3. **Carro**: Si está vacío se muestra un aviso y en caso contrario vemos los productos que hemos ido añadiendo del catálogo.

Para utilizarla hay que ir añadiendo o eliminando productos del catálogo al carro e ir navegando entre ambas opciones.

## 3. Conocimientos adquiridos.

- Uso de Hooks:
  - `useReducer`
  - Hooks personalizados.

- Persistencia con sessionStorage.

- Rutas en la aplicación con **React Router**.

