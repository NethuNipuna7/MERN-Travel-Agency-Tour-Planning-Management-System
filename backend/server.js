const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();
// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

//oshen part
const TravelDocRoutes = require('./routes/TravelDoc');
const TravelDocInquriyRoutes = require('./routes/TravelDocInquriy');
const TravelDocAdd = require('./routes/TravelDocAdd');

//yasiru part
const TourPackageRouter = require("./routes/routes.tourPackage.js");
const TourPackageReservationRouter = require("./routes/routes.tourPackageReservations.js");

//nethu nipuna part
const accommodationRouter= require("./routes/accommodations.js");
const accommodation_reservation_Router=require("./routes/accommodation_reservation");
// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
     
    })
    .then(() => console.log("DB Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//oshen parts
app.use(TravelDocRoutes);
app.use(TravelDocInquriyRoutes);
app.use(TravelDocAdd);

//yasiru part
app.use("/tourPackage",TourPackageRouter);
app.use("/tourPackageReservation",TourPackageReservationRouter);

//nethu nipuna part
app.use("/accommodation",accommodationRouter);
app.use("/accommodation_reservation",accommodation_reservation_Router);

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
