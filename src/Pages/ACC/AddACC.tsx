import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddACC = () => 
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
                                            <div className="col col-md-3"><label htmlFor="improvement_details" className=" form-control-label">Improvement Details</label></div>
                                            <div className="col-12 col-md-9"><textarea name="improvement_details" id="improvement_details" rows={5} placeholder="Improvement Details" className="form-control" ></textarea></div>
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
                                            <div className="col col-md-3"><label htmlFor="nb_1" className=" form-control-label">Neighbour ID 1</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="nb_1" name="nb_1" placeholder="Enter Neighbour Details" className="form-control" />
                                                <small className="form-text text-muted">Full name, address, phone number, reg code, etc.</small>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="nb_2" className=" form-control-label">Neighbour ID 2</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="nb_2" name="nb_2" placeholder="Enter Neighbour Details" className="form-control" />
                                                <small className="form-text text-muted">Full name, address, phone number, reg code, etc.</small>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="nb_3" className=" form-control-label">Neighbour ID 3</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="nb_3" name="nb_3" placeholder="Enter Neighbour Details" className="form-control" />
                                                <small className="form-text text-muted">Full name, address, phone number, reg code, etc.</small>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="nb_4" className=" form-control-label">Neighbour ID 4</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="nb_4" name="nb_4" placeholder="Enter Neighbour Details" className="form-control" />
                                                <small className="form-text text-muted">Full name, address, phone number, reg code, etc.</small>
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

export default AddACC;



