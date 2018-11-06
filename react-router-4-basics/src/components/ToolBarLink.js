import React from 'react';
import { NavLink } from 'react-router-dom';

function ToolBarLink({ children, ...rest }) {
  return (
    <NavLink activeClassName="mdc-tab--active" {...rest}>
      {children}
    </NavLink>
  );
}

export default ToolBarLink;
