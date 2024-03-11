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
                                <th>Assign a User</th>
                            </tr>
                        </thead>
                        <tbody >

                            {data.map((value,index)=>(
                                <WorkRow
                                data={value}
                                />
                            ))}

                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

const WorkRow = (props) => {
    const { data } = props
    const apiRoute = "localhost"

    const [assigned_user, setAssigned_user] = useState("")

    const handleSubmit = () => {
        const payload = {
            title: data.title,
            assigned_user: assigned_user
        }
        axios.post(`http://${apiRoute}:5000/api/updateassignee`, payload)
            .then((response) => {
                console.log(response.data);
                setAssigned_user("")
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <tr>
            <td value={data.title}>{data.type}</td>
            <td>{data.title}</td>
            <td>{data.molecule}</td>
            <td>{data.author}</td>
            <td>{data.original_deadline}</td>
            <td>{data.notes}</td>
            <td><input className='input input-bordered input-secondary input-sm mr-2' value={assigned_user} onChange={(event)=>{setAssigned_user(event.target.value)}} placeholder="Assign a user"  /></td>
            <td><button className="btn btn-glass btn-sm" onClick={handleSubmit}  >submit</button></td>
        </tr>
    )
}

export default DisplayUnassigned;