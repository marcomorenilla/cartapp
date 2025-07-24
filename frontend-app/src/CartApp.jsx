import { CartProductsView } from "./components/CartProductsView";
import { CartTableView } from "./components/CartTableView";
import { useCartList } from "./hooks/useCartList";


export const CartApp = () => {
    /**Hook personalizado que encapsula la lógica */
    const [cartList, handleAddProduct, handleRemoveProduct] = useCartList()

    return (<>
        {/*Vista Grid de productos*/}
        <section className="container mx-auto">
            <h1 className="font-bold text-center mt-5 mb-5 text-[50px] "> Carro de la compra</h1>

            <CartProductsView handleAddProduct={handleAddProduct} />
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