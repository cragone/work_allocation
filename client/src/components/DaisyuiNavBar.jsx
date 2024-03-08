import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Regeneron</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">HomePage</a></li>
          <li>
            <details>
              <summary>
                Search List
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a href="/Graphing">Graphing</a></li>
                <li><a href="/Unassigned">Unassigned</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;