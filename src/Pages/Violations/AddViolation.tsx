import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddViolation = () => 
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
                    <Breadcrumbs breadcrumbs='Dashboard/Violation/Add' title='Violation' />
                    <div className='col-sm-12 form-div'>
                        
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-user"></i> Add Violation</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="user_details" className=" form-control-label">Enter User Details</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="user_details" name="user_details" placeholder="Enter Registration Code" className="form-control" />
                                                <small className="form-text text-muted">Full name, address, phone number, reg code, etc.</small>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className=" form-control-label">Full Name</label></div>
                                            <div className="col-12 col-md-9">
                                                <label className=" form-control-label">Sachin Deshpande</label>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className=" form-control-label">Reg Code</label></div>
                                            <div className="col-12 col-md-9">
                                                <label className=" form-control-label">123456</label>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className=" form-control-label">Email</label></div>
                                            <div className="col-12 col-md-9">
                                                <label className=" form-control-label">sachin@gmail.com</label>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className=" form-control-label">Phone No.</label></div>
                                            <div className="col-12 col-md-9">
                                                <label className=" form-control-label">123-123-1234</label>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className=" form-control-label">Account Type</label></div>
                                            <div className="col-12 col-md-9">
                                                <label className=" form-control-label">Moderator</label>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label className=" form-control-label">Address</label></div>
                                            <div className="col-12 col-md-9">
                                                <label className=" form-control-label">26, P O Box 1234, X community, Frisco, Texas, USA, 900001</label>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="account_type" className=" form-control-label">Violation Type</label></div>
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
                                            <div className="col col-md-3"><label htmlFor="description" className=" form-control-label">Description</label></div>
                                            <div className="col-12 col-md-9"><textarea name="description" id="description" rows={5} placeholder="Description" className="form-control" ></textarea></div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="last_name" className=" form-control-label">Last Name</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="last_name" name="last_name" placeholder="Enter Last Name" className="form-control" />
                                                {/* <small className="form-text text-muted">This is a help text</small> */}
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="date" className=" form-control-label">Date</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="date" id="date" name="date" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <br />
                                        <strong className='pull-left'>Update Document</strong>
                                        <br />
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

                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="status" className=" form-control-label">Status</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="status" id="status" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </select>
                                            </div>
                                        </div>
                                       
                                        <div className="footer">
                                            <Button type="submit" className="btn btn-primary btn-sm">
                                                <i className="fa fa-dot-circle-o"></i> Submit
                                            </Button>
                                            <Button type="reset" className="btn btn-danger btn-sm">
                                                <i className="fa fa-ban"></i> Reset
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </>
        );
      

}

export default AddViolation



