import * as React from 'react';
import { useSelector } from 'react-redux';
import { Layout, LayoutProps } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import { darkTheme, lightTheme } from './themes';
// import { AppState } from '../types';

export default props => {
  const theme = useSelector(state => (state.theme === 'dark' ? darkTheme : lightTheme));
  return <Layout {...props} appBar={AppBar} menu={Menu} theme={theme} />;
};
