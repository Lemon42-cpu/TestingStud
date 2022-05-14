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
                             width="30"
                            //  tdStyle={
                            //      {backgroundColor: 'green'}}
                                 >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
                             dataAlign='center'
                             headerAlign="center"
                             width="70%">
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center">
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table;