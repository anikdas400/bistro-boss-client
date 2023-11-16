import { Link } from "react-router-dom";
import Cover from "../../../Shard/Cover/Cover";
import MenuItems from "../../../Shard/MenuItems";


const MenuCategory = ({ items,title,img }) => {
    
    return (
        <div>
            {
                title && <Cover img={img} title={title} ></Cover>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 space-y-4 mt-16 ">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }

            </div>
            <div className="text-center mb-5">
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline mt-5 border-0 border-b-4 btn-success">ORDER YOUR FAVOURITE FOOD</button>
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;