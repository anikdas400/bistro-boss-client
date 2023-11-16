import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}


        >
            <div className="mt-32">
                <div className="bg-black text-white w-10/12 mx-auto  px-20 py-24 rounded-xl bg-opacity-50 text-center">
                    <h2 className="text-5xl font-semibold mb-5">{title}</h2>
                    <p className="text-base font-medium italic">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>

            {/* <div className="hero h-[500px]">
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content  ">
                    <div className="max-w-md hero-overlay bg-opacity-60 px-20 py-10 mx-auto">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>

            </div> */}


            <div style={{ height: '200px' }} />
        </Parallax>

    );
};

export default Cover;