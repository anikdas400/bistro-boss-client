
import SectionTitle from "../../Shard/SectionTitle/SectionTitle";
import MenuItems from "../../Shard/MenuItems";
import useMenu from "../../../Hooks/useMenu";


const PopulerMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=>item.category === 'popular')

    // const [menu,setMenu]=useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data=>{
    //         const populer = data.filter(item=>item.category === 'popular') 
    //         setMenu(populer)
    //     })
    // },[])
    return (
        <div className="mb-10">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 space-y-4">
            {
                popular.map(item=><MenuItems
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