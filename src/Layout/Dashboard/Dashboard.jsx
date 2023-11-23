import { FaBookOpen, FaCalendar, FaHome, FaRev, FaShoppingCart, FaUsers } from "react-icons/fa";
import { FaBookAtlas, FaBookmark, FaList, FaUtensils } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";



const Dashboard = () => {
    const [cart] = useCart()
    const isAdmin = true
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-300 p-4">
                <div className="ml-6">
                    <h2 className="text-xl font-bold">BistroBoss</h2>
                    <h3 className="text-lg font-semibold">R E S T A U R A N T</h3>
                </div>
                <ul className="menu">
                  {
                    isAdmin? <>
                      <li>
                        <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> add items</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItem'><FaList></FaList> manage items</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'><FaBookAtlas></FaBookAtlas> Manage bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users'><FaUsers></FaUsers> All Users</NavLink>
                    </li>
                    </>:<>
                    <li>
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'><FaRev></FaRev>Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'><FaBookmark></FaBookmark> My Bookings</NavLink>
                    </li>
                    </>
                  }
                    <div className="divider">OR</div>
                    <li>
                        <NavLink to='/'><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'><FaBookOpen></FaBookOpen> Menu</NavLink>

                    </li>
                    <li>
                        <NavLink to='/order/contact'><MdEmail /> Contact</NavLink>

                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">

                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;