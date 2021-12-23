import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddVehicle = () => 
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
                    <Breadcrumbs breadcrumbs='Dashboard/Vehicle/Add' title='Vehicle' />
                    <div className='col-sm-12 form-div'>
                        
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-user"></i> Add Vehicle</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="owned_by" className=" form-control-label">Owned By</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="owned_by" name="owned_by" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="make" className=" form-control-label">Make</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="make" name="make" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="model" className=" form-control-label">Model</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="model" name="model" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="color" className=" form-control-label">Color</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="color" name="color" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="license_no" className=" form-control-label">License Plate No</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="license_no" name="license_no" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="toll_tag_type" className=" form-control-label">Toll Tag Type</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="toll_tag_type" id="toll_tag_type" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="State Issued">State Issued</option>
                                                    <option value="Internal Issued">Internal Issued</option>
                                                </select>
                                            </div>
                                        </div>
                                                                                
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="toll_tag_no" className=" form-control-label">Toll Tag No</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="toll_tag_no" name="toll_tag_no" className="form-control" />
                                            </div>
                                        </div>
                                                                                
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="need_stickers" className=" form-control-label">Need Stickers</label></div>
                                            <div className="col-12 col-md-9">
                                                <div className="checkbox">
                                                    <label htmlFor="need_stickers" className="form-check-label ">
                                                        <input type="checkbox" id="need_stickers" name="need_stickers" value="option1" className="form-check-input" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="need_access_toll_tags" className=" form-control-label">Need Access toll tags</label></div>
                                            <div className="col-12 col-md-9">
                                                <div className="checkbox">
                                                    <label htmlFor="checkbox1" className="form-check-label ">
                                                        <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" className="form-check-input" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                                                                
                                        <br />
                                        <strong className='pull-left'>Select Document Type</strong>
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

export default AddVehicle;