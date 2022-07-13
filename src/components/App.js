import React from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { authenticateUser } from "../actions/auth";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Home, Login, Ragistratonf } from "./";
import "./App.css";
class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      const user = jwt_decode(token);

      console.log("user", user);
      this.props.dispatch(
        authenticateUser({
          userId: user.userId,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }
  render() {
    const { auth } = this.props;
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home auth={auth} />}></Route>
            <Route path="login" element={<Login />} />
            <Route path="ragister" element={<Ragistratonf />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Navbar: state.Navbar,
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(App);
