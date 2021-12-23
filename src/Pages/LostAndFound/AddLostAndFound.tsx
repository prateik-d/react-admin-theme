import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddLostAndFound = () => 
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
                    <Breadcrumbs breadcrumbs='Dashboard/Lost And Found/Add' title='Lost And Found' />
                    <div className='col-sm-12 form-div'>
                        
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-user"></i> Add Lost And Found</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="item" className=" form-control-label">Item</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="item" name="item" placeholder="Enter Item" className="form-control" />
                                            </div>
                                        </div>
                                       
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="category" className=" form-control-label">Category</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="category" id="category" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="Pet">Pet</option>
                                                    <option value="Bike">Bike</option>
                                                    <option value="Mobile">Mobile</option>
                                                    <option value="Watch">Watch</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="type" className=" form-control-label">Type</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="type" id="type" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="Lost">Lost</option>
                                                    <option value="Found">Found</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="description" className=" form-control-label">Description</label></div>
                                            <div className="col-12 col-md-9"><textarea name="description" id="description" rows={5} placeholder="Description" className="form-control" ></textarea></div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="date_lost" className=" form-control-label">Date Lost</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="date" id="date_lost" name="date_lost" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="date_found" className=" form-control-label">Date Found</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="date" id="date_found" name="date_found" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="creator" className=" form-control-label">Creator</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="creator" name="creator" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="claimed_by" className=" form-control-label">Claimed By</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="claimed_by" name="claimed_by" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-6">
                                                <div className="col col-md-4"><label htmlFor="status" className=" form-control-label">Status</label></div>
                                                <div className="col-12 col-md-8">
                                                    <select name="status" id="status" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="Claimed">Claimed</option>
                                                        <option value="Unclaimed">Unclaimed</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col col-md-6">
                                                <div className="col col-md-6"><label htmlFor="date_claimed" className=" form-control-label">Date Claimed</label></div>
                                                <div className="col-12 col-md-6">
                                                    <input type="date" id="date_claimed" name="date_claimed" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-6"><label htmlFor="location" className=" form-control-label">Location</label></div>
                                            <div className="col-12 col-md-6">
                                                <input type="text" id="location" name="location" placeholder='Enter Location' className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <br />

                                        
                                        
                                        <div className="row form-group">
                                            <FileUpload
                                                accept=".jpg,.png,.jpeg,.pdf,.doc,.docx"
                                                label="Upload Photos (max 3)"
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

export default AddLostAndFound;



