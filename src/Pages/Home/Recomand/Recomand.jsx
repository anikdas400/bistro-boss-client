import { useEffect, useState } from "react";
import SectionTitle from "../../Shard/SectionTitle/SectionTitle";
import Chef from "./Chef";


const Recomand = () => {
    const [recomand,setRecomand]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const items = data.filter(item=>item.category === 'salad')
            setRecomand(items)
        })
    },[])
    return (
        <div>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {
                recomand.map(item=><Chef
                     key={item._id}
                     item={item}
                ></Chef>)
            }
            </div>

        </div>
    );
};

export default Recomand;