import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddAmenitites = () => 
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
                    <Breadcrumbs breadcrumbs='Dashboard/Amenities/Add' title='Amenities' />
                    <div className='col-sm-12 form-div'>
                        
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-user"></i> Add Amenities</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="title" className=" form-control-label">Enter Title</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="title" name="title" placeholder="Enter Registration Code" className="form-control" />
                                            </div>
                                        </div>
                                         
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="description" className=" form-control-label">Description</label></div>
                                            <div className="col-12 col-md-9"><textarea name="description" id="description" rows={5} placeholder="Description" className="form-control" ></textarea></div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="booking_price" className=" form-control-label">Booking Price</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="booking_price" name="booking_price" placeholder="Enter Booking Price" className="form-control" />
                                            </div>
                                        </div>
                                        
                                                                                
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="days_available" className=" form-control-label">Days Available</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="days_available" id="days_available" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="Monday">Monday</option>
                                                    <option value="Tuesday">Tuesday</option>
                                                    <option value="Wednesday">Wednesday</option>
                                                    <option value="Thursday">Thursday</option>
                                                    <option value="Friday">Friday</option>
                                                    <option value="Saturday">Saturday</option>
                                                    <option value="Sunday">Sunday</option>
                                                </select>
                                            </div>
                                        </div>
                                                                                                                       
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="time_slot_available" className=" form-control-label">Time Slot Available</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="time_slot_available" id="time_slot_available" className="form-control" multiple={true}>
                                                    <option value="0">Please select</option>
                                                    <option value="6 AM to 7 AM">6 AM to 7 AM</option>
                                                    <option value="7 AM to 8 AM">7 AM to 8 AM</option>
                                                    <option value="8 AM to 9 AM">8 AM to 9 AM</option>
                                                    <option value="9 AM to 10 AM">9 AM to 10 AM</option>
                                                    <option value="10 AM to 11 AM">10 AM to 11 AM</option>
                                                    <option value="11 AM to 12 PM">11 AM to 12 PM</option>
                                                    <option value="12 PM to 1 PM">12 AM to 1 PM</option>
                                                    <option value="1 PM to 2 PM">1 AM to 2 PM</option>
                                                    <option value="2 PM to 3 PM">2 AM to 3 PM</option>
                                                    <option value="3 PM to 4 PM">3 AM to 4 PM</option>
                                                    <option value="4 PM to 5 PM">4 AM to 5 PM</option>
                                                    <option value="5 PM to 6 PM">5 AM to 6 PM</option>
                                                    <option value="6 PM to 7 PM">6 AM to 7 PM</option>
                                                    <option value="7 PM to 8 PM">7 AM to 8 PM</option>
                                                    <option value="8 PM to 9 PM">8 AM to 9 PM</option>
                                                    <option value="9 PM to 10 PM">9 AM to 10 PM</option>
                                                </select>
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
                                            <FileUpload
                                                accept=".jpg,.png,.jpeg,.pdf,.doc,.docx"
                                                label="Amenitites Document"
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

export default AddAmenitites;