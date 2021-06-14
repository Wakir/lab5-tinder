import React, {useState, useEffect} from 'react'
import {database} from '../firebase';

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
    //const tagListRender=props.tagi.join(", ")
    return(
    <li className="list-group-item">
    <div><p>{props.text.name} ({props.text.email})</p></div>
    <div>{props.text.description}</div>
    <div>Tagi: Python</div>
    </li>)
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

const WorkerList = () => {
    const [workerList,setWorkerList] = useState("");

   useEffect (() => {
       const workerBase=database.ref("WorkerBase")
       workerBase.on('value', (snapshot) => {
           const workers = snapshot.val();
           const workerList = [];
        for (let id in workers){
            workerList.push(workers[id])
        }
        console.log(workerList)
        setWorkerList(workerList)
       })
   }, []);

   /*handleInputChange= (event) =>{
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
    }*/

   // const listRender= workerList.map((it) => (
    //        <WorkerItem key={hashCode(it.mail)} text={it} visible={true}/>))
    return (
            <div class="container-sm">{workerList ? workerList.map((it) => (
                <WorkerItem key={it.index} text={it}/>)) : ''}</div>
        );
}

export default WorkerList;