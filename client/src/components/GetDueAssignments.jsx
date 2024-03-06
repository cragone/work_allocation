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
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default GetDueAssigments;