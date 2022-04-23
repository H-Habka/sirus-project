import React from 'react';

const SettingsForm = () => {
  return(
      <>
      
      <form className="row g-3 p-3 bg-white rounded">
                <div className="col-md-6">
                    <label forhtml="inputEmail" className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control rounded" id="inputEmail"/>
                </div>
                <div className="col-md-6">
                    <label forhtml="inputPassword" className="form-label fw-bold">Password</label>
                    <input type="password" className="form-control rounded" id="inputPassword"/>
                </div>
                <div className="col-md-6">
                    <label forhtml="inputswitch" className="form-label fw-bold">Notifications <span className="blockquote-footer">Send me email when:</span></label>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                <label className="form-check-label" forhtml="flexSwitchCheckChecked">I receive meeting confirmation</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                <label className="form-check-label" forhtml="flexSwitchCheckChecked">Meeting reminder</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                <label className="form-check-label" forhtml="flexSwitchCheckChecked">Question request is approved</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                <label className="form-check-label" forhtml="flexSwitchCheckChecked">I receive new meeting request</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                <label className="form-check-label" forhtml="flexSwitchCheckChecked">I receive new message</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                <label className="form-check-label" forhtml="flexSwitchCheckChecked">Meeting status changed</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                <label className="form-check-label" forhtml="flexSwitchCheckChecked">I receive new review</label>
                            </div>
                </div>
                <div className="col-md-6 h-50">
                    <label forhtml="inputswitch" className="form-label fw-bold">Calendar integration <span className="blockquote-footer">Connect your personal calender to sync with us</span></label>
                    <button type="submit" className="btn btn-success rounded w-100">Connect</button>
                </div>
                <div className="col-md-6 mt-2rem">
                    <label forhtml="inputState" className="form-label fw-bold">Delete account</label>
                    <select id="inputState" className="form-select w-90">
                    <option></option>
                    <option>...</option>
                    </select>
                </div>
                <div className="col-md-6 mt-50">
                    <label forhtml="inputpromotions" className="form-label fw-bold">Promotions</label>
                    <input type="text" className="form-control rounded" id="inputpromotions" placeholder="Enter the Promotions code"/>
                    <button type="submit" className="btn btn-success rounded w-100 mt-3">Apply</button>
                </div>
                <div className="col-md-6">
                    <button type="submit" className="btn btn-primary white rounded w-sm-100 w-25">Save</button>
                </div>
            </form>
      </>
  );
};

export default SettingsForm;
