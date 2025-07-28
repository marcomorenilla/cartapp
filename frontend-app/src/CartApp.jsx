import { Navigate, Route, Routes } from "react-router-dom";
import { CartProductsView } from "./components/CartProductsView";
import { useCartList } from "./hooks/useCartList";
import { CartListView } from "./components/CartListView";
import { NavBar } from "./components/NavBar";


export const CartApp = () => {
    /**Hook personalizado que encapsula la lógica */
    const [cartList, handleAddProduct, handleRemoveProduct, itemCounter] = useCartList()

    return (<>
        {/*Vista Grid de productos*/}
        <section className="container mx-auto">
            <NavBar cartItemCount={itemCounter}/>
            <Routes>
                <Route path="/" element={<Navigate to={"/catalog"}/>}/>
                <Route path="catalog" element={<CartProductsView handleAddProduct={handleAddProduct} />}/>
                <Route path="cart" element={(
                    cartList.length == 0 ? <p className="text-center text-yellow-500 font-bold bg-yellow-200 p-3 m-20 rounded mt-40 text-[30px] "> Carro de la compra vacío </p> :
                    <CartListView cartList={cartList} handleRemoveProduct={handleRemoveProduct}/> )}/>
            </Routes>
            
        </section>
    </>)
}