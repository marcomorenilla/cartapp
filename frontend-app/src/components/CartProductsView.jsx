export const CartProductsView = ({ products, handleAddProduct }) => {
    return (
        <>
            {/*Vista card de productos */}
            <div className="grid grid-cols-3">
                {
                    products.map(prod => {
                        return (
                            <div className="text-center m-3 bg-white rounded-xl shadow-md overflow-hidden "
                                key={prod.id}>
                                <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
                                    <h2 className="text-xl font-semibold text-gray-800">{prod.name}</h2>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-700 text-base">
                                        {prod.description}
                                    </p>
                                </div>

                                <div className="px-6 py-2 border-t border-gray-200 grid grid-cols-2">
                                    <div>
                                        <p className="text-gray-700  font-semibold bg-yellow-200 rounded p-2">{prod.price
                                            .toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" className="hover:bg-blue-700 bg-blue-600 rounded p-2 text-white text-base font-bold"
                                            onClick={() => handleAddProduct(prod)} >Añadir</button>
                                    </div>

                                </div>
                            </div>
                        )
                    }

                    )
                }

            </div>
        </>
    )
}
