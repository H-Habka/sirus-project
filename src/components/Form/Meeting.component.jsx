import React from 'react';
import { BsSearch, BsPlus } from 'react-icons/bs'
import './Meeting.style.scss'
const MeetingForm = () => {

    return (
        <>
            <form className="row g-3 p-1 p-md-4 p-lg-5 bg-white rounded">
                <div className="col-md-6 mb-0 mb-md-5 ">
                    <label forhtml="inputCredit" className="form-label fw-bold">Mentor</label>
                    <select id="inputCredit" className="form-select w-90">
                        <option selected>Chose a Mentor</option>
                        <option>Existing mentor <BsPlus></BsPlus> </option>
                        <option>New Mentor <BsSearch></BsSearch> </option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <label forhtml="inputCategory" className="form-label fw-bold">Category</label>
                    <select id="inputCategory" className="form-select w-90">
                        <option selected>Chose a Category</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label forhtml="inputTextarea" className="form-label fw-bold">What you want help with</label>
                    <div id="inputTextarea" className="form-text mb-3">200 characters</div>
                    <textarea type="text" className="form-control w-90" id="inputTextarea" rows="4"></textarea>
                </div>
                <div className="col-md-6">
                    <label forhtml="inputTextarea" className="form-label fw-bold">Please describe your challenge or pain point</label>
                    <div id="inputTextarea" className="form-text mb-3">Let your mentor know the pain point or challenge you’re currently facing —200 characters</div>
                    <textarea type="text" className="form-control w-90" id="inputTextarea" rows="4"></textarea>
                </div>
                <div className="col-md-6">
                    <label forhtml="inputTextarea" className="form-label fw-bold">What’s the desired outcome of this meeting?</label>
                    <div id="inputTextarea" className="form-text mb-3">In an ideal world, what would you like to get out of this meeting by the end of it? —200 characters</div>
                    <textarea type="text" className="form-control w-90" id="inputTextarea" rows="4"></textarea>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6 mb-3">
                    <label forhtml="inputestimated" className="form-label fw-bold">How long do you want to meet</label>
                    <select id="inputestimated" className="form-select w-90">
                        <option selected>Set estimated length</option>
                        <option>15 min ($5 total 5 stars)</option>
                        <option>30 min ($10 total 10 stars)</option>
                        <option>1 hour ($20 total 20 stars)</option>
                    </select>
                </div>
                <div className="col-md-12 mb-3">
                    <h3 className="fw-bold">
                        Choose time and date
                    </h3>
                    <p className="text-muted">
                        Suggest times when you're free to Meet — All time listed are in your local timezone
                    </p>
                    <div className="col-12 ">
                        <label for="inputtimeanddate" className="form-label fw-bold">Choose time and date</label>
                        <div id="inputtimeanddate" className="form-text mb-3">Suggest times when you're free to Meet — All time listed are in your local timezone</div>
                        <select id="inputtimeanddate" className="custom-select w-60 me-3">
                            <option selected>Sat, Jan 29 2022</option>
                        </select>
                        <select id="inputtimeanddate" className="custom-select w-sm-36 w-30 ">
                            <option selected>12:00 PM</option>
                        </select>
                        <select id="inputtimeanddate" className="custom-select w-60 me-3">
                            <option selected>Sat, Jan 29 2022</option>
                        </select>
                        <select id="inputtimeanddate" className="custom-select w-sm-36 w-30">
                            <option selected>1:00 PM</option>
                        </select>
                        <select id="inputtimeanddate" className="custom-select w-60 me-3">
                            <option selected>Sat, Jan 29 2022</option>
                        </select>
                        <select id="inputtimeanddate" className="custom-select w-sm-36 w-30">
                            <option selected>2:00 PM</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-7 mb-md-3">
                    <label forhtml="inputplatforms" className="form-label fw-bold">Choose online meeting platforms </label>
                    <div id="inputplatforms" className="form-text mb-3">Choose your preferred online meeting platform and type in your account ID</div>
                    <select className="form-select w-100" id="autoSizingSelect">
                        <option selected>Choose online meeting platform</option>
                        <option value="1">Zoom</option>
                        <option value="2">Google Meet</option>
                        <option value="3">Skype</option>
                    </select>
                </div>
                <div className="col-md-4 ms-17 ms-sm-0 mt-md-5 pt-md-2 mt-sm-0 align-self-center">
                    <input type="text" className="form-control w-sm-100 w-92" placeholder="Account ID" />
                </div>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-success rounded w-100 py-3">Book Now</button>
                </div>
            </form>
        </>
    );
};

export default MeetingForm;
