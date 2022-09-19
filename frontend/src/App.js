import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./components/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import Profile from "./user/Profile";
import ManageUsers from "./admin/ManageUsers";
import Infomation from "./components/Infomation";
import Application from "./components/Application";
import Inquriy from "./components/Inquriy";
import Instruction from "./components/Instruction";
import AddDocument from "./components/AddDocument";
import AdminSidebar from "./components/adminSidebar";
import AdminUserManagement from "./components/AdminUserManagement";
import AdminTravelDoc from "./components/adminTravelDoc";
import AdminTravelDocAdd from "./components/adminTravelDocAdd";
import adminTravelDocAddEdit from "./components/adminTravelDocAddEdit";

import AdminTravelDocInquriy from './components/adminTravelDocInquries';

import adminTravelDocApplication from './components/adminTraveldocApplication';
import adminTravelDocApplicationCreate from './components/adminTravelDocApplicationCreate';
import adminTravelDocApplicationEdit from './components/adminTravelDocApplicationEdit';

//yasiru
import Tour from "./components/tour";
import packageDetails from './components/packageDetails';
import Payment from "./components/payment";
import EditPackage from "./components/adminEditPackage";
import DeletePackage from "./components/adminDeletePackage";
import EditPackageReservation from "./components/adminEditPackageReservation";
import DeletePackageReservation from "./components/adminDeletePackageReservation";
import AdminTour from "./components/admin";

//nethunipuna
import AddAccommodation from './components/AddAccommodation';
import Allaccommodations from './components/Allaccommodations';
import UpdateAccommodation from './components/UpdateAccommodation';
import AccommodationMainPage from './components/AccommodationMainPage';
import AccommodationBookPage from './components/AccommodationBookPage';
import adminSidebar from './components/adminSidebar';
import BookAccommodation from './components/BookAccommodation';
import AllAccommodation_reservations from './components/AllAccommodation_reservations';
import reservationManageCustomer from './components/reservationManageCustomer';
import UpdateReservationsAdmin from './components/UpdateReservationsAdmin';
import createpdf from'./components/createpdf';
import Header from './components/header';
import Admin from './components/admin';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Menu from "./components/Menu";

const App = () => {
    return (
        <BrowserRouter>
            
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <AdminRoute path="/admin/users" exact component={ManageUsers} />
                <AdminRoute path="/user/AdminDashboard" exact component={AdminDashboard} />
                <AdminRoute path="/AdminUserManagement" exact component={AdminUserManagement} />

                {/*yasiru user*/}
                <Route path="/tour" exact component={Tour} />
                <Route path="/package/:id" exact component={packageDetails}></Route>
                <Route path="/payment/:id/:pkg/:adult/:child/:total/:date" exact component={Payment}></Route>

                {/*yasiru admin*/}
                <Route path="/adminTourHome" exact component={AdminTour} />
                <Route path="/admin/editPackage/:id" exact component={EditPackage}></Route>
                <Route path="/admin/deletePackage/:id" exact component={DeletePackage}></Route>
                <Route path="/admin/EditPackageReservation/:id" exact component={EditPackageReservation}></Route>
                <Route path="/admin/DeletePackageReservation/:id" exact component={DeletePackageReservation}></Route>

                {/*oshen user*/}
                <Route path="/Information" exact component={Infomation} />
                <Route path="/Application" exact component={Application} />
                <Route path="/Inquriy" exact component={Inquriy} />
                <Route path="/Instruction" exact component={Instruction} />
                <Route path="/AddDocument" exact component={AddDocument} />

                {/*oshen admin*/}
                <AdminRoute path="/AdminSidebar" exact component={AdminSidebar} />
                <AdminRoute path="/adminTravelDoc" exact component={AdminTravelDoc} />
                <AdminRoute path="/AdminTravelDocAdd" exact component={AdminTravelDocAdd} />
                <AdminRoute path="/adminTravelDocAddEdit/:id" exact component={adminTravelDocAddEdit} />
                <AdminRoute path="/AdminTravelDocApplication" exact component={adminTravelDocApplication} />
                <AdminRoute path="/adminTravelDocApplicationCreate" exact component={adminTravelDocApplicationCreate} />
                <AdminRoute path="/adminTravelDocApplicationEdit/:id" exact component={adminTravelDocApplicationEdit} />
                <AdminRoute path="/adminTravelDocAddEdit/:id" exact component={adminTravelDocAddEdit} />
                <AdminRoute path="/adminTravelDocInquriy" exact component={AdminTravelDocInquriy} />



                {/* nethu nipuna */}
                

    <Route  path="/accommodation/main" exact component={Menu}></Route>
    <Route  path="/accommodation/main/booknow/:id"exact component={Menu}></Route>
    <Route  path="/accommodation/booknow/:id/:price" exact component={Menu}></Route>
    <Route  path="/accommodation/main/manage_reservation" exact component={Menu}></Route>


      <Route  path="/accommodation/main" exact component={Navbar}></Route>
      <Route  path="/accommodation/main/booknow/:id" exact component={Navbar}></Route>
      <Route  path="/accommodation/booknow/:id/:price" exact component={Navbar}></Route>
      <Route  path="/accommodation/main/manage_reservation"exact component={Navbar}></Route> 


      <Route path="/admin_panel/home" exact component={adminSidebar}/>

      <Route path="/admin_panel/accommodation_admin/addnew" exact component={AddAccommodation}/>
      <Route path="/admin_panel/accommodation_admin" exact component={Allaccommodations}/>
      <Route path="/admin_panel/accommodation_admin/accommodation_servations" exact component={AllAccommodation_reservations}/>
      <Route path="/admin_panel/accommodation_admin/accommodation_servations" exact component={createpdf}/>
      <Route path="/update/:id" exact component={UpdateAccommodation} />
      <Route path="/admin_panel/reservation/update/:id" exact component={UpdateReservationsAdmin} />

      <Route path="/accommodation/booknow/:id/:price" exact component={BookAccommodation}/>
      <Route path="/accommodation/booknow/payment" exact component={Payment}></Route>
      <Route path="/accommodation/main" exact component={AccommodationMainPage} />
      <Route path="/accommodation/main/booknow/:id" exact component={AccommodationBookPage} />
      <Route path="/accommodation/main/manage_reservation" exact component={reservationManageCustomer} />

            
        </BrowserRouter>
    );
};

export default App;
