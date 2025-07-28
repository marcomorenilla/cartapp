

export const CartTableRowView = ({product, quantity, handleRemoveProduct, }) => {
    return (
        <>
        {/**Comportamiento de cada fila de la tabla
         * Ojo que el key se pasa en el padre CartTableView
         */}
            <tr className={product.id % 2 == 0 ? "bg-gray-100" : "bg-white"}
                >
                <td className="py-4 px-6 font-medium text-gray-900">
                    {product.name}
                </td>
                <td className="py-4 px-6 text-gray-700">
                   {product.price.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                </td>
                <td className="py-4 px-6  text-gray-700">
                    {quantity}
                </td>
                <td className="py-4 px-6  text-gray-700">
                    {(product.price * quantity).toLocaleString("es-ES", { style: "currency", currency: "EUR" })} 
                </td>
                <td className="py-4 px-6">
                    <button type="button"
                        className="hover:bg-blue-700 bg-blue-600 rounded p-2 text-white text-base font-bold"
                        onClick={() => handleRemoveProduct(product)}>Eliminar</button>
                </td>
            </tr>
        </>
    )
}
