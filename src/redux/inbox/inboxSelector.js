import { createSelector } from "reselect";
import api from "../../api";

const inbox = state => state.inbox

export const selectorHiddenState = createSelector(
    [inbox],
    inbox => inbox.hidden
)

export const selectorSubjectData = createSelector(
    [inbox],
    inbox => inbox.rowSubjectData
)

export const selectInboxData = createSelector(
    [inbox],
    (inbox) => {

        // inbox.inboxData.forEach(item => {
        //     api.users.getById(item.senderId).then(({ data }) => {
        //         response.push({ ...item, sender: data.firstName })
        //     }).catch(err => { console.log(err) })

        // })

        return inbox.inboxData
    }
)