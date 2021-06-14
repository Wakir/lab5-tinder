import React, {useState} from 'react';
import {database} from '../firebase';

const WorkerForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const onClick = () =>{
        const workerBase = database.ref('WorkerBase');
        const worker = {
            name,
            email,
            description
        }
        workerBase.push(worker)
        setName("")
        setEmail("")
        setDescription("")
    }
    return(
        <>
        <div className="container-sm">
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="newWorkerName">Imie i nazwisko studenta:</label>
                <input type="text" 
                className="form-control"
                name="name" 
                id="newWorkerName" 
                placeholder="Imie i Nazwisko" 
                value={name}
                onChange={e => setName(e.target.value)}>
                </input>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="newWorkerMail">Mail studenta:</label>
                <input type="mail" 
                className="form-control"
                name="mail" 
                id="newWorkerMail" 
                placeholder="Mail" 
                value={email}
                onChange={e => setEmail(e.target.value)}>
                </input>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="newWorkerDescription">Opis studenta:</label>
                <input className="form-control"
                name="description" 
                id="newWorkerDescription" 
                row="3" 
                value={description}
                onChange={e => setDescription(e.target.value)}>
                </input>
            </div>
            <button className="btn btn-primary"  onClick={onClick}>Utwórz nowego studenta</button>
         </div>
        </>
    );
}

export default WorkerForm;