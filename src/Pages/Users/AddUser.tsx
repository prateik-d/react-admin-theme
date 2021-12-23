import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';
import './User.css';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddUser = () => 
{
    const [newUserInfo, setNewUserInfo] = useState({ profileImages: [] });
    
        const updateUploadedFiles = (files: any) =>
        {
            setNewUserInfo({ ...newUserInfo, profileImages: files });

            // console.log(files);
        }
        
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
                                    <strong><i className="fa fa-user"></i> Add User</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="reg_code" className=" form-control-label">Registration Code</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="reg_code" name="reg_code" placeholder="Enter Registration Code" className="form-control" />
                                                <small className="form-text text-muted">This is a message text</small>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="first_name" className=" form-control-label">First Name</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="first_name" name="first_name" placeholder="Enter First Name" className="form-control" />
                                                {/* <small className="form-text text-muted">This is a help text</small> */}
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="last_name" className=" form-control-label">Last Name</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="last_name" name="last_name" placeholder="Enter Last Name" className="form-control" />
                                                {/* <small className="form-text text-muted">This is a help text</small> */}
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="display_name" className=" form-control-label">Display Name</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="display_name" name="display_name" placeholder="Enter Display Name" className="form-control" />
                                                {/* <small className="form-text text-muted">This is a help text</small> */}
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="emailinput" className=" form-control-label">Email</label></div>
                                            <div className="col-12 col-md-9"><input type="email" id="email" name="email" placeholder="Enter Email" className="form-control" />
                                                <small className="help-block form-text">Please enter your email</small>
                                            </div>
                                        </div>
                                           
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="cell_phone_no" className=" form-control-label">Cell Phone No.</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="digit" id="cell_phone_no" name="cell_phone_no" placeholder="Enter Cell Phone No." className="form-control" />
                                                {/* <small className="form-text text-muted">This is a help text</small> */}
                                            </div>
                                        </div>
                                           
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="home_phone_no" className=" form-control-label">Home Phone No.</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="digit" id="home_phone_no" name="home_phone_no" placeholder="Enter Cell No." className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="account_type" className=" form-control-label">Account Type</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="account_type" id="account_type" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="street_address" className=" form-control-label">Street Address</label></div>
                                            <div className="col-12 col-md-9"><textarea name="street_address" id="street_address" rows={5} placeholder="Street Address" className="form-control" ></textarea></div>
                                        </div>
                                        <br />
                                        {/* <hr /> */}
                                        
                                        <div className="row form-group">
                                            <div className="col-4 col-md-4">
                                                <div className="col col-md-3"><label htmlFor="city" className=" form-control-label">City</label></div>
                                                <div className="col-12 col-md-9">
                                                    <select name="city" id="city" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="1">Option #1</option>
                                                        <option value="2">Option #2</option>
                                                        <option value="3">Option #3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-4 col-md-4">
                                                <div className="col col-md-3"><label htmlFor="state" className=" form-control-label">State</label></div>
                                                <div className="col-12 col-md-9">
                                                    <select name="state" id="state" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="1">Option #1</option>
                                                        <option value="2">Option #2</option>
                                                        <option value="3">Option #3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-4 col-md-4">
                                                <div className="col col-md-3"><label htmlFor="zip" className=" form-control-label">Zip</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="digit" id="zip" name="zip" placeholder="Enter Zip" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <br /> 

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="doc_type" className=" form-control-label">Select Document Type</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="doc_type" id="doc_type" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <FileUpload
                                                accept=".jpg,.png,.jpeg,.pdf,.doc,.docx"
                                                label="Update Document"
                                                multiple
                                                updateFilesCb={updateUploadedFiles}
                                                // onchange={ onFileUpload }
                                            />
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

export default AddUser



