import { NavLink } from "react-router-dom"

export const NavBar = ({ cartItemCount }) => {
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h1 className="font-bold text-center mt-5 mb-5 text-[30px] "> CartApp</h1>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink className="hover:text-blue-500 aria-[current=page]:text-blue-400"
                                to="/"
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="hover:text-blue-500 aria-[current=page]:text-blue-400"
                                to="/catalog">Catálogo</NavLink>
                        </li>
                        <li>
                            <NavLink className="relative hover:text-blue-500 aria-[current=page]:text-blue-400"
                                to="/cart">Carro
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-4 -right-3 bg-red-500 text-white font-bold px-2 text-sm rounded-[10vw]">
                                        {cartItemCount}
                                    </span>)}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


