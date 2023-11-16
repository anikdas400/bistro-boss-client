import { Helmet } from "react-helmet-async";

import Banner from "../Banner/Banner";
import Call from "../CallSection/Call";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Info from "../Info/Info";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Recomand from "../Recomand/Recomand";
import TestiMonial from "../TestiMonial/TestiMonial";


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss Restaurant | Home</title>
            </Helmet>
            
            <Banner></Banner>
            <Category></Category>
            <Info></Info>
            <PopulerMenu></PopulerMenu>
            <Call></Call>
            <Recomand></Recomand>
            <Featured></Featured>
            <TestiMonial></TestiMonial>
            
        </div>
    );
};

export default Home;