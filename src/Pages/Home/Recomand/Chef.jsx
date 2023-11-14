

const Chef = ({item}) => {
    const {name,recipe,image,category,price}=item
    return (
        <div>

                <div className="card bg-slate-300 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions">
                            <button className="btn btn-success btn-outline bg-stone-300 border-0 border-b-4">add to cart </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Chef;