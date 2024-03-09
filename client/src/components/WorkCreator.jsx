import React, { useState } from "react";
import axios from "axios";

const WorkCreator = () => {
    const apiRoute = "localhost"

    const [type, setType] = useState("")
    const [title, setTitle] = useState("")
    const [molecule, setMolecule] = useState("")
    const [author, setAuthor] = useState("")
    const [original_deadline, setOriginal_deadline] = useState("")
    const [notes, setNotes] = useState("")

    const handleSubmit = () => {
        const payload ={
            type:type,
            title:title,
            molecule:molecule,
            author:author,
            original_deadline:original_deadline,
            notes:notes,
        }
        axios.post(`http://${apiRoute}:5000/api/creatework`, payload)
        .then((response) => {
            console.log(response.data); 
        })
        .catch((error) => {
            console.log(error)
        });
    };
    return (
        <div className="grid grid-cols-3 gap-4">
    <input className='input input-bordered input-secondary input-sm mr-2' type='text' placeholder="Type" value={type} onChange={(e)=>{setType(e.target.value.toUpperCase())}} />

    <input className='input input-bordered input-secondary input-sm mr-2' type='text' placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />

    <input className='input input-bordered input-secondary input-sm mr-2' type='text' placeholder="Molecule" value={molecule} onChange={(e)=>{setMolecule(e.target.value)}} />

    <input className='input input-bordered input-secondary input-sm mr-2' type='text' placeholder="Author" value={author} onChange={(e)=>{setAuthor(e.target.value)}} />

    <input className='input input-bordered input-secondary input-sm mr-2' type='text' placeholder="Original Deadline" value={original_deadline} onChange={(e)=>{setOriginal_deadline(e.target.value)}} />

    <input className='input input-bordered input-secondary input-sm mr-2' type='text' placeholder="Notes" value={notes} onChange={(e)=>{setNotes(e.target.value)}} />

            <button className="btn btn-glass btn-sm" disabled={type == "" || title == "" || molecule == "" || author == "" || original_deadline == "" || notes == "" } onClick={handleSubmit} >submit</button>
        </div>
    )
};

export default WorkCreator;