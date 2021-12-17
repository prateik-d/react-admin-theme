import React, { useState } from 'react';
import './Home.css';
import '../../assets/assets/css/style.css';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Header from '../../Component/Header/Header';
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import { Alert, Badge } from 'react-bootstrap';

const Home = () => {

    const [alertShow, setAlertShow] = useState(true);


    return (
            <>
                <Sidebar />
                
                <div id="right-panel" className="right-panel">
                    <Header />
                    <Breadcrumbs breadcrumbs='Dashboard' />

                    <div className="content mt-3">

                        <div className="col-sm-12">

                        { 
                            alertShow && 
                            
                            <Alert variant="success" onClose={() => setAlertShow(false)}   dismissible>
                                <p className='alert-success text-left'>
                                    <Badge bg="success">Success</Badge> {' '}
                                    You successfully read this important alert message.
                                </p>
                            </Alert>
                        }
                          
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card text-white bg-flat-color-1">
                                <div className="card-body pb-0">
                                    <h4 className="mb-0">
                                        <span className="count">10468</span>
                                    </h4>
                                    <p className="text-light">Members online</p>

                                </div>

                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card text-white bg-flat-color-2">
                                <div className="card-body pb-0">
                                    
                                    <h4 className="mb-0">
                                        <span className="count">10468</span>
                                    </h4>
                                    <p className="text-light">Members online</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card text-white bg-flat-color-3">
                                <div className="card-body pb-0">
                                    
                                    <h4 className="mb-0">
                                        <span className="count">10468</span>
                                    </h4>
                                    <p className="text-light">Members online</p>

                                </div>

                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card text-white bg-flat-color-4">
                                <div className="card-body pb-0">
                                    
                                    <h4 className="mb-0">
                                        <span className="count">10468</span>
                                    </h4>
                                    <p className="text-light">Members online</p>


                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </>
    );
};

export default Home;
