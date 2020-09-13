import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stats = () => {

    const [statsData, setStatsData] = useState([]);

    const fetchStats = async () => {

        await axios.get('http://localhost:3100/shortener').then((res) => {
            setStatsData(res.data.data);
        }
        );
    }


    useEffect(() => {
        fetchStats();
    }, []);

    return (
        <div className="container mg-t60 mb-50-mbl">

            <div className="row">
                <div className="col-xs-12 mg-b10">
                    <h1>Analytics</h1>
                </div>
                <div className="col-xs-12">
                    {statsData.map((data) => (
                        <div className="row">
                        <p>{data.original_url}</p>
                        <p>{`http://localhost:3000/` + data.short_url}</p>
                        <br />
                        <p>Total Clicks: 232</p>
                        <p>Top Countries: USA, India</p>
                        <hr />
                    </div>
                    ))}


                </div>
            </div>
        </div>

    );
}

export default Stats;