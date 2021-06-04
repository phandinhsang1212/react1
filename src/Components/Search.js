import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }
    

    isChange = (event) => {

        this.setState({
            tempValue: event.target.value
        });

        this.props.checkConnectProps(this.state.tempValue);
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === true){
            return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.ketNoi()}>Close</div>;
        }else{
            return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.ketNoi()}>Add</div>
        }
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus === true){
            return <EditUser getUserInfo={(info) => this.getUserInfo(info)} userEditObject={this.props.userEditObject} changeEditUserStatus={() => this.props.changeEditUserStatus()}></EditUser>
        }
    }

    getUserInfo =(info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info);
    }

    render() {
        return (
            <div className="col-12">

                {this.isShowEditForm()}
                
                <div className="col-12">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" onChange={(event) => {this.isChange(event)}} placeholder="Nhap" />
                            <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Search</div>
                            

                            
                        </div>
                        <div className="btn-group1">
                            {this.hienThiNut()}
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <hr />
                </div>

            </div>
        );
    }
}

export default Search;