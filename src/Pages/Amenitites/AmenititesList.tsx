import React from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Header from '../../Component/Header/Header';
import Breadcrumbs from '../../Component/Breacrumbs/Breadcrumbs';
import amenities from '../../data/amenities';
import { Button } from 'react-bootstrap';


const AmenititesList = () => 
{
    const data = amenities;
    
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
            name: 'Title',
            selector: (row: any) => row.title,
            sortable: true,
        },
        {
            name: 'Image',
            cell: (row: any) => (
                <>
                    <img src={row.img} alt={row.title} />
                </>
            ),
        },
        {
            name: 'Hours of Operation',
            selector: (row: any) => row.hours_of_operation,
            sortable: true,
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
                <Breadcrumbs breadcrumbs='Dashboard/Amenities/List' title='Amenities' />
                <div className='col-sm-12 form-div'>
                        
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong><i className="fa fa-shield"></i> Search Amenities</strong> 
                                </div>
                                <div className="card-body card-block">
                                    
                                    <form action="" method="post"  className="form-horizontal">
                                        
                                        <div className="row form-group">

                                            <div className="col col-md-6">    
                                                <div className="col col-md-3"><label htmlFor="title" className=" form-control-label">Title</label></div>
                                                <div className="col-12 col-md-9">
                                                    <input type="text" id="title" name="title" placeholder="Enter Title" className="form-control" />
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div className="footer text-left">
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

export default AmenititesList;
