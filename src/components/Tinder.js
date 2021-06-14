import React from 'react';
import {Switch,Route} from 'react-router-dom';
import { useState } from 'react';

import Login from './Login';
import WorkerForm from './WorkerForm';
import WorkerList from './WorkerList';
import Register from './Register';

class Tinder extends React.Component{

    state ={
        workerList:[ {name:"Maciej Błoński",
        mail:"maciej.blonski@cosiek.pl",
        description:"Programista z 5 letnim doświadczeniem",
        tagi:["Pyhton"],
        visible: true
        },
        {name:"Kamil Szewczyk",
        mail:"kamil.szewczyk@cosiek.pl",
        description:"Programista z 10 letnim doświadczeniem",
        tagi:["Java", "HTML"],
        visible: true
        },
        {name:"Stanisław Kozłowski",
        mail:"stanislaw.kozlowski@cosiek.pl",
        description:"Programista z 8 letnim doświadczeniem",
        tagi:["Java", "HTML","C#"],
        visible: true
        },
        {name:"Kasia Kowalska",
        mail:"kasia.kowalska@cosiek.pl",
        description:"Programistka z 10 letnim doświadczeniem",
        tagi:["HTML", "Java","C#"],
        visible: true
        },
        {name:"Wojciech Mak",
        mail:"wojciech.mak@cosiek.pl",
        description:"Programista z 10 letnim doświadczeniem",
        tagi:["HTML", "Java","C#"],
        visible: true
        },
        ],
        showWarning1: false,
        showWarning2: false
    }

    adder = (newWorker) =>{
        for(let i =0; i< this.state.workerList.length;i++){
            if (this.state.workerList[i].mail.localeCompare(newWorker.mail)===0){
                this.setState({
                    showWarning1: true,
                    showWarning2: false
                })
                return
            }
        }
        if (newWorker.mail===""){
            this.setState({
                showWarning1: false,
                showWarning2: true
            })
        }
        else {
            this.setState({
                workerList: this.state.workerList.concat(({
                    name: newWorker.name,
                    mail: newWorker.mail,
                    description: newWorker.description,
                    tagi: newWorker.tagi,
                    visible: true
                })),
                newWorker:{
                    name:"",
                    mail:"",
                    description:"",
                },
                showWarning1: false,
                showWarning2: false
            })
        }
    }
    render() {
        return (
            <Switch>
            <Route path="/" exact></Route>
              <Route path="/oferty" exact>
                    <WorkerList workerList={this.state.workerList}/>
              </Route>
              <Route path="/login" exact>
                    <Login></Login>
              </Route>
              <Route path="/register" exact>
                    <Register></Register>
              </Route>
              <Route path="/new">
                  <WorkerForm/>
              </Route>
              <Route>
                <section>
                  <h2>Error 404: Page not found</h2>
                </section>
              </Route>
          </Switch>
        );
    }
}
export default Tinder;