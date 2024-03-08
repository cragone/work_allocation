import React, { useState, useEffect } from "react";
import axios from "axios";

const SubmitAssignments = () => {
    const apiRoute = "localhost"

    const [hours, setHours] = useState("")
    const [title, setTitle] = useState("")

    const handleSubmit = () => {
        const payload ={
            title:title,
            hours:hours
        }
        axios.post(`http://${apiRoute}:5000/api/updatehours`, payload)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="flex flex-row">

            <input className='input input-bordered input-secondary input-sm mr-2' type='text' placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value.toUpperCase())}} />

            <input className='input input-bordered input-secondary input-sm mr-2' type='text' placeholder="hours" value={hours} onChange={(e)=>{setHours(e.target.value)}} />

            <button className="btn btn-glass btn-sm" disabled={hours == "" || title == ""} onClick={handleSubmit} >submit</button>
        </div>
    )
};


export default SubmitAssignments;
