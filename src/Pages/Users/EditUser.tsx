import React from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';
import './User.css';

import { Button } from 'react-bootstrap';



const EditUser = () => 
{
    
        
        return (
            <>
                <Sidebar />
            
                <div id="right-panel" className="right-panel">
                    <Header />
                    <Breadcrumbs breadcrumbs='Dashboard/Users/Add' title='Users' />
                    <div className='col-sm-12 form-div'>
                        
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-user"></i> Edit User</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="text-input" className=" form-control-label">Text Input</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="text-input" name="text-input" placeholder="Text" className="form-control" /><small className="form-text text-muted">This is a help text</small>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="email-input" className=" form-control-label">Email Input</label></div>
                                            <div className="col-12 col-md-9"><input type="email" id="email-input" name="email-input" placeholder="Enter Email" className="form-control" /><small className="help-block form-text">Please enter your email</small></div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="password-input" className=" form-control-label">Password</label></div>
                                            <div className="col-12 col-md-9"><input type="password" id="password-input" name="password-input" placeholder="Password" className="form-control" /><small className="help-block form-text">Please enter a complex password</small></div>
                                        </div>
                                                                                
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="textarea-input" className=" form-control-label">Textarea</label></div>
                                            <div className="col-12 col-md-9"><textarea name="textarea-input" id="textarea-input" rows={9} placeholder="Content..." className="form-control" ></textarea></div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="select" className=" form-cont`rol-label">Select</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="select" id="select" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </select>
                                            </div>
                                        </div>
                                            
                                           
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="file-input" className=" form-control-label">File input</label></div>
                                            <div className="col-12 col-md-9"><input type="file" id="file-input" name="file-input" className="form-control-file" /></div>
                                        </div>
                                        
                                    </form>
                                    <div className="footer">
                                        <Button type="submit" className="btn btn-primary btn-sm">
                                            <i className="fa fa-dot-circle-o"></i> Submit
                                        </Button>
                                        <Button type="reset" className="btn btn-danger btn-sm">
                                            <i className="fa fa-ban"></i> Reset
                                        </Button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </>
        );
      

}

export default EditUser



