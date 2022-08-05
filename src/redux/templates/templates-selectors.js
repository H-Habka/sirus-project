import { createSelector } from "reselect";



export const allTemplates = (state) => state.templates.data



export const templatesForTemplatePage = createSelector(
    [allTemplates],
    allTemplates => allTemplates.map(template => ({
        id: template.entryId,
        template: template.entryId,
        date: template.addedDate.split("T")[0],
        name: template.name,
        size: (template.size / 1000000) + " MB",
        kind: template.fileType.map(type => type.name).join(" ,"),
    }))

)