import React from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'
import PaymentsTable from '../Tables/PaymentsTable.component';
const PaymentsForm = () => {
    return (
        <>
            <div className="row bg-white rounded pt-3">
                <div className="row mb-0 mb-sm-3">
                    <div className="col-12 d-flex  justify-content-end justify-md-center">
                        <FaCcVisa size={30} className="mx-2"></FaCcVisa>
                        <SiAmericanexpress size={30}  className="mx-2"></SiAmericanexpress>
                        <FaCcMastercard size={30}  className="mx-2"></FaCcMastercard>

                    </div>
                </div>
                <form className="row g-3 mt-0 px-md-4 pb-3">
                    <div className="col-12 col-lg-6">
                        <label forhtml="inputCreditCard" className="form-label fw-bold">Credit Card <span className="blockquote-footer">Your information is kept 100% private!</span></label>
                        <input type="text" className="form-control rounded  w-100" id="inputCreditCard" placeholder="Card number" />
                    </div>
                    <div className="col-12 col-md-3  col-lg-2 col-xl-1">
                        <label forhtml="inputCVV" className="form-label fw-bold">&nbsp;</label>
                        <input type="text" className="form-control rounded w-sm-100 w-70" id="inputCVV" placeholder="CVV" />
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 ms-28">
                        <label forhtml="inputMonth" className="form-label fw-bold">Expiration</label>
                        <input type="text" className="form-control rounded" id="inputMonth" placeholder="Month" />
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <label forhtml="inputYear" className="form-label fw-bold">&nbsp;</label>
                        <input type="text" className="form-control rounded" id="inputYear" placeholder="Year" />
                    </div>
                    <div className="col-md-6 mb-sm-3">
                        <label forhtml="inputaddress" className="form-label fw-bold">Billing Address</label>
                        <input type="" className="form-control rounded  w-100" id="inputaddress" placeholder="Address Line1" />
                    </div>
                    <div className="d-none d-lg-block col-3 col-lg-2 col-xl-1">
                    </div>
                    <div className="col-md-4 ms-28">
                        <label forhtml="inputaddress2" className="d-none d-md-block form-label fw-bold">&nbsp;</label>
                        <input type="text" className="form-control rounded  w-100" id="inputaddress2" placeholder="Address Line2 (Optional)" />
                    </div>
                    <div className="col-md-6">
                        <label forhtml="inputcity" className="form-label fw-bold">City</label>
                        <input type="text" className="form-control rounded   w-100" id="inputcity" required />

                    </div>
                    <div className="d-none d-lg-block col-3 col-lg-2 col-xl-1">
                    </div>
                    <div className="col-md-4 ms-28">
                        <label forhtml="inputcode" className="form-label fw-bold">Postal code / ZIP</label>
                        <input type="text" className="form-control rounded   w-100" id="inputcode" required />

                    </div>
                    <div className="col-md-6 mb-md-4">
                        <label forhtml="inputcountry" className="form-label fw-bold">Country</label>
                        <input type="text" className="form-control rounded  w-100" id="inputcountry" required />
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary rounded w-25 w-sm-100 white">Save</button>
                    </div>
                </form>
                <div className="row my-4">
                    <div className="col-12 p-5">
                        <PaymentsTable></PaymentsTable>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PaymentsForm;