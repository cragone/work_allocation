import React, { useState } from 'react';
import axios from 'axios';

const GetDataButton = () => {
    const apiRoute = "localhost"
    const [data, setData] = useState(null);

    const getData = () => {
        axios.get(`http://${apiRoute}:5000/api/downloads-excel`).then((response)=>{
            console.log(response.data);
            setData(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    return (
        <div>
        <button onClick={getData}>Click Me</button>
        {data&&<div>{JSON.stringify(data)}</div>}{/*render data if it exists*/}
        </div>
    );
};

export default GetDataButton;