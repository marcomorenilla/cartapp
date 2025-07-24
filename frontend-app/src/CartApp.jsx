import { useEffect, useState } from "react"
import { getProducts } from "./services/ProductsService"
import { CartProductsView } from "./components/CartProductsView";
import { CartTableView } from "./components/CartTableView";

export const CartApp = () => {

    const [products, setProducts] = useState([]);
    const [cartList, setCartList] = useState([]);


    useEffect(() => {
        setProducts(getProducts())
    }, [])

    useEffect(() => {
        console.log(`products fetched:  ${products.length}`)
    }, [products])

    // Añade un producto a la tabla carro de la compra.
    // Ojo sin el return el map devuelve una lista de undefined y rompe la app.
    const handleAddProduct = (product) => {
        const findedProduct = cartList.find((prodList) => prodList.product.id == product.id)
        if (findedProduct) {
            setCartList(cartList.map((prodList) => {
                if (prodList.product.id == product.id) {
                    prodList.quantity++;
                }
                return prodList;
            }))
        } else {
            setCartList([...cartList, {
                product,
                quantity: 1
            }
            ])
        }
    }
    // Elimina un elemento de la lista cuando pulsa en el botón eliminar de la tabla
    // Ojo el filter devuelve la lista con los productos que cumplen condición id != del elemento clicado
    const handleRemoveProduct = (product) => {
        setCartList(cartList.filter(prodList => prodList.product.id != product.id));
    }

    return (<>
        {/*Vista Grid de productos*/}
        <section className="container mx-auto">
            <h1 className="font-bold text-center mt-5 mb-5 text-[50px] "> Carro de la compra</h1>

            <CartProductsView products={products} handleAddProduct={handleAddProduct} />
        </section>

        {/*Vista tabla de productos del carro*/}
        <section className="container max-w-xl mx-auto mt-5">
            {
                // Solamente mostramos tabla si hay artículos en la lista
                cartList.length > 0 && <CartTableView cartList={cartList} handleRemoveProduct={handleRemoveProduct} />
            }
        </section>
    </>)
}