import React from 'react';
import ReactDatatable from '@ashvin27/react-datatable';

const InboxTable = (props) => {
    const config = {
        page_size: 10,
        length_menu: [10, 20, 50],
    };
    const records = [
        {
            "id": "1",
            "subject": `C-level leaders, Olympians, medical professionals and health experts are among the latest
                        speakers to confirm for this year’s Innovation@Work Global Week 2022, taking place virtually and
                        in-person, in London.`,
            "sender": "Sally Gunnell OBE",
            "time": "4:09 PM",
            "date": "January 22, 2022",

        },
    ];
    const columns = [
        {
            key: "subject",
            text: "Subject",
            className: "subject fw-bold",
            width:'50%',
            align: "left"
        },
        {
            key: "sender",
            text: "Sender",
            className: "sender fw-bold",
            align: "left",
        },
        {
            key: "time",
            text: "Time",
            className: "time fw-bold",
        },
        {
            key: "date",
            text: "Date",
            className: "date fw-bold",
            align: "left",
        },
    ];

    return (
        <>

            <div className="bg-white p-lg-5 p-3">
                <ReactDatatable
                    config={config}
                    records={records}
                    columns={columns}
                    tHeadClassName = 'text-muted fw-bold'
                // extraButtons={extraButtons}
                />
            </div>
        </>
    );
};



export default InboxTable;
