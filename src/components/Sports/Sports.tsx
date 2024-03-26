import player_1 from "@/assets/player1.png"
import player_2 from "@/assets/player2.png"
import player_3 from "@/assets/player3.png"
import player_4 from "@/assets/dick-img.png"
import Image from "next/image";
import "./sports.css"
const Sports = () => {
    
    return (
        <div>
            <p className="font-bold text-2xl">Sports</p>
            <div className="grid grid-cols-5 gap-4">
                {/* card 1 */}
                <div className="bg-white p-2">
                    <Image height={385} src={player_1} alt="Player 1" />
                    <div className="space-y-4 mt-3">
                        <h4 className="font-bold">Sacramento River Cats</h4>
                        <div className="card-body bg-[#F7F7F8] p-2 flex justify-between items-center gap-5">
                            <div className="flex-1">
                                <p>Total Events</p>
                                <p className="font-semibold">48 Events</p>
                            </div>
                            <div className="flex-1">
                                <p>Sport</p>
                                <p className="font-semibold">Baseball</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="bg-white p-2">
                    <Image height={385} src={player_2} alt="Player 1" />
                    <div className="space-y-4 mt-3">
                        <h4 className="font-bold">Las Vegas Aviators</h4>
                        <div className="card-body bg-[#F7F7F8] p-2 flex justify-between items-center gap-5">
                            <div className="flex-1">
                                <p>Total Events</p>
                                <p className="font-semibold">28 Events</p>
                            </div>
                            <div className="flex-1">
                                <p>Sport</p>
                                <p className="font-semibold">Baseball</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="bg-white p-2">
                    <Image height={385} src={player_3} alt="Player 1" />
                    <div className="space-y-4 mt-3">
                        <h4 className="font-bold">New Jersey Devils</h4>
                        <div className="card-body bg-[#F7F7F8] p-2 flex justify-between items-center gap-5">
                            <div className="flex-1">
                                <p>Total Events</p>
                                <p className="font-semibold">15 Events</p>
                            </div>
                            <div className="flex-1">
                                <p>Sport</p>
                                <p className="font-semibold">Ice Hockey</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className="bg-white p-2">
                    <Image height={385} src={player_1} alt="Player 1" />
                    <div className="space-y-4 mt-3">
                        <h4 className="font-bold">Sacramento River Cats</h4>
                        <div className="card-body bg-[#F7F7F8] p-2 flex justify-between items-center gap-5">
                            <div className="flex-1">
                                <p>Total Events</p>
                                <p className="font-semibold">48 Events</p>
                            </div>
                            <div className="flex-1">
                                <p>Sport</p>
                                <p className="font-semibold">Baseball</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="bg-white p-2 h-full">
                    <Image height={220} src={player_4} alt="Player 1" />
                    <div className="space-y-4 mt-3">
                        <h4 className="font-bold">Advertisement title</h4>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10"><button className="bg-[#2C9CF0] rounded-sm py-2 px-6 text-white">See More</button></div>
        </div>
    );
};

export default Sports;