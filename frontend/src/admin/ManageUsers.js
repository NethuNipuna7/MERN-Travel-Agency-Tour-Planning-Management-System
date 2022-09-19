import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import { getUsers, deleteUser } from "./apiAdmin";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/admin.css";
import Imglogo from "../images/logo.png";
import HouseIcon from '@material-ui/icons/House';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ExploreIcon from '@material-ui/icons/Explore';
import DescriptionIcon from '@material-ui/icons/Description';
import SecurityIcon from '@material-ui/icons/Security';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';


const ManageUsers = () => {


  const [users, setUsers] = useState([]);

  //const { user ,token } = isAuthenticated();

  const loadUsers = () => {
    getUsers().then(data => {
      if (data.error) {
        console.log(data.error);

      } else {
        setUsers(data);
      }
    });
  };



  const destroy = userId => {
    deleteUser(userId).then(data => {
      if (data.error) {
        console.log(data.error);

      } else {
        loadUsers();
      }
    });
  };
  /*
      onDelete = (userId) =>{
          axios.delete(`/post/delete/${user._id} `).then((res)=>{
            alert("Delete Successfully");
            this.loadUsers();
          })
        }
  */
  useEffect(() => {
    loadUsers();
  }, []);



  return(
    
    <div>
    <div className="container-fluid display-table">
        <div className="row display-table-row">
            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                <div className="logo">
                    <a hef="home.html"><img src={Imglogo} alt="merkery_logo" className="hidden-xs hidden-sm" />

                    </a>

                </div>
                <h3 style={{ color: "white" }}><b>Admin Panel</b></h3>
                <div className="navi">
                    <ul>
                        <li ><a href="#"><HouseIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Accommadation</span></a></li>
                        <li><a href="#"><ConfirmationNumberIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ticket</span></a></li>
                        <li><a href="#"><LocalTaxiIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ground</span></a></li>
                        <li><a href="/admin"><ExploreIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Tour Package</span></a></li>
                        <li><a href="/admintravelDoc"><DescriptionIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Travel Document</span></a></li>
                        <li><a href="#"><SecurityIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Insurance</span></a></li>
                        <li><a href="#"><EventIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Event</span></a></li>
                        <li><a href="/AdminUserManagement"><GroupIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;User MAnagement</span></a></li>

                    </ul>
                </div>
            </div>
            <div>
            <Layout title="Manage Users"
      description="User Profile List"
      className="container-fluid"

    >



      <div className="container">



        <table className="table table-striped table-dark">
          <thead >
            <tr>
    
              <th scope="col">Full Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Zip/Postal Code</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Country</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {users.map((p, i) => (
              <tr key={i}>

                <td>{p.name}</td>
                <td>{p.date}</td>
                <td>{p.zip}</td>
                <td>{p.number}</td>
                <td>{p.email}</td>
                <td>{p.country}</td>
                <td><a onClick={() => destroy(p._id)} className="btn btn-danger mt-2" style={{
                  backgroundColor: '#ff4d4d'
                }} >
                  <i className="far fa-trash-alt " ></i>&nbsp;DELETE
                </a></td>



                {/* <button onClick={()=>destroy(p._id)} type="button" className="btn btn-warning"> 
       DELETE
      </button>     */}


              </tr>
            ))},

          </tbody>
        </table>

      </div>

    </Layout>
            </div>
        </div>

    </div>



</div>


 
  
  )

}

export default ManageUsers;