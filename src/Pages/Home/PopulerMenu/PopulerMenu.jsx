import { useEffect, useState } from "react";
import SectionTitle from "../../Shard/SectionTitle/SectionTitle";
import MenuItems from "../../Shard/MenuItems";


const PopulerMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data=>{
            const populerItem = data.filter(item=>item.category === 'popular') 
            setMenu(populerItem)
        })
    },[])
    return (
        <div className="mb-10">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 space-y-4">
            {
                menu.map(item=><MenuItems
                     key={item._id}
                     item={item}
                     ></MenuItems>)
            }
            
            </div>
            <div className="text-center">
            <button className="btn btn-outline border-0 border-b-4 w-2/12 ">View Full Menu</button>
            </div>
            
            
        </div>
    );
};

export default PopulerMenu;