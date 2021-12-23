import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddReservations = () => 
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
                    <Breadcrumbs breadcrumbs='Dashboard/Reservation/Add' title='Reservation' />
                    <div className='col-sm-12 form-div'>
                        
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-file-text-o"></i> Add Reservation</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="amenities" className=" form-control-label">Enter Amenities</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="amenities" id="amenities" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="purpose" className=" form-control-label">Purpose</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="purpose" name="purpose" placeholder="Enter Purpose" className="form-control" />
                                            </div>
                                        </div>
                                                                                
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="booked_by" className=" form-control-label">Booked By</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="text" id="booked_by" name="booked_by" placeholder="Enter Booked By" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="description" className=" form-control-label">Description</label></div>
                                            <div className="col-12 col-md-9"><textarea name="description" id="description" rows={5} placeholder="Description" className="form-control" ></textarea></div>
                                        </div>   

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="availablity_calendar" className=" form-control-label">Availability Calendar</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="date" id="availablity_calendar" name="availablity_calendar" className="form-control" />
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
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="payment_status" className=" form-control-label">Payment Status</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="payment_status" id="payment_status" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="Done">Done</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Cancel">Cancel</option>
                                                </select>
                                            </div>
                                        </div>                                        
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="time_slot" className=" form-control-label">Time Slots neede for</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="time_slot" id="time_slot" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="Paypal">Paypal</option>
                                                    <option value="UPA">UPA</option>
                                                    <option value="Card">Card</option>
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

export default AddReservations;