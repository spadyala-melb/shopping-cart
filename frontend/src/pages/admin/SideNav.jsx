import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/summary");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="sidenav-container">
        <div className="side-nav">
          <ul>
            <li className="sidenav-link-list-item">
              <h3>Dashboard </h3>
            </li>
            <li className="sidenav-link-list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "side-nav-links-active" : "side-nav-links-inactive"
                }
                to="/admin/summary"
              >
                Summary
              </NavLink>
            </li>
            <li className="sidenav-link-list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "side-nav-links-active" : "side-nav-links-inactive"
                }
                to="/admin/products"
              >
                Products
              </NavLink>
            </li>
            <li className="sidenav-link-list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "side-nav-links-active" : "side-nav-links-inactive"
                }
                to="/admin/orders"
              >
                Orders
              </NavLink>
            </li>
            <li className="sidenav-link-list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "side-nav-links-active" : "side-nav-links-inactive"
                }
                to="/admin/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideNav;
