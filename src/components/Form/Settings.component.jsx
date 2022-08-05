import React from 'react';
import { useForm } from 'react-hook-form'

const SettingsForm = () => {
    const { register, handleSubmit } = useForm()

    const HandleFormSubmit = (data) => {
        console.log(data)
    }

    return (
        <>

            <form className="row g-3 p-3 bg-white rounded" onSubmit={handleSubmit(HandleFormSubmit)}>
                <label className="col-md-6">
                    Email
                    <input type="email" className="form-control" />
                </label>
                <label className="col-md-6">
                    Password
                    <input type="password" className="form-control" />
                </label>
                <div className="col-md-6">
                    <div className="form-label fw-bold">
                        Notifications <span className="blockquote-footer">Send me email when:</span>
                    </div>
                    <label className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" />
                        Template download confirmation
                    </label>
                    <label className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" />
                        Save template to favorite list
                    </label>
                    <label className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" />
                        I receive new message
                    </label>
                </div>
                <div className="col-md-6 mt-2rem" />
                {/* <div className="col-md-6 h-50">
                    <label className="form-label fw-bold">Calendar integration <span className="blockquote-footer">Connect your personal calender to sync with us</span></label>
                    <button type="submit" className="btn btn-success rounded w-100">Connect</button>
                </div> */}
                <label className="col-md-6 mt-2rem">
                    Delete account
                    <select id="inputState" className="form-select w-90">
                        <option></option>
                        <option>...</option>
                    </select>
                </label>
                <label className="col-md-6 mt-50">
                    Promotions
                    <input type="text" className="form-control " id="inputpromotions" placeholder="Enter the Promotions code" />
                    <button type="submit" className="btn btn-success  w-100 mt-3">Apply</button>
                </label>
                <div className="col-md-6">
                    <button type="submit" className="btn btn-primary white  w-sm-100 w-25">Save</button>
                </div>
            </form>
        </>
    );
};

export default SettingsForm;
