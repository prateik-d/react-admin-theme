import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddDocument = () => 
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
                    <Breadcrumbs breadcrumbs='Dashboard/Documents/Add' title='Documents' />
                    <div className='col-sm-12 form-div'>
                        
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-file-text"></i> Add Documents</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="title" className=" form-control-label">Enter Title</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="title" name="title" placeholder="Enter Title" className="form-control" />                                                <small className="form-text text-muted">Full name, address, phone number, reg code, etc.</small>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="type" className=" form-control-label">Type</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="type" id="type" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="year" className=" form-control-label">Year</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="date" id="year" name="year" placeholder="Enter Year" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="description" className=" form-control-label">Description</label></div>
                                            <div className="col-12 col-md-9"><textarea name="description" id="description" rows={5} placeholder="Description" className="form-control" ></textarea></div>
                                        </div>
                                        
                                        <br />
                                        <strong className='pull-left'>Update Document</strong>
                                        <br />
                                        <br />

                                        
                                        <div className="row form-group">
                                            <FileUpload
                                                accept=".jpg,.png,.jpeg,.pdf,.doc,.docx"
                                                label="File Upload"
                                                multiple
                                                updateFilesCb={updateUploadedFiles}
                                                // onchange={ onFileUpload }
                                            />
                                        </div>

                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="status" className=" form-control-label">Past Versions</label></div>
                                            <div className="col-12 col-md-9">
                                                <div className="col-12 col-md-12 text-left">
                                                        <p>previous-version.pdf</p>
                                                        <p>previous-version.pdf</p>
                                                </div>
                                                
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

export default AddDocument;