import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostEdit = props => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        {/* <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' /> */}
        {/* ... */}
        <TextInput disabled source='id' />
        <TextInput source='operation' />
        <TextInput source='ip' />
        <TextInput source='type' />
        <TextInput source='scan' />
        <TextInput source='application' />
        <TextInput source='owner' />
        <TextInput source='enviroment' />
        <TextInput source='lifecycle' />
        <TextInput source='tags' />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
