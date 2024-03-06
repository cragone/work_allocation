import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetDueAssigments = () => {
    const apiRoute = "localhost"
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`http://${apiRoute}:5000/api/frontpageassignments`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // Empty array means this effect runs once on mount

    return (
        <div>
            {data &&
            <table>
                <thead>
                    <tr>
                        <th>Assignment Title</th>
                        <th>Original Deadline</th>
                    </tr>
                </thead>
                <tbody>
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
    );
};

export default GetDueAssigments;