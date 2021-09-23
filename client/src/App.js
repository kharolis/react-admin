import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import customRoutes from './routes';

// Fake server
// Should be fetched from API
import server from './fakeServer';

// Menu
import assets from './assets';
import servers from './servers';

import Login from './layout/Login';
import Layout from './layout/Layout';

const importSpecifier = imp => {
  switch (imp) {
    case 'assets':
      return assets;
    case 'servers':
      return servers;
    default:
      return assets;
  }
};

const App = () => {
  return (
    <Admin
      loginPage={Login}
      layout={Layout}
      customRoutes={customRoutes}
      dataProvider={restProvider('http://localhost:3000')}
    >
      {server.map((el, i) => (
        <Resource key={i} name={el.srv} {...importSpecifier(el.type)} />
      ))}
    </Admin>
  );
};

export default App;

// var MyComponent = Component[type + 'aaa']
// return <MyComponent>
