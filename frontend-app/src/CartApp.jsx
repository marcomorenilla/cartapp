import { useEffect, useState } from "react"
import { getProducts } from "./services/ProductsService"

export const CartApp = () => {

    const [products, setProducts] = useState([]);
    const [cartList, setCartList] = useState([]);


    useEffect(() => {
        setProducts(getProducts())
    }, [])

    useEffect(() => {
        console.log(`products fetched:  ${products.length}`)
    }, [products])

    // busca un producto antes de añadirlo sin el return del map se devuelve undefined
    const handleClick = (product) => {
        const findedProduct = cartList.find((prodList) => prodList.product.id == product.id)
        if (findedProduct) {
            console.log(findedProduct);
            setCartList(cartList.map((prodList) => {
                console.log(`La cantidad es ${prodList.quantity}`);
                console.log(prodList.product.id == product.id);
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

    return (<>
        <section className="container mx-auto">
            <h1 className="font-bold text-center mt-5 mb-5 text-[50px] "> Carro de la compra</h1>
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
                                        <p className="text-gray-700 p-2">{prod.price} € </p>
                                    </div>
                                    <div>
                                        <button type="button" className="hover:bg-blue-700 bg-blue-600 rounded p-2 text-white text-base font-bold"
                                            onClick={() => handleClick(prod)} >Añadir</button>
                                    </div>

                                </div>
                            </div>
                        )
                    }

                    )
                }

            </div>



        </section>
        <section className="container max-w-xl mx-auto mt-5">
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

                        cartList.map(lista => {

                            return (
                                <tr className={lista.product.id % 2 == 0 ? "bg-gray-100" : "bg-white"}
                                    key={lista.product.id}>
                                    <td className="py-4 px-6 font-medium text-gray-900">
                                        {lista.product.name}
                                    </td>
                                    <td className="py-4 px-6 text-gray-700">
                                        {lista.product.price}
                                    </td>
                                    <td className="py-4 px-6  text-gray-700">
                                        {lista.quantity}
                                    </td>
                                    <td className="py-4 px-6  text-gray-700">
                                        {lista.product.price * lista.quantity}
                                    </td>
                                    <td className="py-4 px-6">
                                        Eliminar
                                    </td>
                                </tr>)
                        })
                    }


                </tbody>
            </table>
        </section>
    </>)
}