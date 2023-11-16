import { Helmet } from "react-helmet-async";
import Cover from "../../Shard/Cover/Cover";
import menuimg from '../../../assets/menu/banner3.jpg'
import dessertimg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../../assets/menu/pizza-bg.jpg'
import saladimg from '../../../assets/menu/salad-bg.jpg'
import soupimg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../Shard/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item=>item.category === 'dessert')
    const salad = menu.filter(item=>item.category === 'salad')
    const soup = menu.filter(item=>item.category === 'soup')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const offered = menu.filter(item=>item.category === 'offered')
    return (
        <div>
            <Helmet>
            <title>Bistro Boss Restaurant | Menu</title>
            </Helmet>
            <Cover img={menuimg} title={'OUR MENU'} ></Cover>

             {/* offered menu item */}
             <SectionTitle
             subHeading={"Do n't miss"}
             heading={"TODAY'S OFFER"}
             ></SectionTitle>
             <MenuCategory items={offered}></MenuCategory>
             

             {/* dessert menu item */}
             <MenuCategory items ={dessert} title='dessert' img={dessertimg}></MenuCategory>

             {/* pizza menu item */}
             <MenuCategory items ={pizza} title='pizza' img={pizzaimg}></MenuCategory>

             {/* salad menu items */}
             <MenuCategory items ={salad} title='salad' img={saladimg}></MenuCategory>

             {/* soup menu items */}
             <MenuCategory items ={soup} title='soup' img={soupimg}></MenuCategory>

            
            
            
        </div>
    );
};

export default Menu;