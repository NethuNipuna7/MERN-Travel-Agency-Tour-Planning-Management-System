import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGenerator from './pdfgenerator';


export default function Createpdf(){

    const[airline,setAirline] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/accommodation_reservation/").then((res)=>{
            setAirline(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <div>
            <div>
                <div>
                    <button  onClick={()=>{ReportGenerator(airline)}}>Generate PDF</button>
                </div>
            </div>
        </div>
    )

}