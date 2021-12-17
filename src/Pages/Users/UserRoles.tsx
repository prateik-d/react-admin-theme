import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

const UserRoles = () => 
{
    const [roles, setRoles] = useState([]);

    const [isAllChecked, setIsAllChecked] = useState(false);
    

    const handleAllChecked = (e: any) => 
    {
        const checked = e.target.checked;
        const class_name = e.target.className;
        const id_name = e.target.id;

        var class_checkbox = document.getElementsByClassName(class_name);  
        var checkboxes = document.getElementsByName(id_name) ;  

        console.log(checkboxes);
    
        
        if(checked)
        {
            setIsAllChecked(true);
            
            // for(var i in checkboxes)
            // {
                //     if(checkboxes[i].checked == false)
                //     {
                    //         checkboxes[i].checked = true;
                    //     }
                    // }
                    
                    // Array.from(document.querySelectorAll("input[className="+class_name+"]"))
                    // .forEach((checkbox) => {
                        //     document.getElementsByClassName(checkbox.id).checked = true;
                        // });
        }
        else
        {
            setIsAllChecked(false);
        }
                    
        // console.log(e.target.type);
    }
    
    const handleChecked = (e: any) =>
    {
        const {name, checked} = e.target;



    }

    return (
        <>
            <Sidebar />
            
            <div id="right-panel" className="right-panel">
                
                <Header />
                <Breadcrumbs breadcrumbs='Dashboard/Users' title='Users' />
                <div className='col-sm-12 form-div'>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <strong><i className="fa fa-user"></i> User Roles</strong> 
                            </div>
                            <div className="card-body card-block">
                                <form action="" method="post"  className="form-horizontal">
                                        
                                    <div className="row form-group">
                                        <div className="col col-md-12">    
                                            <div className="col col-md-3"><label htmlFor="user_type" className=" form-control-label">Select User Type</label></div>
                                            <div className="col-12 col-md-9">
                                                <select name="user_type" id="user_type" className="form-control">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row form-group">
                                        <div className="col col-md-12">    
                                            
                                            <div className="checkbox">
                                                <label htmlFor="checkbox1" className="form-check-label ">
                                                    <input 
                                                        type="checkbox" 
                                                        id="checkbox1" 
                                                        name="checkbox1" 
                                                        value="option1" 
                                                        className="form-check-input" 
                                                        onChange={ handleAllChecked }
                                                    /> Option 1
                                                </label>
                                            </div>
                                            
                                            <div className="col-md-6">    
                                                <div className="form-check">
                                                    <div className="checkbox">
                                                        <label htmlFor="checkbox1_1" className="form-check-label ">
                                                            <input 
                                                                    type="checkbox" 
                                                                    id="checkbox1_1" 
                                                                    name="checkbox1[]" 
                                                                    value="option1.1" 
                                                                    className="form-check-input checkbox1" 
                                                                    checked={ isAllChecked } //{ isAllChecked || $value }
                                                                    onChange={ handleChecked }
                                                                    />Option 1.1
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label htmlFor="checkbox1_2" className="form-check-label ">
                                                            <input type="checkbox" id="checkbox1_2" name="checkbox1[]" value="option1.2" className="form-check-input checkbox1" /> Option 1.2
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label htmlFor="checkbox1_3" className="form-check-label ">
                                                            <input type="checkbox" id="checkbox1_3" name="checkbox1[]" value="option1.3" className="form-check-input checkbox1" /> Option 1.3
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserRoles;
