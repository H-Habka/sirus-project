import api from "../../api";
import { inboxTypes } from "./inboxtypes";


export const togglePopupHidden = () => ({
    type: inboxTypes.SHOW_POPUP
})

export const showRowSubject = (subject) => ({
    type: inboxTypes.SHOW_ROW_SUBJECT,
    payload: subject
})


const fetchInboxStart = () => ({
    type: inboxTypes.FETCH_INBOX_START
})

const fetchInboxSuccess = (data) => ({
    type: inboxTypes.FETCH_INBOX_SUCCESS,
    payload: data
})
const fetchInboxFailure = (err) => ({
    type: inboxTypes.FETCH_INBOX_FAILURE,
    payload: err
})



export const inboxFetchInit = (id) => dispatch => {
    let inboxWithSenderName = []
    dispatch(fetchInboxStart())
    api.inbox.getById(id).then(async ({ data }) => {

        for await (let message of data.map(async (item, idx) => {
            let sender = await api.users.getById(item.senderId)
            return ({ ...item, sender: sender.data.firstName })

        })) {
            inboxWithSenderName.push(message)
        }



        dispatch(fetchInboxSuccess(inboxWithSenderName))

    }).catch(err => { dispatch(fetchInboxFailure(err)) })
}