import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddEvent = () => 
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
                                    <strong><i className="fa fa-calendar-plus-o"></i> Add Event</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="title" className=" form-control-label">Enter Title</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="title" name="title" placeholder="Enter Title" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="category" className=" form-control-label">Category</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="category" id="category" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="description" className=" form-control-label">Event Description</label></div>
                                            <div className="col-12 col-md-9"><textarea name="description" id="description" rows={5} placeholder="Description" className="form-control" ></textarea></div>
                                        </div>
                                          
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="start_date" className=" form-control-label">Start Date</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="date" id="start_date" name="start_date" className="form-control" />
                                            </div>
                                        </div>
                                          
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="end_date" className=" form-control-label">End Date</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="date" id="end_date" name="end_date" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-6">
                                                <div className="col col-md-3"><label htmlFor="phone_1" className=" form-control-label">Contact Phone 1</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="phone_1" name="phone_1" placeholder='Contact Phone 1' className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col col-md-6">
                                                <div className="col col-md-3"><label htmlFor="email_1" className=" form-control-label">Contact Email 1</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="email_1" name="email_1" placeholder='Contact Email 1' className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-6">
                                                <div className="col col-md-3"><label htmlFor="phone_2" className=" form-control-label">Contact Phone 2</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="phone_2" name="phone_2" placeholder='Contact Phone 2' className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col col-md-6">
                                                <div className="col col-md-3"><label htmlFor="email_2" className=" form-control-label">Contact Email 2</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="email_2" name="email_2" placeholder='Contact Email 2' className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-6">
                                                <div className="col col-md-3"><label htmlFor="phone_3" className=" form-control-label">Contact Phone 3</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="phone_3" name="phone_3" placeholder='Contact Phone 3' className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col col-md-6">
                                                <div className="col col-md-3"><label htmlFor="email_3" className=" form-control-label">Contact Email 3</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="email_3" name="email_3" placeholder='Contact Email 3' className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-6">
                                                <div className="col col-md-3"><label htmlFor="phone_4" className=" form-control-label">Contact Phone 4</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="phone_4" name="phone_4" placeholder='Contact Phone 4' className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col col-md-6">
                                                <div className="col col-md-3"><label htmlFor="email_4" className=" form-control-label">Contact Email 4</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="email_4" name="email_4" placeholder='Contact Email 4' className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="location" className=" form-control-label">Location</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="location" id="location" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="Club House">Club House</option>
                                                    <option value="Hall">Hall</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="fb_url" className=" form-control-label">Enter FB URL</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="url" id="fb_url" name="fb_url" placeholder="Enter Last Name" className="form-control" />
                                            </div>
                                        </div>
                                          
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="twitter_url" className=" form-control-label">Enter Twitter URL</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="url" id="twitter_url" name="twitter_url" placeholder="Enter Last Name" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="rsvp_needed" className=" form-control-label">RSVP Needed ?</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="rsvp_needed" id="rsvp_needed" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        
                                        <br />

                                        <div className="row form-group">
                                            <FileUpload
                                                accept=".jpg,.png,.jpeg,.pdf,.doc,.docx"
                                                label="Upload Document (max 50)"
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

export default AddEvent;



