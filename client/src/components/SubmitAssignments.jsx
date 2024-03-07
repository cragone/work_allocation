import React, {useState, useEffect} from "react";
import axios from "axios";

const SubmitAssignments = () => {
    const apiRoute = "localhost"
    const [data, setData] = useState({
        title: "",
        hours: ""
    });

    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://${apiRoute}:5000/api/updatehours`, data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Assignment Title:
                <input name='title' type='text' value={data.title} onChange={handleChange}/>
            </label>
            <label>
                Hours Worked:
                <input name='hours' tyoe='text' value={data.hours} onChange={handleChange}/>
            </label>
            <input type='submit' value="Submit"/>
        </form>
    )
};


export default SubmitAssignments;
