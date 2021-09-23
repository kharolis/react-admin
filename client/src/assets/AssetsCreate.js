import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostCreate = props => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        {/* <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' /> */}

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
    </Create>
  );
};

export default PostCreate;
