


const SectionTitle = ({heading,subHeading}) => {
    
    return (
        <div className="text-center mt-5 mb-10 md:w-4/12 mx-auto">
            <p className="text-yellow-500 italic mb-2 text-lg">---{subHeading}---</p>
            <h2 className="text-black font-semibold text-3xl border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;