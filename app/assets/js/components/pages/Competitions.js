import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Competitions extends Component {

    render() {
        return (
            <div className="bg-bodybg min-h-screen p-4">

                <div className="bg-white pt-8 shadow-whitebox rounded-whitebox">
                    <h1 className="uppercase -m-8 mb-0 p-6 px-8 rounded-t-whitebox font-bold text-center border-b border-b-eee text-2xl">Competitions List</h1>
                        <div className="scroller scroll-team p-8 pt-16 inline-block w-full">
                            {/* Competitions list starts */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 min-h-full">
                                    <a className="bg-white pt-8 p-8 pb-4 drop-shadow-whitebox rounded-whitebox text-center">
                                        <span className="max-w-7rm flex items-center justify-center m-auto text-primary mb-8">
                                            <img src="https://crests.football-data.org/BL1.png" />
                                        </span>
                                        <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Bundesliga</h6>
                                    </a>

                                    <a className="bg-white pt-8 p-8 pb-4 drop-shadow-whitebox rounded-whitebox text-center">
                                        <span className="max-w-7rm flex items-center justify-center m-auto text-primary mb-8">
                                            <img src="https://crests.football-data.org/PD.png" />
                                        </span>
                                        <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Primera Division</h6>
                                    </a>

                                    <a className="bg-white pt-8 p-8 pb-4 drop-shadow-whitebox rounded-whitebox text-center">
                                        <span className="max-w-7rm flex items-center justify-center m-auto text-primary mb-8">
                                            <img src="https://crests.football-data.org/FL1.png" />
                                        </span>
                                        <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Ligue 1</h6>
                                    </a>

                                    <a className="bg-white pt-8 p-8 pb-4 drop-shadow-whitebox rounded-whitebox text-center">
                                        <span className="max-w-7rm flex items-center justify-center m-auto text-primary mb-8">
                                            <img src="https://crests.football-data.org/PL.png" />
                                        </span>
                                        <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Premier League</h6>
                                    </a>
                            </div>

                            {/* Competitions list ends */}
                        </div>

                </div>
            </div>
        )
    }
}
export default Competitions;
