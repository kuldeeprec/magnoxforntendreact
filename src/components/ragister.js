import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { RagisterUser, clearAuthState } from "../actions/auth";
class Ragistratonf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userId: "",
      password: "",
      confirm_password: "",
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleUserChange = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleconfirmPasswordChange = (e) => {
    this.setState({
      confirm_password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("this.state", this.state);
    const { userId, password, confirm_password, name } = this.state;
    if (userId && password == confirm_password) {
      this.props.dispatch(
        RagisterUser(name, userId, password, confirm_password)
      );
    }
  };
  render() {
    const { error } = this.props.auth;
    console.log(error, "eorrr");
    return (
      <div>
        <div className="admin-student-ragister">
          <h4>User ragistration</h4>
          <h2>{error}</h2>
          <center>
            <form>
              <div className="admin-container">
                <div class="admin-container-row">
                  <div class="admin-container-col-25">
                    <label for="fname">Full Name</label>
                  </div>
                  <div class="admin-container-col-75">
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Your name.."
                      onChange={this.handleNameChange}
                      value={this.state.name}
                    />
                  </div>
                  <div class="admin-container-col-25">
                    <label for="fname">UserID </label>
                  </div>
                  <div class="admin-container-col-75">
                    <input
                      type="text"
                      id="userId"
                      name="userId"
                      placeholder="Your userid.."
                      onChange={this.handleUserChange}
                      value={this.state.userId}
                    />
                  </div>
                </div>
                <div class="admin-container-row">
                  <div class="admin-container-col-25">
                    <label for="fname">Password</label>
                  </div>
                  <div class="admin-container-col-75">
                    <input
                      type="text"
                      id="forpassword"
                      name="password"
                      placeholder="Enter password.."
                      onChange={this.handlePasswordChange}
                      value={this.state.password}
                    />
                  </div>
                  <div class="admin-container-col-25">
                    <label for="fname">Confirm Password </label>
                  </div>
                  <div class="admin-container-col-75">
                    <input
                      type="text"
                      id="confirm-password"
                      name="firstname"
                      placeholder="Re-enter password.."
                      onChange={this.handleconfirmPasswordChange}
                      value={this.state.confirm_Password}
                    />
                  </div>
                </div>
                <div class="admin-container-row">
                  <input
                    onClick={this.handleFormSubmit}
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </center>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Ragistratonf);
