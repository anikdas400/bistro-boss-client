import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shard/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
        <SectionTitle
        subHeading={'From 11:00am to 10:00pm'}
        heading={'ORDER ONLINE'}
        ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 mt-5"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='uppercase text-3xl text-center -mt-16 font-medium text-white shadow-transparent'>Salads</h2>
                    </SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /><h2 className='uppercase text-3xl text-center -mt-16 font-medium text-white shadow-transparent'>Soups</h2></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /><h2 className='uppercase text-3xl text-center -mt-16 font-medium text-white shadow-transparent'>pizzas</h2></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /><h2 className='uppercase text-3xl text-center -mt-16 font-medium text-white shadow-transparent'>desserts</h2></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /><h2 className='uppercase text-3xl text-center -mt-16 font-medium text-white shadow-transparent'>Salads</h2></SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Category;