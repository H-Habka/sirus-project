import { React, useEffect, useState } from "react";
import "./Profile.style.scss";
import { useForm } from 'react-hook-form'
import ReactTags from 'react-tag-autocomplete'
import api from '../../api/index'
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { connect } from "react-redux";
import { SignUpSucc } from "../../redux/user/user.actions";
import toast, { Toaster } from 'react-hot-toast';

// import { completeUserProfile } from "../../redux/user/user.actions";

const ProfileForm = ({ currentUser, updateUserprofile }) => {
  const [languages, setLanguages] = useState([])
  const [countries, setCountries] = useState([])
  const [timeZoneAll, setTimeZoneAll] = useState([])
  const [yearsOfExperience, setYearsOfExperience] = useState([])




  const { register, handleSubmit, reset } = useForm()

  


  useEffect(() => {

    let date = new Date(currentUser?.dob)
    let Dob = `${date.getFullYear()}-${String((date.getMonth() + 1)).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`

    reset({
      TzId: currentUser?.tzId,
      LangId: currentUser?.langId,
      RecCountryId: currentUser?.recCountryId,
      RecCity: currentUser?.recCity,
      PerCountryId: currentUser?.perCountryId,
      PerCity: currentUser?.perCity,
      FirstName: currentUser?.firstName,
      LastName: currentUser?.lastName,
      DisplayName: currentUser?.displayName,
      Title: currentUser?.title,
      Bio: currentUser?.bio,
      Education: currentUser?.education,
      Phone: currentUser?.phone,
      Website: currentUser?.website,
      Yoe: currentUser?.yoe,
      Gender: currentUser?.gender,
      Dob: Dob
    })
  }, [languages, countries, timeZoneAll, yearsOfExperience])



  const HandleFormSubmit = (data) => {
    data = {
      ...data,
      EntryId: currentUser.entryId,
      NatId: 0
    }
    console.log(data)

    toast.promise(
      api.sirius.users.updateUserData(data),
      {
        loading: 'Updateing user Profile...',
        success: (res) => {
          updateUserprofile({ ...res.data, token: currentUser.token })
          return <b>user profile updated successfully</b>
        },
        error: err => {
          console.log(err)
          return <b>something went wrong... </b>
        },
      }
    );
  }




  useEffect(() => {
    api.countries.getAll().then(res => {
      setCountries(res.data.map(item => (Object.create({ text: item.name, value: item.attrId }))))
    })
    api.timezone.getAll().then(res => {
      setTimeZoneAll(res.data.map(item => ({ text: item.text, value: item.id, offset: item.offset })))
    })
    api.languages.getAll().then(res => {
      setLanguages(res.data.map(item => ({ label: item.name, value: item.id })))
    })
    api.sirius.yearsOfExperience.getAll().then(res => {
      setYearsOfExperience(res.data)
    })
  }, [])






  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <form className="row border g-3 p-3 bg-white px-lg-5 rounded" onSubmit={handleSubmit(HandleFormSubmit)}>
        <label className="col-md-6 fw-bold ">
          First Name
          <input
            {...register('FirstName')}
            type="text"
            className="form-control w-lg-75"
            id="inputfirstname"
          />
        </label>
        <label className="col-md-6 fw-bold ">
          Last Name
          <input
            {...register('LastName')}
            type="text"
            className="form-control w-lg-75"
            id="inputlastname"
          />
        </label>
        <label className="col-md-6 fw-bold ">
          Display Name
          <input
            {...register('DisplayName')}
            type="text"
            className="form-control w-lg-75"
          />
        </label>

        <label className="col-md-6 fw-bold ">
          Job Title
          <input
            {...register('Title')}
            type="text"
            className="form-control w-lg-75"
          />
        </label>

        <label className="col-md-6 fw-bold">
          BirthDay
          <br />
          <input
            {...register('Dob')}
            className="form-control w-lg-75"
            type="date"
            placeholder="MM/DD/YYYY"
          />
        </label>
        <label className="col-md-6 fw-bold">
          Gender
          <select className="form-select w-lg-75" {...register('Gender')}>
            <option></option>
            <option value={false} >male</option>
            <option value={true}>female</option>
          </select>
        </label>
        <label className="col-md-6 fw-bold">
          Country From
          <select
            {...register('PerCountryId')}

            className="form-select w-lg-75"
            required
          >
            <option></option>
            {
              countries.map(({ text, value }) => (
                <option key={value} value={value}>{text}</option>
              ))
            }
          </select>
        </label>

        <label className="col-md-6 fw-bold">
          City From

          <input
            {...register('PerCity')}
            type="text"
            className="form-control w-lg-75"
          />

        </label>
        <label className="col-md-6 fw-bold">
          Country Living in
          <select
            {...register('RecCountryId')}

            className="form-select w-lg-75"
            required
          >
            <option></option>
            {
              countries.map(({ text, value }) => (
                <option key={value} value={value}>{text}</option>
              ))
            }
          </select>
        </label>
        <label className="col-md-6 fw-bold">
          City Living in
          <input
            {...register('RecCity')}
            type="text"
            className="form-control w-lg-75"
          />
        </label>


        {/* {desciption entryId: user.entryId } */}


        <label className="col-md-6 fw-bold">
          Timezone
          <select className="form-select w-lg-75" {...register('TzId')}>
            <option></option>
            {
              timeZoneAll.map(({ text, value }) => (
                <option key={value} value={value}>{text}</option>
              ))
            }
          </select>
        </label>
        <label className="col-md-6 fw-bold">
          Languges
          <select className="form-select w-lg-75" {...register('LangId')}>
            <option></option>
            {
              languages.map(item => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))
            }
          </select>
        </label>




        <label className="col-md-6 fw-bold">
          PhoneNumber
          <input
            {...register('Phone')}
            type="text"
            className="form-control w-lg-75"
            id="inputNumber"
          />
        </label>
        <label className="col-md-6 fw-bold">
          Website
          <input
            {...register('Website')}
            type="email"
            className="form-control w-lg-75"
            id="inputEmail"
            placeholder="marwan@nejmy.com"
          />
        </label>

        <label className="col-md-6 fw-bold">
          Short bio <span className="blockquote-footer">50 characters</span>
          <textarea
            {...register('Bio')}
            type="text"
            className="form-control w-lg-75"
            id="inputTextarea"
            rows="4"
          ></textarea>
        </label>
        <div className="col-md-6 fw-bold">
          <label className="col-md-12">
            Education
            <input
              {...register('Education')}
              type="text"
              className="form-control w-lg-75"
              id="inputNumber"
            />
          </label>

          <label className="col-md-12 fw-bold mt-2">
            Years of work experience
            <select className="form-select w-lg-75" {...register('Yoe')}>
              <option></option>
              {
                yearsOfExperience.map(({ id, name }) => (
                  <option key={id} value={id}>{name}</option>
                ))
              }
            </select>
          </label>
        </div>


        <div className="col-md-6">
          <button type="submit" className="btn btn-primary white  w-sm-90">
            Save
          </button>
        </div>

      </form>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  updateUserprofile: (userData) => dispatch(SignUpSucc(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);



