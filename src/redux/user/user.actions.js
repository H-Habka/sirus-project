import { usersTypes } from "./user.types"
import api from "../../api"


export const SignUpStart = () => {
    return (
        {
            type: usersTypes.USER_SIGN_UP_START,
        }
    )
}

export const SignUpSucc = (currentUser) => {
    return (
        {
            type: usersTypes.USER_SIGN_UP_SUCC,
            payload: currentUser
        }
    )
}


export const SignUpFail = (error) => {
    return (
        {
            type: usersTypes.USER_SIGN_UP_FAIL,
            payload: error
        }
    )
}

export const userLogOut = () => {
    return ({
        type: usersTypes.USER_LOG_OUT
    })
}



export const signUpInitiator = (userCredentials, navigate) => dispatch => {
    dispatch(SignUpStart())

    if (!userCredentials.indicator) {
        if (userCredentials.password.length < 8) return dispatch(SignUpFail('your password is too Short'))
        if (userCredentials.password != userCredentials.confirmPassword) return dispatch(SignUpFail("password don't match"))
        if(!userCredentials.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*#?&]{8,}$/g)){
            const error = "password should contain at least 8 characters , 1 lowercase , 1 uppercase , 1 number and 1 special character"
            return dispatch(SignUpFail(error))
        }

        api.users.create(userCredentials).then(response => {
            dispatch(SignUpSucc(response.data))
            console.log(4)
            navigate('/')
        }).catch(err => {
            dispatch(SignUpFail(err.response.data))
            console.log(err)
        })
    } else {
        api.users.signIn({ userName: userCredentials.email, password: userCredentials.password }).then(res => {
            api.users.getById(res.data.id).then(res => {
                dispatch(SignUpSucc(res.data))
                navigate("/")
            }).catch(e => {
                if (e.response.status === 401)
                    dispatch(SignUpFail("UNAUTHORIZED"))
                else
                    dispatch(e.message)
                dispatch(SignUpFail("UNAUTHORIZED"))
            })
        }).catch(e => {
            if (e.response.status === 401)
                dispatch(SignUpFail("UNAUTHORIZED"))
            else
                dispatch(e.message)

        })
    }


}

















// export const signUpInitiator = (userCredentials, navigate) => {
//     return dispatch => {
//         var country, countryCode, city, timeZone
//         dispatch(SignUpStart())
//         const { email, password, firstName, lastName, confirmPassword, indicator } = userCredentials
//         api.users.getUserLocationAndTimeZone().then(({ data }) => {
//             country = data.country_name
//             countryCode = data.country
//             city = data.city
//             const d = new Date();
//             let diff = d.getTimezoneOffset();
//             timeZone = diff / 60
//             if (indicator) {
//                 if (!email || !password) {
//                     const error = "check your sign in credentials"
//                     dispatch(SignUpFail(error))
//                 }
//                 else {
//                     api.users.signIn({ email: email, password: password }).then(res => {
//                         dispatch(SignUpSucc(res.data))
//                         navigate("/")
//                     }).catch(err => {

//                         dispatch(SignUpFail(err.response.data))
//                     })

//                 }
//             }
//             else
//                 if (!userCredentials.OAuthType) {
//                     if (password !== confirmPassword) {
//                         const error = "password don't match"

//                         dispatch(SignUpFail(error))
//                     }
//                     else if (!email || !firstName || !lastName || !password) {
//                         const error = "check your credentials"

//                         dispatch(SignUpFail(error))


//                     }
//                     else {

//                         api.users.create({ ...userCredentials, country: country, countryCode: countryCode, city: city, timeZone: timeZone }).then(res => {
//                             dispatch(SignUpSucc(res.data))
//                             navigate("/")
//                         }).catch(err => {
//                             dispatch(SignUpFail(err.response.body))
//                         })

//                     }
//                 }
//                 else {
//                     try {
//                         api.users.create({ ...userCredentials, country: country, countryCode: countryCode, city: city, timeZone: timeZone }).then(res => {
//                             dispatch(SignUpSucc(res.data))
//                             navigate("/")
//                         }).catch(err => console.log(err))
//                     } catch (error) {
//                         console.log("err")
//                         dispatch(SignUpFail(error))
//                     }
//                 }


//         }).catch(e => {
//             console.log(e)
//         })

//     }
// }
