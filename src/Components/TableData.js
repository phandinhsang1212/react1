import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

  deleteButtonClick = (idUser) =>{
    this.props.deleteUser(idUser);
  }

  mappingDataUser = () => this.props.dataUserProp.map((value, key) => (
    <TableDataRow changeEditUserStatus={() => this.props.changeEditUserStatus()} editFunClick={(user) => this.props.editFun(value)} userName={value.name} 
    tel={value.tel} per={value.permission}
     key={key} stt={key}
     id={value.id}
     deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
     ></TableDataRow>
  ))  

    render() {
        return (
            <div className="col">
  <table className="table table-striped table-hover">
    <thead className="thead-inverse">
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Điện thoại</th>
        <th>Quyền</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      {this.mappingDataUser()}
      
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;