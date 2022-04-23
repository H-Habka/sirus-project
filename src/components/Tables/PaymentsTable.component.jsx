import React, { Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';

const PaymentsTable = () => {
    const config = {
        page_size: 10,
        length_menu: [10, 20, 50],
        // button: {
        //     excel: true,
        //     print: true,
        //     extra: true,
        // }
    };
    const records = [
        {
            "id": "1",
            "date": "January 22, 2022",
            "invoice": "257E4725-0001",
            "amount": "$0.00",
            "status":"paid"
        },
      ];
const columns = [
    {
        key: "date",
        text: "Date",
        className: "date fw-bold",
        align: "left",
    },
    {
        key: "invoice",
        text: "Invoice",
        className: "invoice fw-bold",
    },
    {
        key: "amount",
        text: "Amount",
        className: "amount fw-bold",
        align: "left",
    },
    {
        key: "status",
        text: "Status",
        className: "status fw-bold",
        align: "left"
    },
];


const viewInvoice = (record) => {
    console.log("view Invoice", record);
}

return (
    <>

        <div className="border rounded bg-white p-5">
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

export default PaymentsTable;
