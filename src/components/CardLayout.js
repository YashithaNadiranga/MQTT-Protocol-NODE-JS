import React, {Component} from 'react';
import { $ }  from 'react-jquery-plugin'


class CardLayout extends Component {

    constructor(props) {
        super(props);
        this.state ={
            l1 :"LED 1",
        }
    }

    btnL1=()=>{
        fetch('http://192.168.1.101:8080/on').then((resp)=>{
            resp.json().then((result)=>{
                if (result=="LEDON"){
                    this.setState({
                        l1 : result
                    })
                    console.log(this.state.l1)
                }

            })
        });
    }

    btnL2=()=>{
        fetch('http://192.168.1.101:8080/off').then((resp)=>{
            resp.json().then((result)=>{
                if (result=="LEDOFF"){
                    this.setState({
                        l1 : result
                    })
                    console.log(this.state.l1)
                }

            })
        });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body shadow-sm">
                        <h5 className="card-title">Automation </h5>

                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                <button id={'led1'} type="button" style={{width:'100%'}}
                                        className="btn btn-primary mt-2" onClick={this.btnL1}>
                                    LIGHT 2 - ON
                                </button>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                <button type="button" style={{width:'100%'}}
                                        className="btn btn-primary mt-2" onClick={this.btnL2}>
                                        LIGHT 2 - OFF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardLayout;
