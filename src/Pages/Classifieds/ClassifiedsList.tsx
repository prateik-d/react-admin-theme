import React, {  } from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Header from '../../Component/Header/Header';
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import classifields from '../../data/classifields';
import { Button } from 'react-bootstrap';


const ClassifiedsList = () => 
{

    const data = classifields;
    
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
            name: 'Item',
            selector: (row: any) => row.item,
            sortable: true,
        },
        {
            name: 'Category',
            selector: (row: any) => row.category,
            sortable: true,
        },
        {
            name: 'Posted By',
            selector: (row: any) => row.posted_by,
            sortable: true,
        },
        {
            name: 'Address',
            selector: (row: any) => row.address,
            sortable: true,
        },
        {
            name: 'Price',
            selector: (row: any) => row.price,
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
                <Breadcrumbs breadcrumbs='Dashboard/Classifields/List' title='Classifields' />
                <div className='col-sm-12 form-div'>
                        
                        {/* <div className="col-lg-2"></div> */}
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-shopping-bag"></i> Search Classifields</strong> 
                                </div>
                                <div className="card-body card-block">
                                    
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="item" className=" form-control-label">Item</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="item" name="item" placeholder="Enter Item" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="category" className=" form-control-label">Category</label></div>
                                                <div className="col-12 col-md-9">
                                                    <select name="category" id="category" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="Active">Active</option>
                                                        <option value="Inactive">Inactive</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div className="row form-group">

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="posted_by" className=" form-control-label">Posted By</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="posted_by" name="posted_by" placeholder="Posted By" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="status" className=" form-control-label">Status</label></div>
                                                <div className="col-12 col-md-9">
                                                    <select name="status" id="status" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="Sold">Sold</option>
                                                        <option value="Open">Open</option>
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

export default ClassifiedsList;
