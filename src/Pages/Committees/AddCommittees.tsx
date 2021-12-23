import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddCommittees = () => 
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
                    <Breadcrumbs breadcrumbs='Dashboard/Committees/Add' title='Committees' />
                    <div className='col-sm-12 form-div'>
                        
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-user"></i> Add Committees</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="title" className=" form-control-label">Title</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="title" name="title" placeholder="Enter Title" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="description" className=" form-control-label">Description</label></div>
                                            <div className="col-12 col-md-9"><textarea name="description" id="description" rows={5} placeholder="Description" className="form-control" ></textarea></div>
                                        </div>

                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="select_members" className=" form-control-label">Select Members</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="select_members" name="select_members" placeholder="Select Members" className="form-control" />
                                                <small className="form-text text-muted">Enter name, email, phone, or address of the member</small>

                                                <div className="col-md-12 text-left">
                                                    <span className='name_nominees'>Sachin Deshpande</span>
                                                    <Button className='btn-close-white'><u>View</u></Button>
                                                    <Button className='btn-close'></Button>
                                                </div>

                                                <div className="col-md-12 text-left">
                                                    <span className='name_nominees'>Aparna Deshpande</span>
                                                    <Button className='btn-close-white'><u>View</u></Button>
                                                    <Button className='btn-close'></Button>
                                                </div>

                                            </div>
                                        </div>
                                        
                                        
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="received_email" className=" form-control-label">Can receive emails</label></div>
                                          
                                            <div className="checkbox col-md-6">
                                                <label htmlFor="received_email" className="form-check-label ">
                                                    <input type="checkbox" id="received_email" name="received_email" value="received_email" className="form-check-input" />
                                                </label>
                                            </div>
                                            
                                        </div>
                                        
                                        <br />

                                        <div className="row form-group">
                                            <FileUpload
                                                accept=".jpg,.png,.jpeg,.pdf,.doc,.docx"
                                                label="Committe Photos"
                                                multiple
                                                updateFilesCb={updateUploadedFiles}
                                                // onchange={ onFileUpload }
                                            />
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

export default AddCommittees;