import React, { useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

import { Button } from 'react-bootstrap';
import FileUpload from '../../Component/FileUpload/FileUpload';


const AddVoting = () => 
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
                                    <strong><i className="fa fa-user"></i> Add Voting</strong> 
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">
                                            
                                            <div className="col col-md-4"><label htmlFor="title" className=" form-control-label">Select Voting Title</label></div>
                                            <div className="col col-md-8">
                                                <div className="col-md-1">
                                                    <div className="radio">
                                                        <label htmlFor="radio1" className="form-check-label ">
                                                            <input type="radio" id="radio1" name="title_radios" value="option1" className="form-check-input" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="">
                                                        <select name="status" id="status" className="form-control">
                                                            <option value="0">Please select</option>
                                                            <option value="Board Of Director">Board Of Director</option>
                                                            <option value="Treassurer">Treassurer</option>
                                                            <option value="Chairman">Chairman</option>
                                                            <option value="Management Committee">Management Committee</option>
                                                            <option value="Voilations Committee">Voilations Committee</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group"> 
                                                <div className="col col-md-4"><label htmlFor="new_title" className=" form-control-label">Or Add New Voting Title</label></div>
                                                <div className="col-12 col-md-6">
                                                    <div className="col-md-1">
                                                        <div className="radio">
                                                            <label htmlFor="radio1" className="form-check-label ">
                                                                <input type="radio" id="new_title_radio" name="title_radios" value="1" className="form-check-input" />
                                                                
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <input type="text" id="new_title" name="new_title" placeholder="Enter New Title" className="form-control" />
                                                    </div>
                                                </div>
                                        </div>
                                        
                                         
                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="description" className=" form-control-label">Description</label></div>
                                            <div className="col-12 col-md-9"><textarea name="description" id="description" rows={5} placeholder="Description" className="form-control" ></textarea></div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="start_date" className=" form-control-label">Start Date</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="date" id="start_date" name="start_date" placeholder="Enter Last Name" className="form-control" />
                                            </div>
                                        </div>
                                        

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="end_date" className=" form-control-label">End Date</label></div>
                                            <div className="col-12 col-md-9">
                                                <input type="date" id="end_date" name="end_date" placeholder="Enter Last Name" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <br />
                                        <strong className='pull-left'>Choose Option or Nominees</strong>
                                        <br />
                                        <br />
                                        
                                        <div className="row form-group">
                                            <div className="col-md-1">
                                                <div className="radio">
                                                    <label htmlFor="radio1" className="form-check-label ">
                                                        <input type="radio" id="choose_title_option_radios" name="choose_title__radios" value="option1" className="form-check-input" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col col-md-2"><label className=" form-control-label">Options</label></div>
                                              <div className="col col-md-6">
                                                  
                                                  <div className="col-md-8">
                                                    <input type="text" id="options" name="options" placeholder="Enter Options" className="form-control" />
                                                  </div>
                                                  <div className="col-md-4">
                                                        <Button type="submit" className="btn btn-secondary btn-sm">
                                                            + Add
                                                        </Button>
                                                  </div>
                                              </div>
                                        </div>
                                    
                                        
                                        <div className="row form-group">
                                            <div className="col-md-1">
                                                <div className="radio">
                                                    <label htmlFor="radio1" className="form-check-label ">
                                                        <input type="radio" id="choose_title_nominees_radios" name="choose_title__radios" value="option1" className="form-check-input" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col col-md-2"><label className=" form-control-label">Select Nominees</label></div>
                                              <div className="col col-md-9">
                                                  
                                                    <div className="col-md-5">
                                                        <input type="text" id="options" name="options" placeholder="Enter Options" className="form-control" />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="col-md-12">
                                                            <span className='name_nominees'>Sachin Deshpande</span>
                                                            <Button className='btn-close-white'><u>View</u></Button>
                                                            <Button className='btn-close'></Button>
                                                        </div>
                                                        
                                                        <div className="col-md-12">
                                                            <span className='name_nominees'>Aparna Deshpande</span>
                                                            <Button className='btn-close-white'><u>View</u></Button>
                                                            <Button className='btn-close'></Button>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                        </div>
                                    
                                       

                                        <div className="row form-group">
                                            <div className="col col-md-3"><label htmlFor="status" className=" form-control-label">Status</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="status" id="status" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
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

export default AddVoting;