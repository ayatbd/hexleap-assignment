"use client"
import Image from "next/image";

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// css file 
import './CollectionSpotlight.css';

interface CProps {
    isDarkMode: boolean;
}

const CollectionSpotlight: React.FC<CProps> = ({ isDarkMode }) => {

    // data for the collection spotlight
    const datas: {
        id: string;
        image: string;
        field: string;
        time: string;
        place: string;
        button_text: string;
    }[] = [
            {
                "id": "1",
                "image": "https://i.ibb.co/zrHfxK7/Ticket-Mockup-1.png",
                "field": "Las Vegas Aviators",
                "time": "Oct 16 | Sun | 4:30pm",
                "place": "Las Vegas Ballpark, Las Vegas, Nevada",
                "button_text": "Take Flight Collection"
            },
            {
                "id": "2",
                "image": "https://i.ibb.co/zrHfxK7/Ticket-Mockup-1.png",
                "field": "Las Vegas Aviators",
                "time": "Oct 16 | Sun | 4:30pm",
                "place": "Las Vegas Ballpark, Las Vegas, Nevada",
                "button_text": "Take Flight Collection"
            },
            {
                "id": "3",
                "image": "https://i.ibb.co/zrHfxK7/Ticket-Mockup-1.png",
                "field": "Las Vegas Aviators",
                "time": "Oct 16 | Sun | 4:30pm",
                "place": "Las Vegas Ballpark, Las Vegas, Nevada",
                "button_text": "Take Flight Collection"
            },
            {
                "id": "4",
                "image": "https://i.ibb.co/zrHfxK7/Ticket-Mockup-1.png",
                "field": "Las Vegas Aviators",
                "time": "Oct 16 | Sun | 4:30pm",
                "place": "Las Vegas Ballpark, Las Vegas, Nevada",
                "button_text": "Take Flight Collection"
            },
            {
                "id": "5",
                "image": "https://i.ibb.co/zrHfxK7/Ticket-Mockup-1.png",
                "field": "Las Vegas Aviators",
                "time": "Oct 16 | Sun | 4:30pm",
                "place": "Las Vegas Ballpark, Las Vegas, Nevada",
                "button_text": "Take Flight Collection"
            }
        ];

    return (
        <div className={`mx-auto ${isDarkMode ? 'bg-slate-900' : ''}`}>
            <div className="md:p-[77px] sm:p-[30px] p-2 space-y-14">
                <div className="text-center space-y-7">
                    <h1 className={`text-[40px] font-bold ${isDarkMode ? 'text-white' : ''}`}>Collection Spotlight</h1>
                    <p className={`${isDarkMode ? 'text-white' : ''}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                </div>

                <div className="lg:block hidden">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {datas.map((data, index) => index % 3 === 0 && (
                            <SwiperSlide key={data.id}>
                                <div className={`px-20 grid lg:grid-cols-3 grid-cols-1 gap-8 ${isDarkMode ? "bg-slate-900" : "bg-[#e7e7e7]"}`}>
                                    {datas.slice(index, index + 3).map((cardData) => (
                                        <div key={cardData.id}>
                                            <div className={` ${isDarkMode ? 'bg-slate-800' : 'bg-white border-scoop'}`}>
                                                <div className="divide-y-2 divide-dashed p-5">
                                                    <div className="card-image pb-4">
                                                        <Image className="h-[400px] w-full" width={500} height={500} src={cardData.image} alt="" />
                                                    </div>
                                                    <div className="space-y-3 text-center pt-4">
                                                        <p className={`font-bold ${isDarkMode ? 'text-white' : ''}`}>{cardData.field}</p>
                                                        <p className={`font-semibold ${isDarkMode ? 'text-white' : ''}`}>{cardData.time}</p>
                                                        <p className={`${isDarkMode ? 'text-white' : ''}`}>{cardData.place}</p>
                                                        <button className={`bg-black text-white w-full py-2 ${isDarkMode ? 'dark:bg-white dark:text-black' : ''}`}>{cardData.button_text}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="block lg:hidden">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {datas.map((data) => (
                            <SwiperSlide className={`${isDarkMode ? "bg-slate-900" : ""}`} key={data.id}>
                                <div className={` ${isDarkMode ? 'bg-slate-800' : 'bg-white border-scoop'}`}>
                                    <div className="divide-y-2 divide-dashed p-5">
                                        <div className="card-image pb-4">
                                            <Image className="h-[400px] w-full" width={500} height={500} src={data.image} alt="" />
                                        </div>
                                        <div className="space-y-3 text-center pt-4">
                                            <p className={`font-bold ${isDarkMode ? 'text-white' : ''}`}>{data.field}</p>
                                            <p className={`font-semibold ${isDarkMode ? 'text-white' : ''}`}>{data.time}</p>
                                            <p className={`${isDarkMode ? 'text-white' : ''}`}>{data.place}</p>
                                            <button className={`bg-black text-white w-full py-2 ${isDarkMode ? 'dark:bg-white dark:text-black' : ''}`}>{data.button_text}</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CollectionSpotlight;
