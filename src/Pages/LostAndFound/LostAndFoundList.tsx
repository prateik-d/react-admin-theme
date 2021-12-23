import React from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Header from '../../Component/Header/Header';
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import lost_and_found from '../../data/lost_and_found';
import { Button } from 'react-bootstrap';


const LostAndFoundList = () => 
{
    const data = lost_and_found;
    
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
            name: 'Type',
            selector: (row: any) => row.type,
            sortable: true,
        },
        {
            name: 'Location',
            selector: (row: any) => row.location,
            sortable: true,
        },
        {
            name: 'Date',
            selector: (row: any) => row.date,
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row: any) => row.status,
            sortable: true,
        },
        {
            name: 'Creator',
            selector: (row: any) => row.creator,
            sortable: true,
        },
        {
            name: 'Claimed By',
            cell: (row: any) => (
                <>
                    {/* {row.claimed_by.length} */}
                    {row.claimed_by.length > 0 ? row.creator : '--' }
                </>
            )
        },
        {
            name:"Action",
            cell: (row: any) => (
                <>
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
                <Breadcrumbs breadcrumbs='Dashboard/Lost and Found/List' title='Lost and Found' />
                <div className='col-sm-12 form-div'>
                        
                        {/* <div className="col-lg-2"></div> */}
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-user"></i> Search Lost and Found</strong> 
                                </div>
                                <div className="card-body card-block">
                                    
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="item" className=" form-control-label">Item</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="item" name="item" placeholder="Enter Item" className="form-control" /><small className="form-text text-muted">This is a help text</small>
                                                </div>
                                            </div>

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="date" className=" form-control-label">Date</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="date" id="date" name="date" placeholder="Enter Phone" className="form-control" /><small className="form-text text-muted">This is a help text</small>
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div className="row form-group">
                                            
                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="creator" className=" form-control-label">Creator </label></div>
                                                <div className="col-12 col-md-9"><input type="text" id="creator" name="creator" placeholder="Enter User Details" className="form-control" /><small className="help-block form-text">User Info</small></div>
                                            </div>
                                            
                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="claimed_by" className=" form-control-label">Claimed By </label></div>
                                                <div className="col-12 col-md-9"><input type="text" id="claimed_by" name="claimed_by" placeholder="Enter User Details" className="form-control" /><small className="help-block form-text">User Info</small></div>
                                            </div>
                                            
                                            
                                        </div>
                                        
                                        <div className="row form-group">

                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="type" className=" form-control-label">Type</label></div>
                                                <div className="col-12 col-md-9">
                                                    <select name="type" id="type" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="Lost">Lost</option>
                                                        <option value="Found">Found</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="category" className=" form-control-label">Category</label></div>
                                                <div className="col-12 col-md-9">
                                                    <select name="category" id="category" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="Pet">Pet</option>
                                                        <option value="Bike">Bike</option>
                                                        <option value="Mobile">Mobile</option>
                                                        <option value="Watch">Watch</option>
                                                    </select>
                                                </div>
                                            </div>
                                        
                                            
                                        </div>

                                           
                                        <div className="row form-group">

                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="status" className=" form-control-label">Status</label></div>
                                                <div className="col-12 col-md-9">
                                                    <select name="status" id="type" className="form-control">
                                                        <option value="0">Please select</option>
                                                        <option value="Claimed">Claimed</option>
                                                        <option value="Unclaimed">Unclaimed</option>
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

export default LostAndFoundList;
