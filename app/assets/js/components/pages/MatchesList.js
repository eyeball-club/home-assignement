import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getmatchData, getteamData, getteamInfo } from '../Datalayer/datalayerUtilities';

// images decleration
var teamssvg = require("../../../img/teams.svg")
var leftarrowsvg = require("../../../img/left-arrow.svg")
var loadersvg = require("../../../img/curve-loading.gif")
var noimgsvg = require("../../../img/no-img.svg")

class MatchesList extends Component {
    constructor(props) {
        super(props);
        this.state = { id: props?.match?.params?.id, matches: [], teams: [], loading: true, popup: false, tab: 1, teaminfo: [] }
    }

    componentDidMount() {
        this.getListDetail();
    }

    async getListDetail() {
        const matchData = await getmatchData({ 'id': this.state.id });
        const teamsData = await getteamData({ 'id': this.state.id });
        this.setState({ teams: teamsData?.teams, matches: matchData?.matches, loading: false });
    }

    async getTeamInfo(id) {
        const teaminfo = await getteamInfo({ 'id': id });
        this.setState({ teaminfo: teaminfo, popup: true, tab: 1 });
    }

    hideTeamInfoPopup(params) {
        this.setState({ popup: params })
    }

    tabshow(params) {
        this.setState({ tab: params })
    }

    getYearFormDate(date) {
        var newDate = new Date(date);
        var year = newDate.getFullYear();
        return year;
    }

