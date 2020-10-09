import React,  {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';


class RecordsList extends Component {
    constructor(props) {
        super (props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect :false
        }
    }

    delete() {
        axios.get('http://localhost:8888/reactJsCRUD/delete.php?id='+this.props.obj.employeeId)
         .then(
             this.setState({redirect: true})
         )
         .catch(err=>console.log(err));
    }

    render() { 

        const {redirect} =this.state;
        if(redirect) {
            return < Redirect to='/view'/>
        }

        return (  
            <tr>
                <td>
                    {this.props.obj.employeeName}
                </td>
                <td>
                    {this.props.obj.employeePosition}
                </td>
                <td>
                    {this.props.obj.employeePhone}
                </td>
                <td>
                    <button className = "btn btn-primary"> Edit</button>
                </td>
                <td>
                    <button onClick={this.delete} className = "btn btn-danger"> Delete</button>
                </td>
            </tr>
        );
    }
}
 
export default RecordsList;