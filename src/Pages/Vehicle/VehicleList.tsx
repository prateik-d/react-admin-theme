import React, {  } from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Header from '../../Component/Header/Header';
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import vehicle from '../../data/vehicle';
import { Button, Row } from 'react-bootstrap';


const VehicleList = () => 
{
    const data = vehicle;
    
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
            name: 'Make/Model/Color',
            selector: (row: any) => row.make + ' ' + row.model + ' ' + row.color,
            sortable: true,
            width: '20%',
        },
        {
            name: 'Owner',
            selector: (row: any) => row.owner,
            sortable: true,
        },
        {
            name: 'Address',
            selector: (row: any) => row.address,
            sortable: true,
        },
        {
            name: 'License No.',
            selector: (row: any) => row.license_no,
            sortable: true,
        },
        {
            name: 'Type',
            selector: (row: any) => row.type,
            sortable: true,
        },
        {
            name: 'Tag No.',
            selector: (row: any) => row.tag_no,
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row: any) => row.status,
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
                <Breadcrumbs breadcrumbs='Dashboard/Vehicle/List' title='Vehicle' />
                <div className='col-sm-12 form-div'>
                        
                        {/* <div className="col-lg-2"></div> */}
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-car"></i> Search Vehicle</strong> 
                                </div>
                                <div className="card-body card-block">
                                    
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="make" className=" form-control-label">Make</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="make" name="make" placeholder="Enter Make Name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="model" className=" form-control-label">Model</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="model" name="model" placeholder="Enter Model Name" className="form-control" />
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="color" className=" form-control-label">Color</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="color" name="color" placeholder="Enter Color Name" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="owner" className=" form-control-label">Owner</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="owner" name="owner" placeholder="Enter Owner Name" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row form-group">

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="tag_no" className=" form-control-label">Tag No</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="tag_no" name="tag_no" placeholder="Enter Tag No" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="status" className=" form-control-label">Status</label></div>
                                                <div className="col-12 col-md-9">
                                                    <select name="status" id="status" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="Pending">Pending</option>
                                                        <option value="Confirmed">Confirmed</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div className="row form-group">
                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="tag_type" className=" form-control-label">Tag Type</label></div>
                                                <div className="col-12 col-md-9">
                                                    <select name="tag_type" id="tag_type" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="1">Option #1</option>
                                                        <option value="2">Option #2</option>
                                                        <option value="3">Option #3</option>
                                                    </select>
                                                </div>
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

export default VehicleList;
