import React from 'react';

class WorkerForm extends React.Component{
    state ={
        newWorker:{
            name:"",
            mail:"",
            description:"",
            tagi:["Python"]
        },
    }
    onChange = (event) =>{
        let newName=this.state.newWorker.name;
        let newMail=this.state.newWorker.mail;
        let newDecription=this.state.newWorker.description;
        let newTagi=this.state.newWorker.tagi;
        if(event.target.name==="name") newName=event.target.value;
        else if (event.target.name==="mail")  newMail=event.target.value;
        else if(event.target.name==="description") newDecription=event.target.value;
        this.setState({
            newWorker:{
                name: newName,
                mail: newMail,
                description: newDecription,
                tagi: newTagi
            }
        });
    }
    onClick = () =>{
        this.props.adder(this.state.newWorker);
        this.setState({
            newWorker:{
                name:"",
                mail:"",
                description:"",
                tagi:["Python"]
            }
        });
    }
    errorInput1="Podaj inny adres Email";
    errorInput2="Potrzebny jest email";
    render() {
        return(
            <>
            {this.props.showWarning1 && <h1 style={{color:"red"}}>{this.errorInput1}</h1>}
            {this.props.showWarning2 && <h1 style={{color:"red"}}>{this.errorInput2}</h1>}
            <div class="container-sm">
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="newWorkerName">Imie i nazwisko studenta:</label>
                    <input type="text" 
                    className="form-control"
                    name="name" 
                    id="newWorkerName" 
                    placeholder="Imie i Nazwisko" 
                    value={this.state.newWorker.name}
                    onChange={this.onChange}>
                    </input>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="newWorkerMail">Mail studenta:</label>
                    <input type="mail" 
                    className="form-control"
                    name="mail" 
                    id="newWorkerMail" 
                    placeholder="Mail" 
                    value={this.state.newWorker.mail}
                    onChange={this.onChange}>
                    </input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="newWorkerDescription">Opis studenta:</label>
                    <input className="form-control"
                    name="description" 
                    id="newWorkerDescription" 
                    row="3" 
                    value={this.state.newWorker.description}
                    onChange={this.onChange}>
                    </input>
                </div>
                <button className="btn btn-primary"  onClick={this.onClick}>Utwórz nowego studenta</button>
                </div>
            </>
        );
    }
}
export default WorkerForm;