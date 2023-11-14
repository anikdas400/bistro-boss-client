import Footer from "../../Shard/Footer/Footer";
import Navbar from "../../Shard/Navbar/Navbar";
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
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <Info></Info>
            <PopulerMenu></PopulerMenu>
            <Call></Call>
            <Recomand></Recomand>
            <Featured></Featured>
            <TestiMonial></TestiMonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;