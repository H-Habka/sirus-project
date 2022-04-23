import { React, useState } from "react";
import "./Profile.style.scss";
import { useForm } from 'react-hook-form'
import ReactTags from 'react-tag-autocomplete'

const ProfileForm = () => {
  const { register, handleSubmit } = useForm()

  const HandleFormSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <form className="row border g-3 p-3 bg-white px-lg-5" onSubmit={handleSubmit(HandleFormSubmit)}>
        <div className="col-md-6">
          <label forhtml="inputfirstname" className="form-label fw-bold">
            First Name
          </label>
          <input
            {...register('firstName')}
            type="text"
            className="form-control rounded w-lg-75"
            id="inputfirstname"
          />
        </div>
        <div className="col-md-6">
          <label forhtml="inputlastname" className="form-label fw-bold">
            Last Name
          </label>
          <input
            {...register('lastName')}
            type="text"
            className="form-control rounded w-lg-75"
            id="inputlastname"
          />
        </div>
        <div className="col-md-6">
          <label forhtml="inputdisplayname" className="form-label fw-bold">
            Display Name
          </label>
          <input
            {...register('disblayName')}
            type="text"
            className="form-control rounded w-lg-75"
            id="inputdisplayname"
          />
        </div>
        <div className="col-md-6">
          <label forhtml="inputState" className="form-label fw-bold">
            Role
          </label>
          <select id="inputState" className="form-select rounded w-lg-75" {...register('role')}>
            <option selected></option>
            <option value='test1'>test1</option>
            <option value='test2'>test2</option>
          </select>
        </div>
        <div className="col-md-6">
          <label forhtml="inputState" className="form-label fw-bold">
            BirthDay
          </label>
          <br />
          <input
            {...register('birthDay')}
            className="form-control rounded w-lg-75"
            type="date"
            placeholder="MM/DD/YYYY"
          />
        </div>
        <div className="col-md-6">
          <label forhtml="inputState" className="form-label fw-bold">
            Gender
          </label>
          <select id="inputState" className="form-select rounded w-lg-75" {...register('gender')}>
            <option selected></option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className="col-md-6">
          <label forhtml="inputState" className="form-label fw-bold">
            From
          </label>
          <select
            {...register('from')}
            id="inputState"
            className="form-select rounded w-lg-75"
            required
          >
            <option selected>Country</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6">
          <label forhtml="inputState" className="form-label fw-bold">
            City
          </label>
          <select id="inputState" className="form-select rounded w-lg-75" {...register('city1')}>
            <option selected></option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6">
          <label forhtml="inputState" className="form-label fw-bold">
            Living in
          </label>
          <select
            {...register('livingIn')}
            id="inputState"
            className="form-select rounded w-lg-75"
            required
          >
            <option selected>Country</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6">
          <label forhtml="inputState" className="form-label fw-bold">
            City
          </label>
          <select id="inputState" className="form-select rounded w-lg-75" {...register('city2')}>
            <option selected></option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6">
          <label forhtml="inputState" className="form-label fw-bold">
            Timezone
          </label>
          <select id="inputState" className="form-select rounded w-lg-75" {...register('timezone')}>
            <option selected>Europe/Paris</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6">
          <label forhtml="inputState" className="form-label fw-bold">
            Languges
          </label>
          <select id="inputState" className="form-select rounded w-lg-75" {...register('languges')}>
            <option selected></option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6">
          <label forhtml="inputNumber" className="form-label fw-bold">
            PhoneNumber
          </label>
          <input
            {...register('phoneNumber')}
            type="text"
            className="form-control rounded w-lg-75"
            id="inputNumber"
          />
        </div>
        <div className="col-md-6">
          <label forhtml="inputEmail" className="form-label fw-bold">
            Website
          </label>
          <input
            {...register('website')}
            type="email"
            className="form-control rounded w-lg-75"
            id="inputEmail"
            placeholder="marwan@nejmy.com"
          />
        </div>
        <div className="col-md-6">
          <label forhtml="inputTextarea" className="form-label fw-bold">
            Short bio <span className="blockquote-footer">50 characters</span>
          </label>
          <textarea
            {...register('bio')}
            type="text"
            className="form-control rounded w-lg-75"
            id="inputTextarea"
            rows="4"
          ></textarea>
        </div>
        <div className="col-md-6">
          <div className="col-md-12">
            <label forhtml="inputNumber" className="form-label fw-bold">
              Education
            </label>
            <input
              {...register('education')}
              type="text"
              className="form-control rounded w-lg-75"
              id="inputNumber"
            />
          </div>
          <div className="col-md-12">
            <label forhtml="inputNumber" className="form-label fw-bold">
              Years of work experience
            </label>
            <input
              {...register('experience')}
              type="text"
              className="form-control rounded w-lg-75"
              id="inputNumber"
            />
          </div>
        </div>
        {/* start mentor 
         <div className="col-md-6">
          <label forhtml="inputTextarea" className="form-label fw-bold">
            Description <span className="blockquote-footer">200 characters</span>
          </label>
          <textarea
            type="text"
            className="form-control rounded w-lg-75"
            id="inputTextarea"
            rows="4"
          ></textarea>
        </div>
        <div className="col-md-6">
          <label
            forhtml="inputtimeanddate"
            className="form-label fw-bold col-12"
          >
            Hourly rate
          </label>
          <select
            id="inputtimeanddate"
            className="custom-select  rounded w-lg-75"
          >
            <option> $10 </option>
            <option> $20 </option>
            <option> $30 </option>
            <option> $40 </option>
            <option> $50 </option>
          </select>
        </div>
        <div className="col-md-6">
          <label forhtml="videoUrl" className="form-label fw-bold">
            Add a video to your profile
          </label>
          <input
            type="text"
            className="form-control rounded w-lg-75"
            id="videoUrl"
            placeholder="Video link http://"
          />
        </div>

        <div className="col-md-6">
          <label
            forhtml="inputtimeanddate"
            className="form-label fw-bold col-12"
          >
            Meeting blocks
          </label>
          <select
            id="inputtimeanddate"
            className="custom-select  rounded w-lg-75"
          >
            <option> 15 min </option>
            <option> 30 min </option>
            <option> 60 min </option>
            <option> Monthly coaching </option>
          </select>
        </div>

        <div className="col-md-6">
          <label
            forhtml="inputtimeanddate"
            className="form-label fw-bold col-12"
          >
            Times available
          </label>
          <select
            id="inputtimeanddate"
            className="custom-select  rounded w-lg-75"
          >
            <option> 00:00 - 06:00 </option>
            <option> 06:00 - 12:00 </option>
            <option> 12:00 - 18:00 </option>
            <option> 18:00 - 24:00 </option>
          </select>
        </div>
        <div className="col-md-6">
          <label
            forhtml="inputtimeanddate"
            className="form-label fw-bold col-12"
          >
            Days available
          </label>
          <select
            id="inputtimeanddate"
            className="custom-select  rounded w-lg-75"
          >
            <option> Monday </option>
            <option> Tuesday </option>
            <option> Wednesday </option>
            <option> Thursday </option>
            <option> Friday </option>
            <option> Saturday </option>
            <option> Sunday </option>
          </select>
        </div>
        <div className="col-md-6">
          <label
            forhtml="inputtimeanddate"
            className="form-label fw-bold col-12"
          >
            Expertise
          </label>
          <ReactTags
            placeholderText=" add expertise"

          />
        </div>

        <div className="col-md-6">
          <label
            forhtml="inputtimeanddate"
            className="form-label fw-bold col-12"
          >
            Categories
          </label>
          <select
            id="inputtimeanddate"
            className="custom-select  rounded w-lg-75"
          >
            <option>  </option>

          </select>
        </div>

        <div className="col-md-6">
          <label
            forhtml="inputtimeanddate"
            className="form-label fw-bold col-12"
          >
            sub Categories
          </label>
          <select
            id="inputtimeanddate"
            className="custom-select  rounded w-lg-75"
          >
            <option>  </option>

          </select>
        </div>


        <div className="col-md-6">
          <label
            forhtml="inputtimeanddate"
            className="form-label fw-bold col-12"
          >
            Add tags
          </label>
          <ReactTags
            placeholderText=" add tags"

          />
        </div>

        <div className="col-md-6">
          <label forhtml="inputEmail" className="form-label fw-bold">
            Add cover image to your expertise
          </label>
          <input
            type="file"
            className="form-control rounded w-lg-75"
            id="coverImg"
          />
        </div>

        <div className="col-md-6">
          <label
            forhtml="inputtimeanddate"
            className="form-label fw-bold col-12"
          >
            Add tools
          </label>
          <ReactTags
            placeholderText=" add tools"

          />
        </div>
        end mentor  */}
        <div className="col-md-6">
          <button type="submit" className="btn btn-primary white  w-sm-90">
            Save
          </button>
        </div>
        {/* <div className="col-md-6">
          <button type="submit" className="btn btn-success w-lg-75">
            Apply to be a mentor
          </button>
        </div> */}

        {/* mentor */}
        {/* <div className="col-md-6">
          <button type="submit" className="btn btn-primary w-lg-75">
            Submit for approval
          </button>
        </div> */}
      </form>
    </>
  );
};

export default ProfileForm;
