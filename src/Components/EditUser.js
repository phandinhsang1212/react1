import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
        }
    }
    
    isChange =(event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

    }

    saveButton = () =>{

        var info={};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.getUserInfo(info);

        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card text-white bg-warning mb-3 mt-2">
                        <div className="card-header text-center">Edit User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} name="name" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} name="tel" className="form-control" placeholder="Phone number" />
                            </div>
                            <div className="form-group">
                                <select onChange={(event) => this.isChange(event)} defaultValue={this.props.permission} name="permission" className="custom-select" required>
                                    
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="btn btn-block btn-danger" onClick={() => this.saveButton()}>Save</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default EditUser;