import React, { Component } from 'react'
import Header from "./header";
import Navbar from "./navbar";
import PageImage from "./pageimage";
import Sidenavigation from "./sidenavigation";
import Footer from "./footer";
import Layout from './Layout';
import axios from 'axios';

import "../style/addDocument.css"

export default class AddDocument extends Component {
    constructor(props){
        super(props);
        this.state={
        Document_name:"",
        Document_Link:"",
        Country_name:"",
        Submit_date:""
        }
    }
 
    handleInputChange = (e) =>{
        const {name,value} = e.target;
 
        this.setState({
            ...this.state,
            [name]:value
        })
    }
 
    onSubmit = (e) =>{
 
     e.preventDefault();
 
     const {Document_name,Document_Link,Country_name,Submit_date} = this.state;
 
     const data = {
        Document_name:Document_name,
        Document_Link:Document_Link,
        Country_name:Country_name,
        Submit_date:Submit_date
     }
 
     console.log(data)
 
     axios.post('http://localhost:8000/TravelDocAdd/save',data).then((res) =>{
         if(res.data.success){
             this.setState(
                 {
                    Document_name:"",
                    Document_Link:"",
                    Country_name:"",
                    Submit_date:""
                 }
             )
         }
     })
 
    }


    render() {
        return (
            <div>
            <Layout />
            <Navbar />
            <PageImage />
            <Sidenavigation />
            
                <div className="Inquriyform">
                    <div className="col-md-8 mt-4 mx-auto">
                            <h1 className="h3 mb-3 font-weight-normal">Add Document</h1>
                            <form className="needs-Validation" noValidation>
                                <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{marginBottom:'15px'}}>Country name</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Country_name"
                                    placeholder="Enter country name"
                                    value={this.state.Country_name}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{marginBottom:'15px'}}>Document Path</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Document_Link"
                                    placeholder="Enter URL Link"
                                    value={this.state.Document_Link}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{marginBottom:'15px'}}>Document name</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Document_name"
                                    placeholder="Enter Document name"
                                    value={this.state.Document_name}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{marginBottom:'15px'}}>Submit Date</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Submit_date"
                                    placeholder="Enter the date"
                                    value={this.state.Submit_date}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                                    <i className="far fa-check-square"></i>
                                    &nbsp; Send
                                </button>
                                &nbsp;
                                <a href="/Infomation">
                                <button className="btn btn-success" style={{marginTop:'15px'}}>
                                    <i className="far fa-cross"></i>
                                    &nbsp; Canel
                                </button>
                                </a>


                            </form>

                        </div>
                
            </div>

            <div className="footerpartAd">
                        <Footer/>
                        </div>

        </div>
        )
    }
}
