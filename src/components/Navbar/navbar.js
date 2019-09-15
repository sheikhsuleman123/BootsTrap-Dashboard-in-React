import React, { Component } from 'react';
import './navbar.css';
import Admin from '../../images/admin.PNG';

export default class Navbar extends Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light">
        <button className="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar"> 
        <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="myNavbar">
            <div className="container-fluid" >
                <div className="row" >
                    <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top" >
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
                    <div className="col-xl-10 col-lg-9 col-md-8 top-navbar ml-auto bg-dark fixed-top py-2">
                      <div className="row align-items-center">
                        
                        <div className="col-md-4">
                          <h4 className="text-light mb-0">DASHBOARD</h4>
                        </div>
                        
                        <div className="col-md-5">
                        <form action="">
                          <div className="input-group">
                            <input type="text" className="form-control search-input" placeholder="search"/>
                            <button type="button" className="btn btn-white search-button"> <i className="fa fa-search text-danger"> </i> </button>
                          </div>
                        </form>
                        </div>
                        
                        <div className="col-md-3">
                          <div className="navbar-nav">
                            <li className="nav-item icon-parent"><a href="" className="nav-link icon-bullet"><i className="fa fa-comments text-muted fa-lg"></i> </a> </li>
                            <li className="nav-item icon-parent"><a href="" className="nav-link icon-bullet"><i className="fa fa-bell text-muted fa-lg"></i> </a> </li>
                            <li className="nav-item ml-md-auto"><a href="" className="nav-link" data-toggle="modal" data-target="#sign-out"><i className="fa fa-sign-out-alt text-danger fa-lg"></i> </a> </li>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </nav>

          {/* Logout model start */}

      <div className="modal fade" id="sign-out">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"> Want to leave ?</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              Press logout to leave
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-dismiss="modal">Stay Here </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Logout </button>
            </div>
          </div>
        </div>
      </div>
                     {/* Dashboard card section started */}
<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
        <div className="row pt-md-5 mt-md-3 mb-5">
          <div className="col-xl-3 col-sm-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <i className="fas fa-shopping-cart fa-3x text-warning"></i>
                <div className="text-right text-secondary">
                  <h5>Sales</h5>
                  <h3>$135,000</h3>
                </div>
              </div>
            </div>
            <div className="card-footer text-secondary">
              <i className="fas fa-sync mr-3"></i>
              <span>Updated Now</span>
            </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <i className="fas fa-money-bill-alt fa-3x text-success"></i>
                <div className="text-right text-secondary">
                  <h5>expences</h5>
                  <h3>$39,000</h3>
                </div>
              </div>
            </div>
            <div className="card-footer text-secondary">
              <i className="fas fa-sync mr-3"></i>
              <span>Updated Now</span>
            </div>
            </div>
          </div> 
           <div className="col-xl-3 col-sm-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <i className="fas fa-users fa-3x text-primary"></i>
                <div className="text-right text-secondary">
                  <h5>Users</h5>
                  <h3>$50,000</h3>
                </div>
              </div>
            </div>
            <div className="card-footer text-secondary">
              <i className="fas fa-sync mr-3"></i>
              <span>Updated Now</span>
            </div>
            </div>
          </div>  <div className="col-xl-3 col-sm-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <i className="fas fa-shopping-cart fa-3x text-danger"></i>
                <div className="text-right text-secondary">
                  <h5>Visiters</h5>
                  <h3>$35,000</h3>
                </div>
              </div>
            </div>
            <div className="card-footer text-secondary">
              <i className="fas fa-sync mr-3"></i>
              <span>Updated Now</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
    );
  }
}
