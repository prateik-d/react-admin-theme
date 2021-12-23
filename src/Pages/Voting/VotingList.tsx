import React, {  } from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Header from '../../Component/Header/Header';
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import voting from '../../data/voting';
import { Button } from 'react-bootstrap';


const VotingList = () => 
{
    const data = voting;
    
    const handleViewButtonClick = (id: number) =>
    {
        console.log(id);
    }
    
    const handleArchiveButtonClick = (id: number) =>
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
            name: 'Title',
            selector: (row: any) => row.title,
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row: any) => row.status,
            sortable: true,
        },
        {
            name:"Progress",
            cell: (row: any) => (
                <>
                    {row.progress < 100 &&
                        <progress id="file" value={row.progress} max="100"></progress>
                    }
                </>
            ),
        },
        {
            name: 'From Date',
            selector: (row: any) => row.from_date,
            sortable: true,
        },
        {
            name: 'To Date',
            selector: (row: any) => row.to_date,
            sortable: true,
        },
        {
            name:"Action",
            cell: (row: any) => (
                <>
                    <span onClick={() => handleViewButtonClick(row.id)} className='action_icon'>
                        <i className="fa fa-eye fa-2x" title='View'></i>
                    </span>
                    {row.progress === 100 &&
                        <>
                            <span onClick={() => handleArchiveButtonClick(row.id)} className='action_icon'>
                                <i className="fa fa-archive fa-2x" title='Archive'></i>
                            </span>{'     '}
                        </>
                    }
                    {row.progress < 100 &&
                        <>
                            <span onClick={() => handleEditButtonClick(row.id)} className='action_icon'>
                                <i className="fa fa-edit fa-2x" title='Edit'></i>
                            </span>
                            <span onClick={() => handleDeleteButtonClick(row.id)} className='action_icon'>
                                <i className="fa fa-trash fa-2x" title='Delete'></i>
                            </span>{'     '}
                        </>
                    }
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
                                    <strong><i className="fa fa-user"></i> Search Voting</strong> 
                                </div>
                                <div className="card-body card-block">
                                    
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="title" className=" form-control-label">Title</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="title" name="title" placeholder="Enter Name" className="form-control" /><small className="form-text text-muted">This is a help text</small>
                                                </div>
                                            </div>

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="year" className=" form-control-label">Year</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="date" id="year" name="year" placeholder="Enter Year" className="form-control" /><small className="form-text text-muted">This is a help text</small>
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div className="row form-group">
                                            
                                            <div className="col col-md-6"> 
                                                <div className="col col-md-3"><label htmlFor="name" className=" form-control-label">Name </label></div>
                                                <div className="col-12 col-md-9"><input type="text" id="name" name="name" placeholder="Enter Name" className="form-control" /><small className="help-block form-text">Please enter your email</small></div>
                                            </div>
                                            
                                            

                                            <div className="col col-md-6"> 
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

export default VotingList;