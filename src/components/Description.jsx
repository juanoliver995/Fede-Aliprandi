import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';


const Description = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='contain-slide'>
                    <div>
                        <img src='./images/slider-1.jpg' />
                    </div>
                    <div>
                        <h2>Experienced Producer</h2>
                        <p>With over 10 years experience, I can produce whatever you want and every genre you request.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='contain-slide'>
                    <div>
                        <img src='./images/slider-2.jpg' />
                    </div>
                    <div>
                        <h2>International Support</h2>
                        <p>My tracks are supported by: Jamie Jones, Loco Dice, Ricardo Villalobos, Carl Cox, Marco Carola, Fisher and many more!</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='contain-slide'>
                    <div>
                        <img src='./images/slider-3.jpg' />
                    </div>
                    <div>
                        <h2>Heard Worldwide</h2>
                        <p>Also, they have been featured in many big channels like BLANC, SPINNIN, HOUSESIX, SUBSOUL AND MORE!</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='contain-slide'>
                    <div>
                        <img src='./images/slider-4.jpg' />
                    </div>
                    <div>
                        <h2>Choose the genre you want</h2>
                        <p>You will get: Top Tier electronic music track, Mix and Master (FULL HQ), Fast delivery, Full comercial use</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Description