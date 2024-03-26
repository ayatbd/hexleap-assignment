import Image from "next/image";
import image1 from "@/assets/Ticket_Mockup 1.png"
import image2 from "@/assets/Ticket_Mockup 1.png"
import image3 from "@/assets/Ticket_Mockup 1.png"
const CollectionSpotlight = () => {
    const datas = [
        {
            "id": "1",
            "image": "https://i.ibb.co/NS58HVT/Ticket-Mockup-1.png",
            "field": "Las Vegas Aviators",
            "time": "Oct 16 | Sun | 4:30pm",
            "place": "Las Vegas Ballpark, Las Vegas, Nevada",
            "button_text": "Take Fight Collection"
        },
        {
            "id": "5",
            "image": "https://i.ibb.co/NS58HVT/Ticket-Mockup-1.png",
            "field": "Las Vegas Aviators",
            "time": "Oct 16 | Sun | 4:30pm",
            "place": "Las Vegas Ballpark, Las Vegas, Nevada",
            "button_text": "Take Fight Collection"
        },
        {
            "id": "3",
            "image": "https://i.ibb.co/NS58HVT/Ticket-Mockup-1.png",
            "field": "Las Vegas Aviators",
            "time": "Oct 16 | Sun | 4:30pm",
            "place": "Las Vegas Ballpark, Las Vegas, Nevada",
            "button_text": "Take Fight Collection"
        },
        {
            "id": "4",
            "image": "https://i.ibb.co/NS58HVT/Ticket-Mockup-1.png",
            "field": "Las Vegas Aviators",
            "time": "Oct 16 | Sun | 4:30pm",
            "place": "Las Vegas Ballpark, Las Vegas, Nevada",
            "button_text": "Take Fight Collection"
        },
        {
            "id": "5",
            "image": "https://i.ibb.co/NS58HVT/Ticket-Mockup-1.png",
            "field": "Las Vegas Aviators",
            "time": "Oct 16 | Sun | 4:30pm",
            "place": "Las Vegas Ballpark, Las Vegas, Nevada",
            "button_text": "Take Fight Collection"
        }
    ]

    return (
        <div className="w-[1085px] mx-auto">
            <div className="text-center">
                <h1>Collection Spotlight</h1>
                <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {datas.map((data) => (<div key={data.id}>
                    <Image className="h-[400px]" width={500} height={500} src={data.image} alt=""></Image>
                    <div>
                        <p>Las Vegas Aviators</p>
                        <p>Oct 16 | Sun | 4:30pm</p>
                        <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
                        <button>Take Fight Collection</button>
                    </div>
                </div>))}
            </div>
        </div>
    );
};

export default CollectionSpotlight;