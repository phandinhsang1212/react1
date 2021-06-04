import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            name: "",
            tel: "",
            permission: ""
        }
    }
    

    isChange = (event) => { 
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });

        //package to item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permisson = this.state.permission;
     }

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true){
            return(
                <div className="col">
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Add New User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" name="name" onChange={(event) => { this.isChange(event) }} className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="tel" onChange={(event) => { this.isChange(event) }} className="form-control" placeholder="Phone number" />
                            </div>
                            <div className="form-group">
                                <select name="permission" onChange={(event) => { this.isChange(event) }} className="custom-select" required>
                                    <option defaultValue>Select one</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="btn btn-block btn-primary" onClick={(name, tel, permission) => { this.props.add(this.state.name, this.state.tel, this.state.permission) }}>Add</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    
    render() {
        
        return (
            
                <div className="text-center">

                    {/* {this.hienThiNut()} */}
                    
                    {this.kiemTraTrangThai()}
                    
                </div>
            

        );
    }
}

export default AddUser;