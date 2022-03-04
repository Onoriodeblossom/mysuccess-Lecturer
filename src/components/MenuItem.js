import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../src/App.css"
/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={props.onClick}>
      <Link
        exact
        to={to}
        className={`menu-item`}
      >
        <div className="items">
        <div className="">
          {iconClassName}
        </div>
        <div>{name}</div>

        </div>
      </Link>
     
    </li>
  );
};

export default MenuItem;



