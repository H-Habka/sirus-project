import { createSelector } from "reselect"

export const categories = state => state.categories.data


// export const labelCategroiesSelector = createSelector(
//     [categories],
//     (categories) => {
//     console.log(categories)
//     let result = categories.data.map(item => {

//         let options = item.subMenu.map(item => ({ label: item, value: item }))
//         return ({ ...item, label: item.title, options: options })
//     })
//     return result
// })


export const labelCategroiesSelector = createSelector(
    [categories],
    (categories) => {
        return categories.map(item => {
            let subMenu = item.subs.map(sub =>sub.name)
            return ({subMenu,title: item.name})
        })
    }
)
