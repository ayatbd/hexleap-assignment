// Images for sport data 
import player_1 from "@/assets/player1.png"
import player_2 from "@/assets/player2.png"
import player_3 from "@/assets/player3.png"
import player_4 from "@/assets/dick-img.png"
import Image from "next/image";
import "./sports.css"

// Import for react icons
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Sports = () => {
    return (
        <div className="py-8">
            <div className="flex justify-between items-center">
                {/* {isDarkMode ? (
                    <IoMdSunny
                        className={`w-6 h-6 hover:cursor-pointer ${isDarkMode
                            ? "text-white"
                            : `${location.pathname === "/"
                                ? "text-white"
                                : "text-gray-900"
                            }`
                            }`}
                        onClick={toggleTheme}
                    ></IoMdSunny>
                ) : (
                    <FaMoon
                        className={`w-6 h-6 hover:cursor-pointer ${isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                        onClick={toggleTheme}
                    ></FaMoon>
                )} */}
                <span className="font-bold text-2xl border-b-[3px] border-[#738FFF]">Sports</span>
                <span>
                    <IoMdSunny />
                    <FaMoon />
                </span>
            </div>
            <div className="grid md:grid-cols-5 gap-4 mt-8 sm:grid-cols-3 grid-cols-1">
                {/* card 1 */}
                <div className="bg-white p-2">
                    <Image className="" width={500} height={500} src={player_1} alt="Player 1"></Image>
                    <div className="space-y-4 mt-3">
                        <h4 className="font-bold">Sacramento River Cats</h4>
                        <div className="card-body bg-[#F7F7F8] p-2 sm:flex justify-between items-center gap-5">
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