import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddPet = () => 
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
                                    <strong><i className="fa fa-paw"></i> Add Pet</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="pet_name" className=" form-control-label">Enter Pet Name</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="pet_name" name="pet_name" placeholder="Enter Pet Name" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="type" className=" form-control-label">Type</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="type" id="type" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="Dog">Dog</option>
                                                    <option value="Cat">Cat</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="breed" className=" form-control-label">Breed</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="breed" id="breed" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="owner" className=" form-control-label">Owner</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="owner" name="owner" placeholder="Enter Last Name" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="gender" className=" form-control-label">Gender</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="gender" id="gender" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>

                                         
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="dob" className=" form-control-label">Date Of Birth</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="date" id="dob" name="dob" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="description" className=" form-control-label">Description</label></div>
                                            <div className="col-12 col-md-9"><textarea name="description" id="description" rows={5} placeholder="Description" className="form-control" ></textarea></div>
                                        </div>
                                        
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="allergies" className=" form-control-label">Any Allergies ?</label></div>
                                            <div className="col-12 col-md-9"><textarea name="allergies" id="allergies" rows={3} placeholder="Description" className="form-control" ></textarea></div>
                                        </div>
                                        
                                        
                                        
                                       
                                        <br />

                                        <div className="row form-group">
                                            <FileUpload
                                                accept=".jpg,.png,.jpeg,.pdf,.doc,.docx"
                                                label="Upload Pet Photos (max 5)"
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

export default AddPet;