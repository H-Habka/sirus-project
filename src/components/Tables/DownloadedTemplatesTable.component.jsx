import { React, Fragment, useEffect } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { templatesForTemplatePage } from '../../redux/templates/templates-selectors';
import { fetchAllTemplatesInit } from '../../redux/templates/templates-actions';

const DownloadedTemplatesTable = ({ templatesForTemplatePage ,fetchAllTemplatesInit}) => {
    const config = {
        page_size: 10,
        length_menu: [10, 20, 50],
        // button: {
        //     excel: true,
        //     print: true,
        //     extra: true,
        // }
    };

    useEffect(() => {
        fetchAllTemplatesInit()
      }, [])

    useEffect(() => {
        console.log({ templatesForTemplatePage })
    }, [templatesForTemplatePage])
    const records = [
        {
            "id": "1",
            "template": "NJ 1342331",
            "date": "January 22, 2022",
            "name": "From 11:00 AM To 12:00 PM",
            "size": "Rami Haddad",
            "kind": "SEO",
        },
    ];
    const columns = [
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
                                onClick={() => alert(record.id)}
                                style={{ borderRadius: '0' }}>
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
                    records={templatesForTemplatePage}
                    columns={columns}
                    dynamic={true}
                    tHeadClassName="text-muted fw-bold"
                // extraButtons={extraButtons}
                />
            </div>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchAllTemplatesInit: (PageSize, CurrentPage) => dispatch(fetchAllTemplatesInit(PageSize, CurrentPage))
})

const mapStateToProps = createStructuredSelector({
    templatesForTemplatePage: templatesForTemplatePage
})

export default connect(mapStateToProps,mapDispatchToProps)(DownloadedTemplatesTable);
