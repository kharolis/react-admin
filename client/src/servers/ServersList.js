import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  UrlField,
} from 'react-admin';

const UserList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField sortable={true} source='id' />
        <TextField source='operation' />
        <TextField source='ip' />
        <TextField source='type' />
        <TextField source='scan' />
        <UrlField linkText='body' source='application' />
        <TextField source='owner' />
        <TextField source='enviroment' />
        <TextField source='lifecycle' />
        <TextField source='tags' />
        {/* <DateField source='publishedAt' /> */}
        <EditButton basePath='/assets' />
        <DeleteButton basePath='/assets' />
      </Datagrid>
    </List>
  );
};

export default UserList;
