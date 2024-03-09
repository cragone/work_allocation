import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-white">
      <div className="flex-1">
        <a href="https://ron.regeneron.com/home" className="btn btn-ghost text-xl">Regeneron</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">HomePage</a></li>
          <li>
            <details>
              <summary>
                Search List
              </summary>
              <ul className="p-2 bg-primary text-white rounded-t-none">
                <li><a href="/Graphing">Graphing</a></li>
                <li><a href="/Unassigned">Unassigned</a></li>
                <li><a href="/Investigations">Investigations</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;