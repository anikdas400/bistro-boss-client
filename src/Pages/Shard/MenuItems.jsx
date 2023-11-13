

const MenuItems = ({ item }) => {
    const { recipe, image, name,price } = item
    return (
        <section className="flex space-x-4">
            <div>
                <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            </div>
            <div className="ml-5">
                <div className="flex">
                <h2 className=" flex-1 text-xl font-semibold">{name} ------------------</h2>  <span className="text-yellow-500">${price}</span>
                </div>
                <p className="text-base">{recipe}</p>
            </div>
        </section>
    );
};

export default MenuItems;