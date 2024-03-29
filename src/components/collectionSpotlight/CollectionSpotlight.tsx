import Image from "next/image";
import image1 from "@/assets/Ticket_Mockup 1.png"
import image2 from "@/assets/Ticket_Mockup 1.png"
import image3 from "@/assets/Ticket_Mockup 1.png"
import "./style.css"
const CollectionSpotlight = () => {
    const datas = [
        {
            "id": "1",
            "image": "https://i.ibb.co/zrHfxK7/Ticket-Mockup-1.png",
            "field": "Las Vegas Aviators",
            "time": "Oct 16 | Sun | 4:30pm",
            "place": "Las Vegas Ballpark, Las Vegas, Nevada",
            "button_text": "Take Fight Collection"
        },
        {
            "id": "5",
            "image": "https://i.ibb.co/zrHfxK7/Ticket-Mockup-1.png",
            "field": "Las Vegas Aviators",
            "time": "Oct 16 | Sun | 4:30pm",
            "place": "Las Vegas Ballpark, Las Vegas, Nevada",
            "button_text": "Take Fight Collection"
        },
        {
            "id": "3",
            "image": "https://i.ibb.co/zrHfxK7/Ticket-Mockup-1.png",
            "field": "Las Vegas Aviators",
            "time": "Oct 16 | Sun | 4:30pm",
            "place": "Las Vegas Ballpark, Las Vegas, Nevada",
            "button_text": "Take Fight Collection"
        },
        {
            "id": "4",
            "image": "https://i.ibb.co/zrHfxK7/Ticket-Mockup-1.png",
            "field": "Las Vegas Aviators",
            "time": "Oct 16 | Sun | 4:30pm",
            "place": "Las Vegas Ballpark, Las Vegas, Nevada",
            "button_text": "Take Fight Collection"
        },
        {
            "id": "5",
            "image": "https://i.ibb.co/zrHfxK7/Ticket-Mockup-1.png",
            "field": "Las Vegas Aviators",
            "time": "Oct 16 | Sun | 4:30pm",
            "place": "Las Vegas Ballpark, Las Vegas, Nevada",
            "button_text": "Take Fight Collection"
        }
    ]

    return (
        <div className="mx-auto">
            <div className="p-[77px] space-y-14">
                <div className="text-center space-y-7">
                    <h1 className="text-[40px] font-bold">Collection Spotlight</h1>
                    <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {datas.map((data) => (<div key={data.id}>
                        <div className=" bg-white border-scoop">
                            <div className="divide-y-2 divide-dashed p-5">
                                <div className="card-image pb-4">
                                    <Image className="h-[400px] w-full" width={500} height={500} src={data.image} alt=""></Image>
                                </div>
                                <div className="space-y-3 text-center pt-4">
                                    <p className="font-bold">Las Vegas Aviators</p>
                                    <p className="font-semibold">Oct 16 | Sun | 4:30pm</p>
                                    <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
                                    <button className="bg-black text-white w-full py-2">Take Fight Collection</button>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>

        </div>
    );
};

export default CollectionSpotlight;