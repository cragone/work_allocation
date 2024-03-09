import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetDueAssigments = (props) => {
    const apiRoute = "localhost"
    const [data, setData] = useState(null);
    
    const {reloader} = props

    useEffect(() => {
        axios.get(`http://${apiRoute}:5000/api/frontpageassignments`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [reloader]); // Empty array means this effect runs once on mount

    return (
        <div>
            <div className="h-[200px] overflow-scroll">
            {data &&
            <table className="table">
                <thead className="sticky top-0 bg-base-100 shadow-sm">
                    <tr>
                        <th>Assignment Title</th>
                        <th>Original Deadline</th>
                    </tr>
                </thead>
                <tbody >
                    {Object.keys(data.title).map((key, index) =>(
                        <tr key={index}>
                            <td>{data.title[key]}</td>
                            <td>{data.original_deadline[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
            }
            </div>
        </div>
    );
};

export default GetDueAssigments;