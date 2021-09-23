import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LabelIcon from '@material-ui/icons/Label';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { useTranslate, DashboardMenuItem, MenuItemLink, MenuProps, ReduxState } from 'react-admin';

import icons from '../icons';

import assets from '../assets';
import SubMenu from './SubMenu';

const Menu = ({ dense = false }) => {
  const [state, setState] = useState({
    assets: true,
    administration: true,
    menuCustomers: true,
  });
  const translate = useTranslate();
  const open = useSelector(state => state.admin.ui.sidebarOpen);
  useSelector(state => state.theme); // force rerender on theme change
  const classes = useStyles();

  const handleToggle = menu => {
    setState(state => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <div
      className={classnames(classes.root, {
        [classes.open]: open,
        [classes.closed]: !open,
      })}
    >
      {' '}
      <DashboardMenuItem />
      <SubMenu
        handleToggle={() => handleToggle('administration')}
        isOpen={state.administration}
        name='Administration'
        icon={<icons.apps />}
        dense={dense}
      >
        <MenuItemLink
          to={{
            pathname: '/admin0inner',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`User roles`, {
            smart_count: 2,
          })}
          leftIcon={<icons.folder />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle('assets')}
        isOpen={state.assets}
        name='Assets'
        icon={<icons.apps />}
        dense={dense}
      >
        <MenuItemLink
          to={{
            pathname: '/servers',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`Servers`, {
            smart_count: 2,
          })}
          leftIcon={<icons.folder />}
          dense={dense}
        />
        <MenuItemLink
          to={{
            pathname: '/application-groups',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`Application Groups`, {
            smart_count: 2,
          })}
          leftIcon={<icons.folder />}
          dense={dense}
        />
        <MenuItemLink
          to={{
            pathname: '/platforms',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`Platforms`, {
            smart_count: 2,
          })}
          leftIcon={<icons.folder />}
          dense={dense}
        />
        <MenuItemLink
          to={{
            pathname: '/os-compliance',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`OS Compliance`, {
            smart_count: 2,
          })}
          leftIcon={<icons.folder />}
          dense={dense}
        />
        <MenuItemLink
          to={{
            pathname: '/tags',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`Tags`, {
            smart_count: 2,
          })}
          leftIcon={<icons.folder />}
          dense={dense}
        />
        <MenuItemLink
          to={{
            pathname: '/enviroments',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`Enviroments`, {
            smart_count: 2,
          })}
          leftIcon={<icons.folder />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle('costs')}
        isOpen={state.costs}
        name='Costs'
        icon={<icons.apps />}
        dense={dense}
      >
        <MenuItemLink
          to={{
            pathname: '/costs-inner',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`Estimated profit`, {
            smart_count: 2,
          })}
          leftIcon={<icons.folder />}
          dense={dense}
        />
      </SubMenu>
      <MenuItemLink
        to={{
          pathname: '/scanners',
          state: { _scrollToTop: true },
        }}
        primaryText={translate(`Scanners`, {
          smart_count: 2,
        })}
        leftIcon={<icons.apps />}
        dense={dense}
      />
      <MenuItemLink
        to={{
          pathname: '/faq',
          state: { _scrollToTop: true },
        }}
        primaryText={translate(`FAQ`, {
          smart_count: 2,
        })}
        leftIcon={<icons.apps />}
        dense={dense}
      />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  open: {
    width: 250,
  },
  closed: {
    width: 55,
  },
}));

export default Menu;