    render() {
        const loading = this.state.loading;
        const teaminfo = this.state.teaminfo;
        return (
            <div className="bg-bodybg min-h-screen p-4">

                <div className="bg-white p-8 shadow-whitebox rounded-whitebox">
                    <h1 className="uppercase -m-8 mb-8 p-6 px-8 rounded-t-whitebox font-bold text-center border-b border-b-eee text-2xl relative">Matches List
                        <Link to={'/'} >
                            <button className="bg-secondary absolute right-6 top-6 text-fs12 font-bold text-white p-2 px-4 rounded-radius5 inline-block leading-normal flex items-center"> <img src={leftarrowsvg} className="mr-2" />Back</button>
                        </Link>
                    </h1>

                    {loading ? (
                        <div className="row text-center scroller scroll-team flex items-center justify-center">
                            <img src={loadersvg} className="w-60 m-auto" />
                        </div>

                    ) : (
                        <div className="flex -m-8">
                            {/* Team list starts */}
                            <div className="border-r border-r-eee w-6/12 sm:w-4/12 xl:w-2/12">
                                <h3 className="border-b border-eee p-4 font-semibold text-center">Teams List</h3>
                                <ul className="text-menu text-sm py-4 scroller scroll-team">
                                    {this.state?.teams?.length > 0 ? this.state?.teams?.map(team =>
                                        <li key={team.id}>
                                            <p
                                                className="p-2.5 px-2.5 mx-2 rounded-flagradius font-semibold block hover:bg-primary hover:text-white capitalize  flex items-center group text-sm cursor-pointer"
                                                onClick={() => this.getTeamInfo(team.id)}
                                            >
                                                <span className="w-8 h-8 flex items-center justify-center rounded-radius5 mr-4 p-2 bg-iconbg group-hover:bg-white">
                                                    <img src={teamssvg} />
                                                </span>
                                                {team.name}</p>
                                        </li>
                                    ) :
                                        <div className="col-span-5 text-red-600 text-center  font-bold flex items-center justify-center m-20 mx-5">No teams found</div>
                                    }
                                </ul>
                            </div>
                            {/* Team list ends */}

                            {/* Match list starts */}
                            <div className="w-6/12 sm:w-8/12 xl:w-10/12">

                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-8 scroller scroll-rightcomp">

                                    {this.state?.matches?.length > 0 ? this.state?.matches?.map(match =>
                                        <div className="bg-white pt-8 p-8 pb-4 drop-shadow-whitebox rounded-whitebox text-center" key={match.id}>
                                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                                <div className="sm:mr-8 cursor-pointer" onClick={() => this.getTeamInfo(match?.homeTeam?.id)}>
                                                    <span className="w-24 h-24 overflow-hidden rounded-flagradius inline-flex m-auto text-primary mb-8 items-center justify-center">
                                                        {
                                                            match?.homeTeam?.image ? (
                                                                <img src={match?.homeTeam?.image} className="max-h-full inline-block" />
                                                            ) : (
                                                                <div className='w-20 h-20 bg-slate-100 m-auto flex items-center justify-center rounded-radius5'>
                                                                    <img src={noimgsvg} className="max-h-full inline-block opacity-50" />
                                                                </div>
                                                            )
                                                        }
                                                    </span>
                                                    <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">{match?.homeTeam?.name}</h6>
                                                </div>
                                                <small className="sm:absolute left-0 right-0 top-0 bottom-10 w-10 h-10 rounded-full flex items-center justify-center font-bold bg-secondary text-white my-8 sm:my-auto mx-auto">VS</small>
                                                <div className="sm:ml-8 cursor-pointer" onClick={() => this.getTeamInfo(match?.awayTeam?.id)}>
                                                    <span className="w-24 h-24 overflow-hidden rounded-flagradius inline-flex m-auto text-primary mb-8 items-center justify-center">
                                                        {
                                                            match?.awayTeam?.image ? (
                                                                <img src={match?.awayTeam?.image} className="max-h-full inline-block" />
                                                            ) : (
                                                                <div className='w-20 h-20 bg-slate-100 m-auto flex items-center justify-center rounded-radius5'>
                                                                    <img src={noimgsvg} className="max-h-full inline-block opacity-50" />
                                                                </div>
                                                            )
                                                        }
                                                    </span>
                                                    <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">{match?.awayTeam?.name}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ) :
                                        <div className="col-span-5 text-red-600 text-center  font-bold flex items-center justify-center m-20 mx-5">No matches found</div>
                                    }

                                </div>


                            </div>
                            {/* Match list starts */}

                            {/* Single team info popup starts */}
                            {
                                this.state.popup == true ? (
                                    <div>
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                            <div className="relative w-full mx-4 md:w-auto my-6 md:mx-auto md:max-w-3xl md:min-w-3xl">

                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative w-full outline-none focus:outline-none bg-white">

                                                    {/*header*/}
                                                    <div className="flex items-start justify-between bg-modalhead rounded-t-lg">

                                                        <ul className="flex items-center p-0 m-0">
                                                            <li className="nav-item">
                                                                <a className={"p-3 px-5 inline-block mr-4 text-fs12 font-semibold relative cursor-pointer border-b-2" + (this.state.tab == 1 ? " text-secondary border-b-secondary" : ' text-paracolor border-b-transparent')}
                                                                    onClick={() => this.tabshow(1)}
                                                                > Basic Info
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a className={"p-3 px-5 inline-block mr-4 text-fs12 font-semibold relative cursor-pointer border-b-2" + (this.state.tab == 2 ? " text-secondary border-b-secondary" : ' text-paracolor border-b-transparent')}
                                                                    onClick={() => this.tabshow(2)}
                                                                > Player Details
                                                                </a>
                                                            </li>
                                                        </ul>


                                                        <button className="h-7 w-7 rounded-full bg-white font-semibold outline-none focus:outline-none cursor-pointer absolute right-0 -top-10 flex items-center justify-center" onClick={() => this.hideTeamInfoPopup(false)} >
                                                            <b className="-mt-0.5">&times;</b>
                                                        </button>
                                                    </div>


                                                    {/*body*/}

                                                    {this.state.tab == 1 ?

                                                        <div className="sm:flex p-8">
                                                            <div className="w-full sm:w-3/12 mb-8 sm:mb-0 text-center">
                                                                {
                                                                    teaminfo?.crestUrl ? (
                                                                        <img src={teaminfo?.crestUrl} className="max-w-10rm sm:max-w-full m-auto mb-8 sm:mb-0" />
                                                                    ) : (
                                                                        <div className='w-20 h-20 bg-slate-100 m-auto flex items-center justify-center rounded-radius5'>
                                                                            <img src={noimgsvg} className="max-h-full inline-block opacity-50" />
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className="w-full sm:w-9/12 sm:ml-8">
                                                                <h3 className="flex items-center justify-between font-bold opacity-75 mb-4">{teaminfo?.name} <small>{teaminfo?.shortName} </small> </h3>
                                                                <div className="text-paracolor text-fs12">
                                                                    <p className="mb-4">Static Content: Club formateur de nombreux joueurs professionnels dont Riyad Mahrez, l'AAS Sarcelles est un top club amateur en Ile de France et une institution dans le Val d'Ose.</p>
                                                                    <p className="mb-4">{teaminfo?.address}{teaminfo?.address && teaminfo?.venue ? ',  ' : ''}{teaminfo?.venue}{teaminfo?.venue && teaminfo?.phone ? ',  ' : ''}{teaminfo?.phone} </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        :

                                                        <div className="p-8 m-auto w-full">

                                                            <div className="overflow-auto w-full max-h-72vh border rounded-radius5">

                                                                <table className="text-fs12 text-left table-fixed w-full">
                                                                    <thead>
                                                                        <tr>
                                                                            <th width="25%" className="p-3 sticky top-0 font-bold bg-white border-b">No.</th>
                                                                            <th width="25%" className="p-3 sticky top-0 font-bold bg-white border-b">YOB</th>
                                                                            <th width="50%" className="p-3 sticky top-0 font-bold bg-white border-b" >Players</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {teaminfo?.squad?.length > 0 ? teaminfo?.squad?.map((squad, key) =>
                                                                            <tr key={key}>
                                                                                <td className="p-3 border-b border-slate-100">{key + 1}</td>
                                                                                <td className="p-3 border-b border-slate-100">{this.getYearFormDate(squad?.dateOfBirth)}</td>
                                                                                <td className="p-3 border-b border-slate-100">{squad.name}</td>
                                                                            </tr>
                                                                        ) :
                                                                            <tr className=" text-red-600 text-center font-bold m-20 mx-5">
                                                                                <td colspan="3" className="p-5" >No players found</td>
                                                                            </tr>
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
                                    </div>
                                )
                                    : ''
                            }
                            {/* Single team info popup starts */}
                        </div>

                    )}

                </div>

            </div>
        )
    }
}

export default MatchesList;
