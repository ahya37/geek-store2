import React, { useState } from 'react';

import { NavDropdown } from 'react-bootstrap';

import { usePage } from '@inertiajs/inertia-react';

import { Inertia } from '@inertiajs/inertia';

import Sidebar from '../Components/Sidebar';

export default function LayoutAccount({children}) {

    // get props auth
    const { auth }= usePage().props;

    const [sidebarToogle, setSidebarToogle] = useState(false);

    const sidebarToggleHandler = (e) => {
        e.preventDefault();

        if (!sidebarToogle) {
            // add class on body
            document.body.classList.add('sb-sidenav-toggled');

            //set state "sidebarToggle" to true
            setSidebarToogle(true);
        }else{
            // remove class on body
            document.body.classList.remove('sb-sidenav-toggled');

            setSidebarToogle(false);
        }
    }

    const logoutHandler = async (e) => {
        e.preventDefault();

        Inertia.post('/logout');
    }

  return (
    <>
            <div className="d-flex sb-sidenav-toggled" id="wrapper">
                <div className="bg-sidebar" id="sidebar-wrapper">
                    <div className="sidebar-heading bg-light text-center">
                    <img src="/assets/images/logo.png" width={'23'}/> 
                    <strong> GEEK</strong> <small>STORE</small></div>
                    <Sidebar />
                </div>
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="btn btn-success-dark" onClick={sidebarToggleHandler}><i className="fa fa-list-ul"></i></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <NavDropdown title={auth.user.name} className="fw-bold" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={logoutHandler}><i className="fa fa-sign-out-alt me-2"></i> Logout</NavDropdown.Item>
                                </NavDropdown>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
        </>
  )
}
