import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./Home.css";
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
></link>;

const Home = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <div href="#" class="brand-logo">
            <img
              src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg"
              alt="no broker"
            />
          </div>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li className="booking">My Bookings</li>
            <li className="pay_rent">Pay Rent</li>
            <li className="property">For Property owners</li>
            <li className="signup">SignUp</li>
            <li className="login">Login</li>
            <li>
              <i className="large apps"></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Home;
