import React, {Component} from 'react';
import "./cardla.css";
import {Button, CircularProgress, LinearProgress} from "@material-ui/core";


class CardLayout extends Component {

    constructor(props) {
        super(props);
        this.state ={
            l1 :"0",
            color:"secondary",
            connect :"NOT CONNECTED"
        }
    }


    btn=()=>{
        if(this.state.l1==1){
            fetch('http://192.168.1.101:8080/off').then((resp)=>{

                resp.json().then((result)=>{
                    console.log(result)
                    if (result==0){
                        this.setState({
                            l1 : result,
                            color:"danger"
                        })
                    }

                })
            });
        }else if(this.state.l1==0){
            fetch('http://192.168.1.101:8080/on').then((resp)=>{
                resp.json().then((result)=>{
                    console.log(result)
                    if (result==1){
                        this.setState({
                            l1 : result,
                            color:"primary"
                        })
                    }

                })
            });
        }
    }


    componentDidMount() {
        fetch('http://192.168.1.101:8080').then((resp)=>{
            resp.json().then((result)=>{
                if(result==1){
                    this.setState({
                        color:"primary",
                        l1 : result
                    });

                }else if(result==0){
                    this.setState({
                        color:"danger",
                        l1 : result
                    });
                }
            })
        });
    }



    render() {
        return (
            <div>
                <div className="card">
                    <LinearProgress />
                    <div className="card-body shadow-sm">
                        <h5 className="card-title">Automation</h5>

                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <button id={'led1'} type="button" style={{width:'100%'}}
                                        className={"btn mt-2 btn-"+this.state.color} onClick={this.btn}>
                                    LIGHT 1 {this.state.l1==1? "ON":"OFF"}
                                </button>

                                {/*<Button style={{width:"100%"}} disableElevation variant="contained" color={this.state.color}>Name</Button>*/}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardLayout;
