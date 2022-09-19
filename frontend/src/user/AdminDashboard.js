import React from "react";
import Layout from '../components/Layout';
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";


const AdminDashboard = () => {


    const { user: { _id, name, zip, address, country, number, email, date, role } } = isAuthenticated()

    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/users">View User Profiles</Link>
                    </li>


                </ul>
            </div>
        )
    }


    const adminInfo = () => {
        return (
            <div className="card mb-5" style={{width:'60%'}}>
                <h3 className="card text-white bg-info" style={{height:'3em'}}>Admin Information</h3>
                <ul className="row">
                    <dt className="col-sm-3">Full Name</dt><dd className="col-sm-9"> {name}</dd>
                    <dt className="col-sm-3 mt-3">Phone Number</dt><dd className="col-sm-9 mt-3"> {number}</dd>
                    <dt className="col-sm-3 mt-3">Address</dt><dd className="col-sm-9 mt-3"> {address}</dd>
                    <dt className="col-sm-3 mt-3">Zip/Postal code</dt><dd className="col-sm-9 mt-3"> {zip}</dd>
                    <dt className="col-sm-3 mt-3">Date of Birth</dt><dd className="col-sm-9 mt-3"> {date}</dd>
                    <dt className="col-sm-3 mt-3">Email</dt><dd className="col-sm-9 mt-3"> {email}</dd>
                    <dt className="col-sm-3 mt-3">Country</dt><dd className="col-sm-9 mt-3"> {country}</dd>

                    <li className="list-group-item " style={{ color: 'red',width:'95%' }}>
                        {role === 1 ? "You are a Admin" : "Registerd User"}
                    </li>
                </ul>
            </div>
        );
    };






    return (
        <Layout title="Admin Dashboard" description={`Good day ${name}!`} className="container-fluid">


            <div className="row">
                <div className="col-3">
                    {adminLinks()}
                </div>
                <div className="col-9">
                    {adminInfo()}
                </div>
            </div>

        </Layout>
    );
};

export default AdminDashboard;