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

interface SportsProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}
const Sports: React.FC<SportsProps> = ({ isDarkMode, toggleTheme }) => {
    return (
        <div className="py-8 sm:px-5 px-2">
            <div className="flex justify-between items-center">
                <span className={`font-bold text-2xl border-b-[3px] ${isDarkMode ? "text-white border-slate-700" : "border-[#738FFF]"}`}>Sports</span>
                <span>
                    {isDarkMode ? (
                        <IoMdSunny
                            className={`w-6 h-6 hover:cursor-pointer text-white`}
                            onClick={toggleTheme}
                        />
                    ) : (
                        <FaMoon
                            className={`w-6 h-6 hover:cursor-pointer text-gray-900`}
                            onClick={toggleTheme}
                        />
                    )}
                </span>
            </div>
            <div className="grid lg:grid-cols-5 md:gap-4 gap-10 mt-8 md:grid-cols-3 grid-cols-1">
                {/* card 1 */}
                <div className={`p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <Image width={500} height={500} src={player_1} alt="Player 1"></Image>
                    <div className="space-y-4 mt-3">
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'md:text-left text-center'}`}>Sacramento River Cats</h4>
                        <div className={`card-body ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#F7F7F8]'} p-2 flex justify-between items-center gap-5`}>
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
                <div className={`p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <Image width={500} height={385} src={player_2} alt="Player 1" />
                    <div className="space-y-4 mt-3">
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'md:text-left text-center'}`}>Las Vegas Aviators</h4>
                        <div className={`card-body ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#F7F7F8]'} p-2 flex justify-between items-center gap-5`}>
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
                <div className={`p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <Image width={500} height={385} src={player_3} alt="Player 1" />
                    <div className="space-y-4 mt-3">
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'md:text-left text-center'}`}>New Jersey Devils</h4>
                        <div className={`card-body ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#F7F7F8]'} p-2 flex justify-between items-center gap-5`}>
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
                <div className={`p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <Image width={500} height={385} src={player_1} alt="Player 1" />
                    <div className="space-y-4 mt-3">
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'md:text-left text-center'}`}>Sacramento River Cats</h4>
                        <div className={`card-body ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#F7F7F8]'} p-2 flex justify-between items-center gap-5`}>
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
                <div className={`p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <Image width={500} height={220} src={player_4} alt="Player 1" />
                    <div className="space-y-4 mt-3">
                        <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'md:text-left text-center'}`}>Advertisement title</h4>
                        <p className={`${isDarkMode ? 'text-white' : 'md:text-left text-center'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10"><button className={`bg-[#2C9CF0] rounded-sm py-2 px-6 text-white ${isDarkMode ? "bg-slate-800" : ""}`}>See More</button></div>
        </div>
    );
};

export default Sports;