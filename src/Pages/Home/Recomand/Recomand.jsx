import { useEffect, useState } from "react";
import SectionTitle from "../../Shard/SectionTitle/SectionTitle";

import useMenu from "../../../Hooks/useMenu";
import FoodCard from "./FoodCard";


const Recomand = () => {
    const [menu] = useMenu()
    const recomanded = menu.filter(item=>item.category === 'salad')
    // const [recomand,setRecomand]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const items = data.filter(item=>item.category === 'salad')
    //         setRecomand(items)
    //     })
    // },[])
    return (
        <div>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {
                recomanded.map(item=><FoodCard
                     key={item._id}
                     item={item}
                ></FoodCard>)
            }
            </div>

        </div>
    );
};

export default Recomand;