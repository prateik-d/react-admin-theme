import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';

const UserRoles = () => 
{
    const [roles, setRoles] = useState([]);

    const [isAllChecked1, setIsAllChecked1] = useState(false);
    const [isAllChecked2, setIsAllChecked2] = useState(false);
    const [isAllChecked3, setIsAllChecked3] = useState(false);
    const [isAllChecked4, setIsAllChecked4] = useState(false);
    const [isAllChecked5, setIsAllChecked5] = useState(false);
    const [isAllChecked6, setIsAllChecked6] = useState(false);
    

    const handleAllChecked1 = (e: any) => 
    {
        const checked = e.target.checked;
                
        if(checked)
        {
            setIsAllChecked1(true);
        }
        else
        {
            setIsAllChecked1(false);
        }
    }
    

    const handleAllChecked2 = (e: any) => 
    {
        const checked = e.target.checked;

        if(checked)
        {
            setIsAllChecked2(true);
        }
        else
        {
            setIsAllChecked2(false);
        }
    }
    

    const handleAllChecked3 = (e: any) => 
    {
        const checked = e.target.checked;

        if(checked)
        {
            setIsAllChecked3(true);
        }
        else
        {
            setIsAllChecked3(false);
        }
    }

    const handleAllChecked4 = (e: any) => 
    {
        const checked = e.target.checked;
                
        if(checked)
        {
            setIsAllChecked4(true);
        }
        else
        {
            setIsAllChecked4(false);
        }
    }
    

    const handleAllChecked5 = (e: any) => 
    {
        const checked = e.target.checked;

        if(checked)
        {
            setIsAllChecked5(true);
        }
        else
        {
            setIsAllChecked5(false);
        }
    }
    

    const handleAllChecked6 = (e: any) => 
    {
        const checked = e.target.checked;

        if(checked)
        {
            setIsAllChecked6(true);
        }
        else
        {
            setIsAllChecked6(false);
        }
    }
    
    const handleChecked = (e: any) =>
    {
        const {name, checked} = e.target;
    }
    
    const handleChecked1 = (e: any) =>
    {
        const {name, checked} = e.target;
    }
    
    const handleChecked2 = (e: any) =>
    {
        const {name, checked} = e.target;
    }
    
    const handleChecked3 = (e: any) =>
    {
        const {name, checked} = e.target;
    }
    
    const handleChecked4 = (e: any) =>
    {
        const {name, checked} = e.target;
    }
    
    const handleChecked5 = (e: any) =>
    {
        const {name, checked} = e.target;
    }
    
    const handleChecked6 = (e: any) =>
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
                                            <div className="col col-md-4">    
                                                
                                                <div className="checkbox">
                                                    <label htmlFor="checkbox1" className="form-check-label ">
                                                        <input 
                                                            type="checkbox" 
                                                            id="checkbox1" 
                                                            name="checkbox1" 
                                                            value="option1" 
                                                            className="form-check-input" 
                                                            onChange={ handleAllChecked1 }
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
                                                                        checked={ isAllChecked1 } //{ isAllChecked || $value }
                                                                        onChange={ handleChecked1 }
                                                                        />Option 1.1
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox1_2" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox1_2" 
                                                                    name="checkbox1[]" 
                                                                    value="option1.2" 
                                                                    className="form-check-input checkbox1"
                                                                    checked={ isAllChecked1 } //{ isAllChecked || $value } 
                                                                    onChange={ handleAllChecked1 }
                                                                    /> Option 1.2
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox1_3" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox1_3" 
                                                                    name="checkbox1[]" 
                                                                    value="option1.3" 
                                                                    className="form-check-input checkbox1" 
                                                                    checked={ isAllChecked1 } //{ isAllChecked || $value }
                                                                    onChange={ handleAllChecked1 }
                                                                    /> Option 1.3
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-md-4">    
                                                
                                                <div className="checkbox">
                                                    <label htmlFor="checkbox2" className="form-check-label ">
                                                        <input 
                                                            type="checkbox" 
                                                            id="checkbox2" 
                                                            name="checkbox2" 
                                                            value="option2" 
                                                            className="form-check-input" 
                                                            onChange={ handleAllChecked2 }
                                                        /> Option 2
                                                    </label>
                                                </div>
                                                
                                                <div className="col-md-6">    
                                                    <div className="form-check">
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox2_1" className="form-check-label ">
                                                                <input 
                                                                        type="checkbox" 
                                                                        id="checkbox2_1" 
                                                                        name="checkbox2[]" 
                                                                        value="option2.1" 
                                                                        className="form-check-input checkbox1" 
                                                                        checked={ isAllChecked2 } //{ isAllChecked || $value }
                                                                        onChange={ handleChecked2 }
                                                                        />Option 2.1
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox2_2" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox2_2" 
                                                                    name="checkbox2[]" 
                                                                    value="option2.2" 
                                                                    className="form-check-input checkbox1"
                                                                    checked={ isAllChecked2 } //{ isAllChecked || $value } 
                                                                    onChange={ handleAllChecked2 }
                                                                    /> Option 2.2
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox2_3" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox2_3" 
                                                                    name="checkbox2[]" 
                                                                    value="option2.3" 
                                                                    className="form-check-input checkbox1" 
                                                                    checked={ isAllChecked2 } //{ isAllChecked || $value }
                                                                    onChange={ handleAllChecked2 }
                                                                    /> Option 2.3
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-md-4">    
                                                
                                                <div className="checkbox">
                                                    <label htmlFor="checkbox3" className="form-check-label ">
                                                        <input 
                                                            type="checkbox" 
                                                            id="checkbox3" 
                                                            name="checkbox3" 
                                                            value="option3" 
                                                            className="form-check-input"
                                                            onChange={ handleAllChecked3 }
                                                        /> Option 3
                                                    </label>
                                                </div>
                                                
                                                <div className="col-md-6">    
                                                    <div className="form-check">
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox3_1" className="form-check-label ">
                                                                <input 
                                                                        type="checkbox" 
                                                                        id="checkbox3_1" 
                                                                        name="checkbox3[]" 
                                                                        value="option3.1" 
                                                                        className="form-check-input checkbox1" 
                                                                        checked={ isAllChecked3 } //{ isAllChecked || $value }
                                                                        onChange={ handleChecked3 }
                                                                        />Option 3.1
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox3_2" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox3_2" 
                                                                    name="checkbox3[]" 
                                                                    value="option3.2" 
                                                                    className="form-check-input checkbox1"
                                                                    checked={ isAllChecked3 } //{ isAllChecked || $value } 
                                                                    onChange={ handleChecked3 }
                                                                    /> Option 3.2
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox3_3" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox3_3" 
                                                                    name="checkbox3[]" 
                                                                    value="option3.3" 
                                                                    className="form-check-input checkbox1" 
                                                                    checked={ isAllChecked3 } //{ isAllChecked || $value }
                                                                    onChange={ handleChecked3 }
                                                                    /> Option 3.3
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row form-group">
                                        <div className="col col-md-12">    
                                            <div className="col col-md-4">    
                                                
                                                <div className="checkbox">
                                                    <label htmlFor="checkbox4" className="form-check-label ">
                                                        <input 
                                                            type="checkbox" 
                                                            id="checkbox4" 
                                                            name="checkbox4" 
                                                            value="option4" 
                                                            className="form-check-input" 
                                                            onChange={ handleAllChecked4 }
                                                        /> Option 4
                                                    </label>
                                                </div>
                                                
                                                <div className="col-md-6">    
                                                    <div className="form-check">
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox4_1" className="form-check-label ">
                                                                <input 
                                                                        type="checkbox" 
                                                                        id="checkbox4_1" 
                                                                        name="checkbox4[]" 
                                                                        value="option4.1" 
                                                                        className="form-check-input checkbox1" 
                                                                        checked={ isAllChecked4 } //{ isAllChecked || $value }
                                                                        onChange={ handleChecked4 }
                                                                        />Option 4.1
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox4_2" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox4_2" 
                                                                    name="checkbox4[]" 
                                                                    value="option4.2" 
                                                                    className="form-check-input checkbox1"
                                                                    checked={ isAllChecked4 } //{ isAllChecked || $value } 
                                                                    onChange={ handleAllChecked4 }
                                                                    /> Option 4.2
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox1_3" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox4_3" 
                                                                    name="checkbox4[]" 
                                                                    value="option4.3" 
                                                                    className="form-check-input checkbox1" 
                                                                    checked={ isAllChecked4 } //{ isAllChecked || $value }
                                                                    onChange={ handleAllChecked4 }
                                                                    /> Option 4.3
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-md-4">    
                                                
                                                <div className="checkbox">
                                                    <label htmlFor="checkbox5" className="form-check-label ">
                                                        <input 
                                                            type="checkbox" 
                                                            id="checkbox5" 
                                                            name="checkbox5" 
                                                            value="option5" 
                                                            className="form-check-input" 
                                                            onChange={ handleAllChecked5 }
                                                        /> Option 5
                                                    </label>
                                                </div>
                                                
                                                <div className="col-md-6">    
                                                    <div className="form-check">
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox5_1" className="form-check-label ">
                                                                <input 
                                                                        type="checkbox" 
                                                                        id="checkbox5_1" 
                                                                        name="checkbox5[]" 
                                                                        value="option5.1" 
                                                                        className="form-check-input checkbox1" 
                                                                        checked={ isAllChecked5 } //{ isAllChecked || $value }
                                                                        onChange={ handleChecked5 }
                                                                        />Option 5.1
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox5_2" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox5_2" 
                                                                    name="checkbox5[]" 
                                                                    value="option5.2" 
                                                                    className="form-check-input checkbox1"
                                                                    checked={ isAllChecked5 } //{ isAllChecked || $value } 
                                                                    onChange={ handleAllChecked5 }
                                                                    /> Option 5.2
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox5_3" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox5_3" 
                                                                    name="checkbox5[]" 
                                                                    value="option5.3" 
                                                                    className="form-check-input checkbox1" 
                                                                    checked={ isAllChecked5 } //{ isAllChecked || $value }
                                                                    onChange={ handleAllChecked5 }
                                                                    /> Option 5.3
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-md-4">    
                                                
                                                <div className="checkbox">
                                                    <label htmlFor="checkbox6" className="form-check-label ">
                                                        <input 
                                                            type="checkbox" 
                                                            id="checkbox6" 
                                                            name="checkbox6" 
                                                            value="option6" 
                                                            className="form-check-input"
                                                            onChange={ handleAllChecked6 }
                                                        /> Option 6
                                                    </label>
                                                </div>
                                                
                                                <div className="col-md-6">    
                                                    <div className="form-check">
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox6_1" className="form-check-label ">
                                                                <input 
                                                                        type="checkbox" 
                                                                        id="checkbox6_1" 
                                                                        name="checkbox6[]" 
                                                                        value="option6.1" 
                                                                        className="form-check-input checkbox1" 
                                                                        checked={ isAllChecked6 } //{ isAllChecked || $value }
                                                                        onChange={ handleChecked6 }
                                                                        />Option 6.1
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox6_2" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox6_2" 
                                                                    name="checkbox6[]" 
                                                                    value="option6.2" 
                                                                    className="form-check-input checkbox1"
                                                                    checked={ isAllChecked6 } //{ isAllChecked || $value } 
                                                                    onChange={ handleChecked6 }
                                                                    /> Option 6.2
                                                            </label>
                                                        </div>
                                                        <div className="checkbox">
                                                            <label htmlFor="checkbox6_3" className="form-check-label ">
                                                                <input 
                                                                    type="checkbox" 
                                                                    id="checkbox6_3" 
                                                                    name="checkbox6[]" 
                                                                    value="option6.3" 
                                                                    className="form-check-input checkbox1" 
                                                                    checked={ isAllChecked6 } //{ isAllChecked || $value }
                                                                    onChange={ handleChecked6 }
                                                                    /> Option 6.3
                                                            </label>
                                                        </div>
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
