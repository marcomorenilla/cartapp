import { CartTableRowView } from "./CartTableRowView"


export const CartTableView = ({ cartList, handleRemoveProduct }) => {
    
    return (

        <>
            {/**Vista de la tabla que simula el carro de la compra */}
            <table className=" bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-700 text-white">
                    <tr>
                        <th className="py-3 px-6  font-bold uppercase">
                            Producto
                        </th>
                        <th className="py-3 px-6  font-bold uppercase">
                            Precio
                        </th>
                        <th className="py-3 px-6  font-bold uppercase">
                            Cantidad
                        </th>
                        <th className="py-3 px-6  font-bold uppercase">
                            Total
                        </th>
                        <th className="py-3 px-6 uppercase">Eliminar</th>
                    </tr>

                </thead>
                <tbody className="divide-y divide-gray-200">
                    {
                        // Aquí se pasa el key para la renderización de las filas de la tabla
                        cartList.map(({ product, quantity }) =>
                            <CartTableRowView key={product.id} product={product} quantity={quantity} handleRemoveProduct={handleRemoveProduct} />
                        )
                    }
                    {/**Calculamos el total
                     * 1. mapeamos elementos de la lista y los sumamos
                     * 2. el valor devuelto se suma al acumulador del reduce
                     */}
                    <tr >
                        <td colSpan={3} className="text-end pr-2 uppercase font-medium">
                            Total:
                        </td>
                        <td colSpan={2} className="p-6 font-medium">
                            <span className="p-3 rounded-full font-medium bg-yellow-500 text-white">
                                {cartList
                                    .map(({ product, quantity }) => product.price * quantity)
                                    .reduce((accum, current) => accum + current, 0)
                                    .toLocaleString("es-ES", { style: "currency", currency: "EUR" })
                                } 
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
