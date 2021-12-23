import React from 'react';
import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo2.png';
import './Sidebar.css';
import Dropdown from 'react-bootstrap/Dropdown';

import { Link } from 'react-router-dom'


  

const Sidebar = () => {
    return (
                <aside id="left-panel" className="left-panel">
                    <nav className="navbar navbar-expand-sm navbar-default">

                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="./">
                                <img src={logo} alt="Logo" />    
                            </a>
                            <a className="navbar-brand hidden" href="./">
                                <img src={logo2} alt="Logo" />
                            </a>
                        </div>

                        <div id="main-menu" className="main-menu collapse navbar-collapse">

                            <ul className="nav navbar-nav">
                                <li className="menu-item-has-children dropdown active">
                                    <Dropdown>
                                        <Dropdown.Toggle className='noChildren'>
                                            <Link to={'/home'}>
                                                <i className="menu-icon fa fa-dashboard"></i>
                                                <span >
                                                    Dashboard
                                                </span>
                                            </Link>
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">
                                    
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-user"></i> 
                                                <span>
                                                    Manage Users
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/users/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        User List
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/users/add"}>
                                                    <i className="fa fa-user-plus"></i>
                                                    <span className='submenu'>
                                                        Add Users
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/users/roles"}>
                                                    <i className="fa fa-tag"></i>
                                                    <span className='submenu'>
                                                        User Roles
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-credit-card"></i> 
                                                <span>
                                                    Violations
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <Link to={"/violation/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        List Violations
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/violation/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add Violations
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-building-o"></i> 
                                                <span>
                                                    ACC
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/acc/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        List ACC Request
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/acc/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add Acc Request
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-users"></i> 
                                                <span>
                                                    Voting
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/voting/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        Voting History
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/voting/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Create Voting
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-search"></i> 
                                                <span>
                                                    Lost and Found
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/lost-and-found/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        View Lost and Found
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/lost-and-found/add"}>
                                                    <i className="fa fa-search-plus"></i>
                                                    <span className='submenu'>
                                                        Add Lost and Found
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-calendar"></i> 
                                                <span>
                                                    Events
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/events/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        View Events
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/events/add"}>
                                                    <i className="fa fa-calendar-plus-o"></i>
                                                    <span className='submenu'>
                                                        Add Event
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-paw"></i> 
                                                <span>
                                                    Pet Registry
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/pet/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        List Pets
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/pet/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add Pets
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-ticket"></i> 
                                                <span>
                                                    Tickets
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/ticket/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        View Tickets
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/ticket/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add a Ticket
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-car"></i> 
                                                <span>
                                                    Vehicle
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/vehicle/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        List Vehicle
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/vehicle/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add Vehicle
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-address-card-o"></i> 
                                                <span>
                                                    Committees
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/committees/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                    Committees List 
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/committees/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Create Committee
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-shield"></i> 
                                                <span>
                                                    Amenities
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/amenities/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                    List Amenities
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/amenities/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add Amenities
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                
                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-file-text-o"></i> 
                                                <span>
                                                    Reservations
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/reservations/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                    Reservations List
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/reservations/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add Reservation
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                
                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-file-text"></i> 
                                                <span>
                                                    Documents
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/documents/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        Documents List
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/documents/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add Documents
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                
                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-question"></i> 
                                                <span>
                                                    FAQ
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/faq/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        FAQ List
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/faq/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add FAQ
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                
                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-link"></i> 
                                                <span>
                                                    Important Links
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/important_links/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        Important Links List
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/important_links/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add Important Links
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                
                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-shopping-bag"></i> 
                                                <span>
                                                    Classifieds
                                                </span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/classifieds/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                        Classifieds List
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={"/classifieds/add"}>
                                                    <i className="fa fa-plus"></i>
                                                    <span className='submenu'>
                                                        Add Classifieds
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children dropdown">   
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                                <i className="menu-icon fa fa-calendar-check-o"></i> 
                                                <span>
                                                    Calender
                                                </span>
                                            </a>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={"/users/list"}>
                                                    <i className="fa fa-list"></i>
                                                    <span className='submenu'>
                                                    View
                                                    </span>
                                                </Link>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children">   
                                    <Dropdown>
                                        <Dropdown.Toggle className='noChildren'>
                                            <Link to={"/users/list"}>
                                                <i className="menu-icon fa fa-file-pdf-o"></i> 
                                                <span>
                                                    Reports
                                                </span>
                                            </Link>
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children">   
                                    <Dropdown>
                                        <Dropdown.Toggle className='noChildren'>
                                            <Link to={"/users/list"}>
                                                <i className="menu-icon fa fa-cog"></i> 
                                                <span>
                                                    Settings
                                                </span>
                                            </Link>
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                </li>

                                <li className="menu-item-has-children">   
                                    <Dropdown>
                                        <Dropdown.Toggle className='noChildren'>
                                            <Link to={"/login"}>
                                                <i className="menu-icon fa fa-sign-out"></i> 
                                                <span>
                                                    Logout
                                                </span>
                                            </Link>
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                </li>

                            </ul>
                        </div>
                    </nav>
                    
                </aside>

                
            );
};

export default Sidebar;
