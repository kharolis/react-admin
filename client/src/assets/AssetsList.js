import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  UrlField,
  SearchInput,
  AutocompleteInput,
  ReferenceInput,
  DateInput,
  NullableBooleanInput,
  TextInput,
} from 'react-admin';

const PostList = props => {
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
        <EditButton basePath='/assets' />
        <DeleteButton basePath='/assets' />
      </Datagrid>
    </List>
  );
};

export default PostList;
