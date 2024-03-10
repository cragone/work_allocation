import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayUnassigned = () => {
    const apiRoute = "localhost"
    const [data, setData] = useState(null);
    

    useEffect(() => {
        axios.get(`http://${apiRoute}:5000/api/displayunassigned`)
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
            <div className="h-[200px] overflow-scroll">
            {data &&
            <table className="table">
                <thead className="sticky top-0 bg-base-100 shadow-sm">
                    <tr>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Molecule</th>
                        <th>Author</th>
                        <th>Original Deadline</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody >
                    {Object.keys(data.title).map((key, index) =>(
                        <tr key={index}>
                            <td>{data.type[key]}</td>
                            <td>{data.title[key]}</td>
                            <td>{data.molecule[key]}</td>
                            <td>{data.author[key]}</td>
                            <td>{data.original_deadline[key]}</td>
                            <td>{data.notes[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
            }
            </div>
        </div>
    );
};

export default DisplayUnassigned;