import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getCompetitionData } from '../Datalayer/datalayerUtilities';

// images decleration
var loadersvg = require("../../../img/curve-loading.gif")

class Competitions extends Component {
    constructor() {
        super();
        this.state = { competitions: [], loading: true };
    }

    componentDidMount() {
        this.getListDetail();
    }

    async getListDetail() {
        const competitiondata = await getCompetitionData();
        console.log(competitiondata)
        this.setState({ competitions: competitiondata?.competitions, loading: false });
    }

    render() {
        const loading = this.state.loading;
        return (
            <div className="bg-bodybg min-h-screen p-4">

                <div className="bg-white pt-8 shadow-whitebox rounded-whitebox">
                    <h1 className="uppercase -m-8 mb-0 p-6 px-8 rounded-t-whitebox font-bold text-center border-b border-b-eee text-2xl">Competitions List</h1>
                    {loading ? (
                        <div className="row text-center scroller scroll-team flex items-center justify-center">
                            <img src={loadersvg} className="w-60 m-auto" />
                        </div>
                    ) : (
                        <div className="scroller scroll-team p-8 pt-16 inline-block w-full">
                            {/* Competitions list starts */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 min-h-full">
                                {this.state?.competitions?.length > 0 ? this.state?.competitions?.map(competition =>
                                    <Link className="bg-white pt-8 p-8 pb-4 drop-shadow-whitebox rounded-whitebox text-center"
                                        to={{
                                            pathname: `/matchlist/${competition.id}`,
                                        }}
                                        key={competition.id}>
                                        <span className="max-w-7rm flex items-center justify-center m-auto text-primary mb-8">
                                            <img src={competition.emblemUrl} />
                                        </span>
                                        <h6 className="text-textcolor text-sm border-t font-bold border-slate-100 pt-4 -mx-8">{competition.name}</h6>
                                    </Link>
                                ) :
                                    <div className="col-span-5 text-red-600 text-center  font-bold min-h-full flex items-center justify-center m-20">No competitions found</div>
                                }
                            </div>
                            {/* Competitions list ends */}
                        </div>
                    )}

                </div>
            </div>
        )
    }
}
export default Competitions;
