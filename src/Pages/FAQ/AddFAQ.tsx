import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddFAQ = () => 
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
                    <Breadcrumbs breadcrumbs='Dashboard/FAQ/Add' title='FAQ' />
                    <div className='col-sm-12 form-div'>
                        
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-question-circle"></i> Add FAQ</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">

                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="question" className=" form-control-label">Question</label></div>
                                            <div className="col-12 col-md-9"><textarea name="question" id="question" rows={2} placeholder="Question" className="form-control" ></textarea></div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="answer" className=" form-control-label">Answer</label></div>
                                            <div className="col-12 col-md-9"><textarea name="answer" id="answer" rows={5} placeholder="Answer" className="form-control" ></textarea></div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="status" className=" form-control-label">Status</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="status" id="status" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
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

export default AddFAQ;