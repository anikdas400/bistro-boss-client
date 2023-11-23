import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart]= useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    const navOptions = <>
        <li className="text-lg font-semibold  "><Link to='/'>Home</Link></li>
        <li className="text-lg font-semibold "><Link to='/menu'>OurMenu</Link></li>
        <li className="text-lg font-semibold "><Link to='/secret'>Secret</Link></li>
        <li className="text-lg font-semibold"><Link to='/order/salad'>Order Shop</Link></li>
        <li className="text-lg font-semibold  "><Link to='/dashboard/cart'>
            <button className="btn">
            <FaShoppingCart className="text-xl text-emerald-600" />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>




    </>

    return (
        <>
            <div className="navbar bg-black fixed z-30 bg-opacity-30 text-white max-w-screen-xl mx-auto  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div>
                        <a className="btn btn-ghost normal-case text-xl">BistroBoss</a>
                        <h2 className="uppercase text-center">Restaurant</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-end">

                    {
                        user ? <>
                            <span>{user?.displayName}</span>
                            <img className="w-12 h-12 rounded-full mr-3 ml-2" src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut} className="btn btn-outline btn-secondary">LogOut</button>
                        </> : <>
                            <button className="text-lg font-semibold btn-outline btn-secondary "><Link to='/login'>Login</Link></button>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;