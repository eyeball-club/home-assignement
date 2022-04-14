import React, { Component } from 'react';
import { Link } from "react-router-dom";

// images decleration
var teamssvg = require("../../../img/teams.svg")
var leftarrowsvg = require("../../../img/left-arrow.svg")

class MatchesList extends Component {

    render() {
        return (
            <div className="bg-bodybg min-h-screen p-4">

                <div className="bg-white p-8 shadow-whitebox rounded-whitebox">
                    <h1 className="uppercase -m-8 mb-8 p-6 px-8 rounded-t-whitebox font-bold text-center border-b border-b-eee text-2xl relative">Matches List
                        <Link to={'/'} >
                            <button className="bg-secondary absolute right-6 top-6 text-fs12 font-bold text-white p-2 px-4 rounded-radius5 inline-block leading-normal flex items-center"> <img src={leftarrowsvg} className="mr-2" />Back</button>
                        </Link>
                    </h1>

                    <div className="flex -m-8">
                        {/* Team list starts */}
                        <div className="border-r border-r-eee w-6/12 sm:w-4/12 xl:w-2/12">
                            <h3 className="border-b border-eee p-4 font-semibold text-center">Teams List</h3>
                            <ul className="text-menu text-sm py-4 scroller scroll-team">
                                <li>
                                    <p className="p-2.5 px-2.5 mx-2 rounded-flagradius font-semibold block hover:bg-primary hover:text-white capitalize  flex items-center group text-sm cursor-pointer" >
                                        <span className="w-8 h-8 flex items-center justify-center rounded-radius5 mr-4 p-2 bg-iconbg group-hover:bg-white">
                                            <img src={teamssvg} />
                                        </span>
                                        Team1</p>
                                </li>

                                <li>
                                    <p className="p-2.5 px-2.5 mx-2 rounded-flagradius font-semibold block hover:bg-primary hover:text-white capitalize  flex items-center group text-sm cursor-pointer" >
                                        <span className="w-8 h-8 flex items-center justify-center rounded-radius5 mr-4 p-2 bg-iconbg group-hover:bg-white">
                                            <img src={teamssvg} />
                                        </span>
                                        Team2</p>
                                </li>

                                <li>
                                    <p className="p-2.5 px-2.5 mx-2 rounded-flagradius font-semibold block hover:bg-primary hover:text-white capitalize  flex items-center group text-sm cursor-pointer" >
                                        <span className="w-8 h-8 flex items-center justify-center rounded-radius5 mr-4 p-2 bg-iconbg group-hover:bg-white">
                                            <img src={teamssvg} />
                                        </span>
                                        Team3</p>
                                </li>

                                <li>
                                    <p className="p-2.5 px-2.5 mx-2 rounded-flagradius font-semibold block hover:bg-primary hover:text-white capitalize  flex items-center group text-sm cursor-pointer" >
                                        <span className="w-8 h-8 flex items-center justify-center rounded-radius5 mr-4 p-2 bg-iconbg group-hover:bg-white">
                                            <img src={teamssvg} />
                                        </span>
                                        Team4</p>
                                </li>

                                <li>
                                    <p className="p-2.5 px-2.5 mx-2 rounded-flagradius font-semibold block hover:bg-primary hover:text-white capitalize  flex items-center group text-sm cursor-pointer" >
                                        <span className="w-8 h-8 flex items-center justify-center rounded-radius5 mr-4 p-2 bg-iconbg group-hover:bg-white">
                                            <img src={teamssvg} />
                                        </span>
                                        Team5</p>
                                </li>

                                <li>
                                    <p className="p-2.5 px-2.5 mx-2 rounded-flagradius font-semibold block hover:bg-primary hover:text-white capitalize  flex items-center group text-sm cursor-pointer" >
                                        <span className="w-8 h-8 flex items-center justify-center rounded-radius5 mr-4 p-2 bg-iconbg group-hover:bg-white">
                                            <img src={teamssvg} />
                                        </span>
                                        Team6</p>
                                </li>
                            </ul>
                        </div>
                        {/* Team list ends */}

                        {/* Match list starts */}
                        <div className="w-6/12 sm:w-8/12 xl:w-10/12">

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-8 scroller scroll-rightcomp">

                                <div className="bg-white pt-8 p-8 pb-4 drop-shadow-whitebox rounded-whitebox text-center" >
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <div className="sm:mr-8 cursor-pointer" >
                                            <span className="w-24 h-24 overflow-hidden rounded-flagradius inline-flex m-auto text-primary mb-8 items-center justify-center">
                                                <img src="https://crests.football-data.org/BL1.png" className="max-h-full inline-block" />

                                            </span>
                                            <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Match 1</h6>
                                        </div>
                                        <small className="sm:absolute left-0 right-0 top-0 bottom-10 w-10 h-10 rounded-full flex items-center justify-center font-bold bg-secondary text-white my-8 sm:my-auto mx-auto">VS</small>
                                        <div className="sm:ml-8 cursor-pointer" >
                                            <span className="w-24 h-24 overflow-hidden rounded-flagradius inline-flex m-auto text-primary mb-8 items-center justify-center">
                                                <img src="https://crests.football-data.org/PD.png" className="max-h-full inline-block" />
                                            </span>
                                            <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Match 2</h6>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="bg-white pt-8 p-8 pb-4 drop-shadow-whitebox rounded-whitebox text-center" >
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <div className="sm:mr-8 cursor-pointer" >
                                            <span className="w-24 h-24 overflow-hidden rounded-flagradius inline-flex m-auto text-primary mb-8 items-center justify-center">
                                                <img src="https://crests.football-data.org/BL1.png" className="max-h-full inline-block" />

                                            </span>
                                            <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Match 1</h6>
                                        </div>
                                        <small className="sm:absolute left-0 right-0 top-0 bottom-10 w-10 h-10 rounded-full flex items-center justify-center font-bold bg-secondary text-white my-8 sm:my-auto mx-auto">VS</small>
                                        <div className="sm:ml-8 cursor-pointer" >
                                            <span className="w-24 h-24 overflow-hidden rounded-flagradius inline-flex m-auto text-primary mb-8 items-center justify-center">
                                                <img src="https://crests.football-data.org/PD.png" className="max-h-full inline-block" />
                                            </span>
                                            <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Match 2</h6>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="bg-white pt-8 p-8 pb-4 drop-shadow-whitebox rounded-whitebox text-center" >
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <div className="sm:mr-8 cursor-pointer" >
                                            <span className="w-24 h-24 overflow-hidden rounded-flagradius inline-flex m-auto text-primary mb-8 items-center justify-center">
                                                <img src="https://crests.football-data.org/BL1.png" className="max-h-full inline-block" />

                                            </span>
                                            <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Match 1</h6>
                                        </div>
                                        <small className="sm:absolute left-0 right-0 top-0 bottom-10 w-10 h-10 rounded-full flex items-center justify-center font-bold bg-secondary text-white my-8 sm:my-auto mx-auto">VS</small>
                                        <div className="sm:ml-8 cursor-pointer" >
                                            <span className="w-24 h-24 overflow-hidden rounded-flagradius inline-flex m-auto text-primary mb-8 items-center justify-center">
                                                <img src="https://crests.football-data.org/PD.png" className="max-h-full inline-block" />
                                            </span>
                                            <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Match 2</h6>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="bg-white pt-8 p-8 pb-4 drop-shadow-whitebox rounded-whitebox text-center" >
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <div className="sm:mr-8 cursor-pointer" >
                                            <span className="w-24 h-24 overflow-hidden rounded-flagradius inline-flex m-auto text-primary mb-8 items-center justify-center">
                                                <img src="https://crests.football-data.org/BL1.png" className="max-h-full inline-block" />

                                            </span>
                                            <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Match 1</h6>
                                        </div>
                                        <small className="sm:absolute left-0 right-0 top-0 bottom-10 w-10 h-10 rounded-full flex items-center justify-center font-bold bg-secondary text-white my-8 sm:my-auto mx-auto">VS</small>
                                        <div className="sm:ml-8 cursor-pointer" >
                                            <span className="w-24 h-24 overflow-hidden rounded-flagradius inline-flex m-auto text-primary mb-8 items-center justify-center">
                                                <img src="https://crests.football-data.org/PD.png" className="max-h-full inline-block" />
                                            </span>
                                            <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">Match 2</h6>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>


                        </div>
                        {/* Match list starts */}
                    </div>

                </div>

            </div>
        )
    }
}

export default MatchesList;
