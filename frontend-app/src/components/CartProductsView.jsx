import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductsService"
export const CartProductsView = ({ handleAddProduct }) => {

    // Gestionamos productos como estado
    const [products, setProducts] = useState([]);
    const getApiProds = async () => {
        const prods = await getProducts();
        setProducts(prods);
        ;
    }
    // Cuando carga la página modificamos los productos recuperados
    useEffect(() => {
        getApiProds();
    }, [])

    return (
        <>
            {/*Vista card de productos */}
            <div className="mt-40 w-2/3 mx-auto">
                {
                    products.map(prod => {
                        return (
                            <div className="text-center mt-4 bg-white rounded-xl shadow-md overflow-hidden "
                                key={prod.id}>
                                <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
                                    <h2 className="text-xl font-semibold text-gray-800">{prod.name}</h2>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-4 items-start">
                                        <div className="flex justify-center">

                                            <img src={prod.img} alt="Img prod no encontrada" className="w-68 h-auto object-cover rounded-lg" />
                                        </div>
                                        <div>
                                            <p className="text-gray-700 text-justify indent-2 text-lg">
                                                {prod.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 py-2 border-t border-gray-200 grid grid-cols-2 items-center">
                                    <div className="flex justify-center">
                                        <p className="text-gray-700 font-semibold bg-yellow-200 rounded p-2">
                                            {prod.price
                                                .toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                                        </p>
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            type="button"
                                            className="hover:bg-blue-700 bg-blue-600 rounded p-2 text-white text-base font-bold"
                                            onClick={() => handleAddProduct(prod)}
                                        >
                                            Añadir
                                        </button>
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
