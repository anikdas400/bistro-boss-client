import SectionTitle from "../../Shard/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaOm } from "react-icons/fa6";


const TestiMonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            >
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center text-center space-y-3 m-24">
                            <h2 className="text-4xl mb-3"><FaOm></FaOm></h2>
                            <Rating
                                className="text-center"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <h2 className="text-base">{review.details}</h2>
                            <h3 className="text-4xl text-orange-600 font-semibold">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>





        </div>
    );
};

export default TestiMonial;