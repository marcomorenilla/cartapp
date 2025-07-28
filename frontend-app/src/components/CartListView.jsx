import { CartTableView } from "./CartTableView"

export const CartListView = ({cartList, handleRemoveProduct}) => {
     /*Vista tabla de productos del carro*/ 
    return (
        < div className="container w-4/5 mx-auto mt-40" >
            {
                // Solamente mostramos tabla si hay artículos en la lista
                cartList.length > 0 && <CartTableView cartList={cartList} handleRemoveProduct={handleRemoveProduct} />
            }
        </div >
    )
}
