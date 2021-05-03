import React from 'react'

function hashCode(str){
    let hash=0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++){
        let char = str.charCodeAt(i);
        hash = ((hash << 5)- hash) + char;
        hash = hash & hash;
    }
    return hash;
}

const WorkerItem = (props) =>{
    if(props.visible){
        const tagListRender=props.tagi.join(", ")
        return(
        <li className="list-group-item">
        <div><p>{props.text.name} ({props.text.mail})</p></div>
        <div>{props.text.description}</div>
        <div>Tagi: {tagListRender}</div>
        </li>)
    }
    return null
}

const WorkerSearch = (props) =>{
    const {valSearchName, valSearchMail, funcOnChange} = props
    return(<>
    <div class="container-sm">
    <input type="text" 
                className="form-control"
                name="searchName" 
                id="searchName" 
                placeholder="Znajdź po imieniu..." 
                value={valSearchName}
                onChange={funcOnChange}
               >
    </input>
    <input type="text" 
        className="form-control"
        name="searchMail" 
        id="searchMail" 
        placeholder="Znajdź po mailu..." 
        value={valSearchMail}
        onChange={funcOnChange}
       >
    </input>
    </div>
    </>)
}

class WorkerList extends React.Component{
    state ={
        fullTagList:["Python","Java","HTML","C#"],
        newWorker:{
            name:"",
            mail:"",
            description:"",
            tagi:["Python"]
        },
        searchName:"",
        searchMail:"",
    }
    errorInput1="Podaj inny adres Email";
    errorInput2="Potrzebny jest email";
    handleInputChange= (event) =>{
        if(event.target.name=="searchName" || event.target.name=="searchMail"){
            let iSearchName=this.state.searchName;
            let iSearchMail=this.state.searchMail;
            if(event.target.name==="searchName") iSearchName=event.target.value;
            else iSearchMail=event.target.value;
            this.setState({
                searchName: iSearchName,
                searchMail: iSearchMail,
            });
            let copyList=this.state.workerList.slice();
            for(let i =0; i< this.state.workerList.length;i++){
                if((this.state.searchName==="" || this.state.workerList[i].name.includes(iSearchName)) &&
                (this.state.searchMail==="" || this.state.workerList[i].mail.includes(iSearchMail))){
                    copyList[i].visible=true;
                }
                else copyList[i].visible=false;
            }
            this.setState({
                workerList: copyList
            })
        }
        else{
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
    }
    render() {
        const listRender=this.props.workerList.map((it) => (
            <WorkerItem key={hashCode(it.mail)} text={it} tagi={it.tagi} visible={it.visible}/>))
        return (
            <>
            <WorkerSearch 
            valSearchName={this.state.searchName}
            valMailName={this.state.searchMail}
            funcOnChange={this.handleInputChange}
            />
            <br></br>
            <div class="container-sm"><ul>{listRender}</ul></div>
            </>
        );
    }
}

export default WorkerList;