import React, { Component } from 'react';
import './navbar.css';
import Admin from '../../images/admin.PNG';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light">
        <button className="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar"> 
        <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="myNavbar">
            <div className="container-fluid" >
                <div className="row" >
                    <div className="col-lg-3 sidebar fixed-top" >
                      <a href="" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">CodeandCreate</a>
                   <div className="bottom-border pb-3">
                     <img src={Admin} style={{width:'50px'}} className="rounded-circle mr-3" />
                     <a href="" className="text-white">Sheikh Suleman</a>
                   </div>
                   <ul className="navbar-nav flex-column mt-4">
                     <li className="nav-item">
                       <a href="" className="nav-link text-white p-3 mr-3 sidebar-link current"><i className="fa fa-home text-light fa-lg mr-3"></i>Dashboard </a></li>
                     <li className="nav-item">
                       <a href="" className="nav-link text-white p-3 mr-3 sidebar-link"><i className="fa fa-user text-light fa-lg mr-3"></i>Profile </a>
                     </li><li className="nav-item">
                       <a href="" className="nav-link text-white p-3 mr-3 sidebar-link"><i className="fa fa-envelope text-light fa-lg mr-3"></i>Inbox </a>
                     </li><li className="nav-item">
                       <a href="" className="nav-link text-white p-3 mr-3 sidebar-link"><i className="fa fa-shopping-cart text-light fa-lg mr-3"></i>Sales </a>
                     </li><li className="nav-item">
                       <a href="" className="nav-link text-white p-3 mr-3 sidebar-link"><i className="fa fa-chart-line text-light fa-lg mr-3"></i>Analytics </a>
                     </li><li className="nav-item">
                       <a href="" className="nav-link text-white p-3 mr-3 sidebar-link"><i className="fa fa-chart-bar text-light fa-lg mr-3"></i>Charts </a>
                     </li><li className="nav-item">
                       <a href="" className="nav-link text-white p-3 mr-3 sidebar-link"><i className="fa fa-table text-light fa-lg mr-3"></i>Tables </a>
                     </li><li className="nav-item">
                       <a href="" className="nav-link text-white p-3 mr-3 sidebar-link"><i className="fa fa-wrench text-light fa-lg mr-3"></i>Settings </a></li> 
                     <li className="nav-item"> 
                     <a href="" className="nav-link text-white p-3 mr-3 sidebar-link"><i className="fa fa-file-alt text-light fa-lg mr-3"></i>Documentaion </a> </li>
                   
            
                   </ul>
                    </div>
                    <div className="col-lg-9">

                    </div>
                </div>
            </div>
        </div>
      </nav>
    );
  }
}
