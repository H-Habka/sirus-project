import React ,{Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
 import { AiFillEdit , AiOutlineDelete} from 'react-icons/ai'
const HistoryTable = () => {
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
          "meeting": "NJ 1342331",
          "date": "January 22, 2022",
          "time": "From 11:00 AM To 12:00 PM",
          "mentor": "Rami Haddad",
          "subject": "SEO",
          "type": "Zoom",
          "status": "Finished"
        },
      ];
    const columns= [
        {
            key: "meeting",
            text: "Meeting",
            className: "meeting fw-bold",
            align: "left",
        },
        {
            key: "date",
            text: "Date",
            className: "date  fw-bold",
            align: "left",
        },
        {
            key: "time",
            text: "Time",
            className: "time fw-bold",
        },
        {
            key: "mentor",
            text: "Mentor",
            className: "mentor fw-bold",
            align: "left",
        },
        {
            key: "subject",
            text: "Subject",
            className: "subject fw-bold",
            align: "left"
        },
        {
            key: "type",
            text: "Type",
            className: "type fw-bold",
            align: "left"
        },
        {
            key: "status",
            text: "Status",
            className: "status success fw-bold",
            align: "left"
        },
        {
            key: "buttons",
            text: " ",
            className: "buttons",
            width: 100,
            align: "left",
            sortable: false,
            cell: record => { 
                return (
                    <Fragment>
                        <button
                            className="btn btn-info btn-sm px-3 d-block mx-auto"
                            // onClick={() => editRecord(record)}
                            style={{ borderRadius: '0'}}>
                            Review
                        </button>
                        {/* <button 
                            className="btn btn-danger btn-sm" 
                            onClick={() => deleteRecord(record)}>
                            <AiOutlineDelete></AiOutlineDelete>
                        </button> */}
                    </Fragment>
                );
            }
        }
    ];

    const extraButtons =[
        {
            className:"btn btn-primary buttons-pdf",
            title:"Export TEst",
            children:[
                <span>
                <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                </span>
            ],
            onClick:(event)=>{
                console.log(event);
            },
        },
        {
            className:"btn btn-primary buttons-pdf",
            title:"Export TEst",
            children:[
                <span>
                <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                </span>
            ],
            onClick:(event)=>{
                console.log(event);
            },
            onDoubleClick:(event)=>{
                console.log("doubleClick")
            }
        },
    ]

    const editRecord = (record) => {
        console.log("Edit Record", record);
    }

    const deleteRecord = (record) => {
        console.log("Delete Record", record);
    }
    return (
        <>
          
          <div className="bg-white p-lg-5 p-3">
                <ReactDatatable
                    config={config}
                    records={records}
                    columns={columns}
                    tHeadClassName="text-muted fw-bold"
                    // extraButtons={extraButtons}
                />
            </div>
        </>
    );
};

export default HistoryTable;
