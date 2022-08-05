import React from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'
import PaymentsTable from '../Tables/PaymentsTable.component';
import { useForm } from 'react-hook-form'
const PaymentsForm = () => {

    const { register, handleSubmit } = useForm()

    const HandleFormSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <div className="row bg-white rounded pt-3">
                <div className="row mb-0 mb-sm-3">
                    <div className="col-12 d-flex  justify-content-end justify-md-center">
                        <FaCcVisa size={30} className="mx-2"></FaCcVisa>
                        <SiAmericanexpress size={30} className="mx-2"></SiAmericanexpress>
                        <FaCcMastercard size={30} className="mx-2"></FaCcMastercard>

                    </div>
                </div>
                <form className="row g-3 mt-0 px-md-4 pb-3" onSubmit={handleSubmit(HandleFormSubmit)}>
                    <label className="col-12 col-lg-6 fw-bold">
                        Credit Card <span className="blockquote-footer">Your information is kept 100% private!</span>
                        <input type="text" className="form-control w-100" placeholder="Card number" {...register("creditCard")}/>
                    </label>
                    <label className="col-12 col-md-3  col-lg-2 col-xl-1 fw-bold">
                        &nbsp;
                        <input type="text" className="form-control  w-sm-100 w-70" placeholder="CVV" {...register("cvv")}/>
                    </label>
                    <label className="col-12 col-md-4 col-lg-2 ms-28 fw-bold">
                        Expiration
                        <input type="text" className="form-control " placeholder="Month" {...register("expirationMonth")}/>
                    </label>
                    <label className="col-12 col-md-4 col-lg-2 fw-bold">
                        &nbsp;
                        <input type="text" className="form-control " placeholder="Year" {...register("expirationYear")}/>
                    </label>
                    <label className="col-md-6 mb-sm-3 fw-bold">
                        Billing Address
                        <input type="" className="form-control w-100" placeholder="Address Line1" {...register("billingAddress1")}/>
                    </label>
                    <div className="d-none d-lg-block col-3 col-lg-2 col-xl-1">
                    </div>
                    <label className="col-md-4 ms-28 fw-bold">
                        &nbsp;
                        <input type="text" className="form-control w-100" placeholder="Address Line2 (Optional)" {...register("billingAddress2")}/>
                    </label>
                    <label className="col-md-6 fw-bold">
                        City
                        <input type="text" className="form-control w-100" required {...register("city")}/>

                    </label>
                    
                    <div className="d-none d-lg-block col-3 col-lg-2 col-xl-1" />
                    
                    <label className="col-md-4 ms-28 fw-bold">
                        Postal code / ZIP
                        <input type="text" className="form-control w-100" required {...register("postalCode")} />
                    </label>

                    <label className="col-md-6 mb-md-4 fw-bold">
                        Country
                        <input type="text" className="form-control w-100" required {...register("country")} />
                    </label>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary w-25 w-sm-100 white">Save</button>
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