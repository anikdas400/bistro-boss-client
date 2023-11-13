import Footer from "../../Shard/Footer/Footer";
import Navbar from "../../Shard/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Info from "../Info/Info";
import PopulerMenu from "../PopulerMenu/PopulerMenu";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <Info></Info>
            <PopulerMenu></PopulerMenu>
            <Footer></Footer>
        </div>
    );
};

export default Home;