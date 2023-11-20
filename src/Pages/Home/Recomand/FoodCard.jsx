

const FoodCard = ({item}) => {
    const {name,recipe,image,category,price}=item
    return (
        <div>

                <div className="card bg-slate-300 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                        <p className="absolute right-0 top-12 p-2 rounded-lg mr-10 text-white bg-slate-600">${price}</p>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions">
                            <button className="btn btn-outline bg-stone-300 border-0 border-orange-500 border-b-4">add to cart </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default FoodCard;