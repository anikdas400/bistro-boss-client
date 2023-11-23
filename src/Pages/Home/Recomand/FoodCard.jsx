import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";


const FoodCard = ({item}) => {
    const {name,recipe,image,price,_id}=item
    const {user}= useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [,refatch] = useCart()
    const handleAddToCart = ()=>{
        
        
        if(user && user.email){
            // send cart item to data base
            // console.log(user.email,food)
            const cartItem={
                menuId : _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                    //   refetch the cart
                      refatch()
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login' , {state:{from:location}}  )
                }
              });
        }
    }
    return (
        <div>

                <div className="card bg-slate-300 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                        <p className="absolute right-0 top-12 p-2 rounded-lg mr-10 text-white bg-slate-600">${price}</p>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions">
                            <button onClick={handleAddToCart}
                            className="btn btn-outline bg-stone-300 border-0 border-orange-500 border-b-4">add to cart </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default FoodCard;