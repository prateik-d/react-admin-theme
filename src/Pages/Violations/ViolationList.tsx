import React, {  } from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Header from '../../Component/Header/Header';
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import users from '../../data/users';
import { Button } from 'react-bootstrap';


const ViolationList = () => 
{
    const data = users;
    
    const handleViewButtonClick = (id: number) =>
    {
        console.log(id);
    }
    
    const handleEditButtonClick = (id: number) =>
    {
        console.log(id);
    }

    const handleDeleteButtonClick = (id: number) =>
    {
        console.log(id);
    }

    const handleSelectChange = ({ selectedRows } : any) =>
    {
        console.log('Selected Rows: ', selectedRows);

    }

    const columns = [
        
        {
            name: '#',
            cell: (row: any, index: number) => index + 1,
            sortable: true,
            width: '5%',
        },
        {
            name: 'Full Name',
            selector: (row: any) => row.first_name + ' ' + row.last_name,
            sortable: true,
        },
        {
            name: 'Address',
            selector: (row: any) => row.address,
            sortable: true,
        },
        {
            name: 'Date',
            selector: (row: any) => row.date,
            sortable: true,
        },
        {
            name: 'Type',
            selector: (row: any) => row.type,
            sortable: true,
        },
        {
            name:"Action",
            cell: (row: any) => (
                <>
                    <span onClick={() => handleViewButtonClick(row.id)} className='action_icon'>
                        <i className="fa fa-eye fa-2x" title='View'></i>
                    </span>
                    <span onClick={() => handleEditButtonClick(row.id)} className='action_icon'>
                        <i className="fa fa-edit fa-2x" title='Edit'></i>
                    </span>
                    <span onClick={() => handleDeleteButtonClick(row.id)} className='action_icon'>
                        <i className="fa fa-trash fa-2x" title='Delete'></i>
                    </span>{'     '}
                </>
            ),
        
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },

    ];

    const customStyles = {
        headCells: {
            style: {
                backgroundColor:'#f3f7f9',
            },
        },
        cells: {
            style: {
                color:'#79838b',
            },
        },
    };


    return (
        
        <>
            <Sidebar />
            
            <div id="right-panel" className="right-panel">
                
                <Header />
                <Breadcrumbs breadcrumbs='Dashboard/Violation/List' title='Violation' />
                <div className='col-sm-12 form-div'>
                        
                        {/* <div className="col-lg-2"></div> */}
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-credit-card"></i> Search Violation</strong> 
                                </div>
                                <div className="card-body card-block">
                                    
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="name" className=" form-control-label">Name</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="name" name="name" placeholder="Enter Name" className="form-control" /><small className="form-text text-muted">This is a help text</small>
                                                </div>
                                            </div>

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="phone" className=" form-control-label">Phone</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="phone" name="phone" placeholder="Enter Phone" className="form-control" /><small className="form-text text-muted">This is a help text</small>
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div className="row form-group">
                                            
                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="email" className=" form-control-label">Email </label></div>
                                                <div className="col-12 col-md-9"><input type="email" id="email" name="email" placeholder="Enter Email" className="form-control" /><small className="help-block form-text">Please enter your email</small></div>
                                            </div>
                                            
                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="address" className=" form-control-label">Address</label></div>
                                                <div className="col-12 col-md-9"><input type="text" id="address" name="address" placeholder="Enter Address" className="form-control" /><small className="help-block form-text">Please enter your email</small></div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="row form-group">

                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="type" className=" form-control-label">Type</label></div>
                                                <div className="col-12 col-md-9">
                                                    <select name="type" id="type" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="1">Option #1</option>
                                                        <option value="2">Option #2</option>
                                                        <option value="3">Option #3</option>
                                                    </select>
                                                </div>
                                            </div>

                                            
                                            <div className="checkbox col-md-6">
                                                <label htmlFor="checkbox2" className="form-check-label ">
                                                    <input type="checkbox" id="inactive_user" name="inactive_user" value="inactive_user" className="form-check-input" /> Inactive User
                                                </label>
                                            </div>
                                        
                                            
                                        </div>
                                        
                                        <div className="footer">
                                            <Button type="submit" className="btn btn-primary btn-sm">
                                                <i className="fa fa-search"></i> Search
                                            </Button>
                                            <Button type="reset" className="btn btn-danger btn-sm">
                                                <i className="fa fa-ban"></i> Reset
                                            </Button>
                                        </div>
                                        
                                    </form>
                                  
                                </div>
                                
                            </div>
                        
                            <DataTable
                                className='table'
                                columns={columns}
                                data={data}
                                noHeader
                                defaultSortFieldId="id"
                                defaultSortAsc={false}
                                pagination
                                highlightOnHover
                                customStyles={customStyles}                
                                selectableRows
                                onSelectedRowsChange={handleSelectChange}
                            />
                        </div>
                </div>

            </div>
        </>
    )
}

export default ViolationList;
