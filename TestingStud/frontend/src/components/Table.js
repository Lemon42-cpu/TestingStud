import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

 
 
class Table extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey
                             dataField='id'
                             dataAlign='center'
                             headerAlign="left"
                            //  tdStyle={
                            //      {backgroundColor: 'green'}}
                                 >
            Номер
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
                             dataAlign='center'
                             headerAlign="center"
                             width="40%">
            Предмет
          </TableHeaderColumn>
          <TableHeaderColumn dataField='category'
                             dataAlign='center'
                             headerAlign="center"
                             width='30%'>
          Дисциплина
          </TableHeaderColumn>
          <TableHeaderColumn dataField='result'
                             dataAlign='center'
                             headerAlign="center"
                             width='10%'>
            Баллы
          </TableHeaderColumn>
          <TableHeaderColumn dataField='result100'
                             dataAlign='center'
                             headerAlign="center"
                             width='30%'>
            Успеваемость %
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table;