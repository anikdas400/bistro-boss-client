import SectionTitle from "../../Shard/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"


const Featured = () => {
    return (

        <div className="feat py-2 bg-fixed b  ">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>

            <section className="md:flex gap-2 justify-center items-center mb-10 p-20 bg-black bg-opacity-60">
                <div className="w-1/2">
                    <img className=" px-20" src={featured} alt="" />
                </div>
                <div className="w-1/2 px-10 text-white ">
                    <h2 className="text-lg">March 20, 2023</h2>
                    <h3 className="text-lg">WHERE CAN I GET SOME?</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline mt-5 border-0 border-b-4 btn-success">Read More</button>
                </div>
            </section>

        </div>

    );
};

export default Featured;