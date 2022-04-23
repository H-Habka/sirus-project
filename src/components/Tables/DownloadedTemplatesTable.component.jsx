import {React ,Fragment }from 'react';
import ReactDatatable from '@ashvin27/react-datatable';

const DownloadedTemplatesTable = () => {
    const config={
        page_size: 10,
        length_menu: [ 10, 20, 50 ],
        // button: {
        //     excel: true,
        //     print: true,
        //     extra: true,
        // }
    };
    const records=[
        {
          "id": "1",
          "template": "NJ 1342331",
          "date": "January 22, 2022",
          "name": "From 11:00 AM To 12:00 PM",
          "size": "Rami Haddad",
          "kind": "SEO",
        },
      ];
    const columns= [
        {
            key: "template",
            text: "Template",
            className: "fw-bold",
            align: "left",
        },
        {
            key: "name",
            text: "Name",
            className: "name fw-bold",
            align: "left",
        },
        {
            key: "kind",
            text: "Kind",
            className: "kind fw-bold",
        },
        {
            key: "size",
            text: "Size",
            className: "size fw-bold",
            align: "left",
        },
        {
            key: "date",
            text: "Date",
            className: "date fw-bold",
            align: "left"
        },
        {
            key: "action",
            text: "",
            className: "action info  fw-bold",
            align: "left",            
            cell: record => { 
                return (
                    <Fragment>
                        <div className="row">
                        <button
                            className="btn col-md-5 mx-2 w-75 rounded btn-success btn-sm px-3 d-block mx-auto"
                            // onClick={() => editRecord(record)}
                            style={{ borderRadius: '0'}}>
                            Download
                        </button>

                        </div>
                    </Fragment>
                );
            }
        }
    ];
    return (
        <>
          
          <div className="bg-white p-lg-5 p-3">
                <ReactDatatable
                    config={config}
                    records={records}
                    columns={columns}
                    dynamic={true}
                    tHeadClassName="text-muted fw-bold"
                    // extraButtons={extraButtons}
                />
            </div>
        </>
    );
};


export default DownloadedTemplatesTable;
