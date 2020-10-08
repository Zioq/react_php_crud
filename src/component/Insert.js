import React, { Component } from "react";
import axios from "axios";

/**
 * CREATE TABLE Employee (
    employeeId INT PRIMARY KEY AUTO_INCREMENT,
    employeeName VARCHAR(45) NOT NULL,
    employeePosition VARCHAR(45) NOT NULL,
    employeePhone VARCHAR(45) NOT NULL,
    employeePasscode VARCHAR(45) PRIMARY KEY NOT NULL
) Engine=InnoDB;
 */

class Insert extends Component {

    constructor(props){
        super (props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePasscode = this.onChangePasscode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:"",
            position: "",
            phone:"",
            passcode: ""
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePosition(e) {
        this.setState({
            position: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone:e.target.value
        });
    }

    onChangePasscode(e) {
        this.setState({
            passcode: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            position: this.state.position,
            phone:this.state.phone,
            passcode:this.state.passcode
        };

        //console.log(obj);
    }

  render() {
    return (
      <div style={{ marginTop: 10 }} className="w-50 p-3">
        <h3> Add New Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group-3">
            <label>Name: </label>
            <input type="text" className="form-control"  value={this.state.name} onChange={this.onChangeName} />
          </div>
          <div className="form-group">
            <label for= "positionFormSelect">Position: </label>
            <select class="form-control" id="positionFormSelect" value={this.state.position} onChange={this.onChangePosition}>
              <option>Manager</option>
              <option>Server</option>
              <option>Cook</option>
            </select>
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input type="text" className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
          </div>
          <div className="form-group">
            <label>Passcode: </label>
            <input type="text" className="form-control" value= {this.state.posscode}onChange = {this.onChangePasscode}/>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Employee"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Insert;
