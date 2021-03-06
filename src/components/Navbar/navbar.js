import React, { Component } from 'react';
import './navbar.css';
import Admin from '../../images/admin.PNG';
import Cust1 from '../../images/cust1.jpeg';
import Cust2 from '../../images/cust2.jpeg';
import Cust3 from '../../images/cust3.jpeg';
import Cust4 from '../../images/cust4.jpeg';
import Cust5 from '../../images/cust5.jpeg';
import Cust6 from '../../images/cust6.jpeg';
import Img1 from '../../images/img1.jpeg';
import Title from '../../images/title.png';

import $ from 'jquery';

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
                  {/* Table section started from here */}
    <section>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
            <div className="row">
              <div className="col-xl-6 col-12 mb-4">
              <h3 className="text-muted text-center mb-3">Staff Sallery</h3>
              <table className="table table-striped bg-light text-center">
                <thead>
                  <tr className="text-muted"> 
                  <th>#</th>
                  <th>Name</th>
                  <th>Sallery</th>
                  <th>Date</th>
                  <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Suleman</td>
                    <td>$2000</td>
                    <td>25/05/2018</td>
                    <td><button type="button" className="btn btn-info btn-sm">Message </button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Hassan</td>
                    <td>$2000</td>
                    <td>25/05/2018</td>
                    <td><button type="button" className="btn btn-info btn-sm">Message </button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Abdulrehman</td>
                    <td>$2000</td>
                    <td>25/05/2018</td>
                    <td><button type="button" className="btn btn-info btn-sm">Message </button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Usama</td>
                    <td>$2000</td>
                    <td>25/05/2018</td>
                    <td><button type="button" className="btn btn-info btn-sm">Message </button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Hamza</td>
                    <td>$2000</td>
                    <td>25/05/2018</td>
                    <td><button type="button" className="btn btn-info btn-sm">Message </button></td>
                  </tr>
                </tbody>
                 </table>
                 {/* Pagination is started from here  */}
                 <nav>
                   <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          <span>&laquo; </span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link py-2 px-3">
                          1
                        </a>
                      </li><li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          2
                        </a>
                      </li><li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          <span>&raquo; </span>
                        </a>
                      </li>
                   </ul>
                 </nav>
                {/* Pagination is end here  */}

              </div>
              <div className="col-xl-6 col-12">
              <h3 className="text-muted text-center mb-3">Recent Payments</h3>
              <table className="table table-dark table-hover table-center">
              <thead>
                  <tr className="text-muted"> 
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Suleman</td>
                    <td>$2000</td>
                    <td>25/05/2018</td>
                    <td><span className="badge badge-success w-75 py-2">Approved</span> </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Abdulrehman</td>
                    <td>$2000</td>
                    <td>25/05/2018</td>
                    <td><span className="badge badge-success w-75 py-2">Approved</span> </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Hassan</td>
                    <td>$2000</td>
                    <td>25/05/2018</td>
                    <td><span className="badge badge-danger w-75 py-2">Approved</span> </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Usama</td>
                    <td>$2000</td>
                    <td>25/05/2018</td>
                    <td><span className="badge badge-success w-75 py-2">Approved</span> </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Hamza</td>
                    <td>$2000</td>
                    <td>25/05/2018</td>
                    <td><span className="badge badge-danger w-75 py-2">Approved</span> </td>
                  </tr>
               </tbody> 
              </table>

              <nav>
                   <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          <span>Previous </span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link py-2 px-3">
                          1
                        </a>
                      </li><li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          2
                        </a>
                      </li><li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          <span>Next </span>
                        </a>
                      </li>
                   </ul>
                 </nav>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

                {/* Progressbar is strted here from  */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
              <div className="row mb-4 align-items-center">
                <div className="col-xl-6 col-12 mb-4 mb-xl-0">
                  <div className="bg-dark text-white p-4 rounded">
                    <h4 className="mb-5">Coversion Rates</h4>
                    <h6 className="mb-3">Google Chrome</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-striped font-weight-bold" style={{width:"90%",height:"20px"}}> 90% </div>
                    </div>
                    <h6 className="mb-3">Mozilla Firefox</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-striped bg-success font-weight-bold" style={{width:"82%",height:"20px"}}> 82% </div>
                    </div>
                    <h6 className="mb-3">Safari</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-striped bg-danger font-weight-bold" style={{width:"67%",height:"20px"}}> 67% </div>
                    </div>
                    <h6 className="mb-3">Internet Exploler</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-striped bg-info font-weight-bold" style={{width:"30%",height:"20px"}}> 30% </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-12">
                  <h4 className="text-muted p-3 mb-3">Tasks:</h4>
                  <div className="container-fluid bg-white">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                        </div>
                        <div className="col-sm-9 col-8">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-1">
                          <a href="" data-toggle="tooltip" title="edit"><i className="fas fa-edit fa-lg text-success mr-2"></i> </a>
                      </div>
                      <div className="col-1">
                          <a href="" data-toggle="tooltip" title="delete"><i className="fas fa-trash-alt fa-lg text-danger mr-2"></i> </a>
                      </div>        
                    </div>
                  </div>
                  <div className="container-fluid bg-white">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                        </div>
                        <div className="col-sm-9 col-8">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-1">
                          <a href="" data-toggle="tooltip" title="edit"><i className="fas fa-edit fa-lg text-success mr-2"></i> </a>
                      </div>
                      <div className="col-1">
                          <a href="" data-toggle="tooltip" title="delete"><i className="fas fa-trash-alt fa-lg text-danger mr-2"></i> </a>
                      </div>        
                    </div>
                  </div>
                  <div className="container-fluid bg-white">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                        </div>
                        <div className="col-sm-9 col-8">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-1">
                          <a href="" data-toggle="tooltip" title="edit"><i className="fas fa-edit fa-lg text-success mr-2"></i> </a>
                      </div>
                      <div className="col-1">
                          <a href="" data-toggle="tooltip" title="delete"><i className="fas fa-trash-alt fa-lg text-danger mr-2"></i> </a>
                      </div>        
                    </div>
                  </div><div className="container-fluid bg-white">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                        </div>
                        <div className="col-sm-9 col-8">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-1">
                          <a href="" data-toggle="tooltip" title="edit"><i className="fas fa-edit fa-lg text-success mr-2"></i> </a>
                      </div>
                      <div className="col-1">
                          <a href="" data-toggle="tooltip" title="delete"><i className="fas fa-trash-alt fa-lg text-danger mr-2"></i> </a>
                      </div>        
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Activities part is strted here */}

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
              <div className="row">
                <div className="col-xl-7">
                  <h4 className="text-muted mb-4">Recent Customer Activities</h4>
                  <div id="accordion"> 
                    <div className="card">
                      <div className="card-header">
                        <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseOne">
                          <img src={Cust1} width="50" className="mr-3 rounded" alt=""/> John posted a new comment.
                        </button>
                      </div>
                      <div className="collapse" id="collapseOne">
                        <div className="card-body">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut exercitationem nisi ipsum saepe neque fugiat voluptatibus suscipit aperiam dignissimos.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseTwo">
                          <img src={Cust2} width="50" className="mr-3 rounded" alt=""/> Mark posted a new comment.
                        </button>
                      </div>
                      <div className="collapse" id="collapseTwo">
                        <div className="card-body">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut exercitationem nisi ipsum saepe neque fugiat voluptatibus suscipit aperiam dignissimos.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseThree">
                          <img src={Cust3} width="50" className="mr-3 rounded" alt=""/> Mark posted a new comment.
                        </button>
                      </div>
                      <div className="collapse" id="collapseThree">
                        <div className="card-body">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut exercitationem nisi ipsum saepe neque fugiat voluptatibus suscipit aperiam dignissimos.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseFour">
                          <img src={Cust4} width="50" className="mr-3 rounded" alt=""/> Mark posted a new comment.
                        </button>
                      </div>
                      <div className="collapse" id="collapseFour">
                        <div className="card-body">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut exercitationem nisi ipsum saepe neque fugiat voluptatibus suscipit aperiam dignissimos.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseFive">
                          <img src={Cust5} width="50" className="mr-3 rounded" alt=""/> Mark posted a new comment.
                        </button>
                      </div>
                      <div className="collapse" id="collapseFive">
                        <div className="card-body">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut exercitationem nisi ipsum saepe neque fugiat voluptatibus suscipit aperiam dignissimos.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseSix">
                          <img src={Cust6} width="50" className="mr-3 rounded" alt=""/> Mark posted a new comment.
                        </button>
                      </div>
                      <div className="collapse" id="collapseSix">
                        <div className="card-body">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut exercitationem nisi ipsum saepe neque fugiat voluptatibus suscipit aperiam dignissimos.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 mt-5">
                  <div className="card rounded">
                    <div className="card-body">
                      <h5 className="text-muted text-center mb-4">Quick Status Post</h5>
                    <ul className="list-inline text-center py-3">
                      <li className="list-inline-item mr-4">
                        <a href=""><i className="fas fa-pencil-alt text-success"> </i><span className="h6 text-muted">Status</span> 
                        </a> </li> 
                        <li className="list-inline-item mr-4">
                        <a href=""><i className="fas fa-camera text-info"> </i><span className="h6 text-muted">Photo</span> 
                        </a> </li>
                        <li className="list-inline-item mr-4">
                        <a href=""><i className="fas fa-map-marker-alt text-primary"> </i><span className="h6 text-muted">Check in</span> 
                        </a> </li>
                      </ul>
                      <form >
                        <div className="form-group">
                          <input type="text" className="form-control py-2 mb-3" placeholder="whats your status..?" />
                          <button type="button" className="btn btn-block text-uppercase font-weight-bold text-light bg-info py-2 mb-5">Submit</button>
                        </div>
                      </form>
                      <div className="row">
                        <div className="col-6">
                          <div className="card bg-light">
                          <i className="far fa-calendar-alt fa-8x text-warning d-block m-auto py-3"></i>
                          <div className="card-body">
                            <p className="card-text text-center font-weight-bold text-uppercase">Mon, may 20</p>
                          </div>
                          </div>
                        </div>
                        <div className="col-6">
                        <div className="card bg-light">
                          <i className="far fa-clock fa-8x text-danger d-block m-auto py-3"></i>
                          <div className="card-body">
                            <p className="card-text text-center font-weight-bold text-uppercase">2:00 am</p>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer section is going started from here  */}
      <footer>
        <div className="container-fluid">
          <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
            <div className="row border-top pt-3 mt-3">
              <div className="col-lg-6 text-center">
                <ul className="list-inline">
                  <li className="list-inline-item mr-2">
                    <a href="" className="">CodeAndCreate</a>
                  </li>
                  <li className="list-inline-item mr-2">
                    <a href="" className="">About</a>
                  </li>
                  <li className="list-inline-item mr-2">
                    <a href="" className="">Support</a>
                  </li>
                  <li className="list-inline-item mr-2">
                    <a href="" className="">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 text-center">
                <p>&copy; 2019 Copyright Made with <i className="fas fa-heart text-danger"></i> by <span className="text-success">CodeAndCreate</span> </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    );
  }
}
