import axios from 'axios';

const server = 'https://api03.nejmy.net/sirius';
const server1 = 'https://api03.nejmy.net';
// const server1 = 'https://api.nejmy.net';

const VEGA = axios.create({
    baseURL: server,
    timeOut: 20000,
});
const VEGA1 = axios.create({
    baseURL: server1,
    timeOut: 20000,
});
const api = {
    users: {
        create: (userCredits) => {
            var bodyFormData = new FormData();
            const { firstName, lastName, email, password } = userCredits
            bodyFormData.append('Vm', JSON.stringify({ catId: 0, firstName: firstName, lastName: lastName, email: email, password: password }));
            return (VEGA1.post(`/account/c`, bodyFormData, {headers : { lang: "en" }}))
        },
        signIn: (userCredits) => {
            var bodyFormData = new FormData();
            const { userName, password } = userCredits
            bodyFormData.append('Vm', JSON.stringify({ userName: userName, password: password }));
            return (VEGA1.post(`/account/login`, bodyFormData, {headers : { lang: "en" }}))
        },
        getById: (id) => {
            return (VEGA1.get(`/users/g/u/${id}`, {
                headers: {
                    lang: "en"
                }
            }))
        },
        getByIdA: async (id) => {
            const data = await (VEGA.get(`/users/${id}`))
            return data
        },
        getAll: (query = 0, page = 0) => {
            return (VEGA.get(`/users?q=${query}&_page=${page}&_limit=8`))
        },
        getUserLocationAndTimeZone: () => {
            return (axios.get('https://ipapi.co/json/'))
        },
        updateUserData: (userData) => {
            var bodyFormData = new FormData();
            bodyFormData.append('Vm', JSON.stringify({ EntryId: userData.entryId, TzId: userData.timezone, NatID: userData.country, FirstName: userData.firstName, lastName: userData.lastName, DisplayName: userData.displayName, Bio: userData.bio, Description: userData.desciption, Gender: userData.gender, Dob: userData.birthDay, AccountStatus: 1, PerCountryId: userData.country, website: userData.website, phone: userData.phoneNumber, PerCity: userData.city, RecCountryId: userData.countrytLive, RecCity: userData.cityLive, Attributes: userData.languagesSelected.map(item => (item.value)) }));
            return VEGA1.post(`/users/c/p`, bodyFormData,  {headers : { lang: "en" }})
        }

    },
    categories: {
        getAll: () => {
            return VEGA1.get("/category/all", {
                headers: {
                    lang: "en"
                }
            })
        },
        getSubCategory: (categoryId) => {
            return VEGA1.get(`/categories/${categoryId}`)
        }
    },
    expertise: {
        getAll: () => {
            return VEGA1.get("/vega/expertise/all", {
                headers: {
                    lang: "en"
                }
            })
        }
    },
    tags: {
        getAll: () => {
            return VEGA1.get("/a/p/109", {
                headers: {
                    lang: "en"
                }
            })
        }
    },
    tools: {
        getAll: () => {
            return VEGA1.get("/vega/tool/all", {
                headers: {
                    lang: "en"
                }
            })
        }
    },
    timeAvailable: {
        getAll: () => {
            return VEGA1.get("/vega/timeAvailable/all", {
                headers: {
                    lang: "en"
                }
            })
        }
    },
    meetingBlock: {
        getAll: () => {
            return VEGA1.get("/vega/meetingBlock/all", {
                headers: {
                    lang: "en"
                }
            })
        }
    },
    inbox: {
        getById: (id) => {
            return VEGA.get(`/inbox?reciverId=${id}`)
        }
    },


// {
// EntryId:'ca4d66d1-f307-4787-8e9e-1b62739eadb5',
// NatId:10602,
// langId:10401,
// TzId:10701,
// FirstName:'wael',
// LastName:'Khyata',
// DisplayName:'Abdo.khyata',
// Bio:'Test best West',
// Description:'Again Test best West',
// Gender:false,
// Dob:'12/12/12 12:00:00',
// AccountStatus:1,
// education:'',
// attributes:[10401,10402]
// }



    timezone: {
        getAll: () => {
            return VEGA1.get("/nejmy/a/timezone/all", {
                headers: {
                    lang: "en"
                }
            })
        }
    },

    languages: {
        getAll: () => {
            return VEGA1.get("/nejmy/a/ul/all", {
                headers: {
                    lang: "en"
                }
            })
        }
    },

    countries: {
        getAll: () => {
            return VEGA1.get("/a/p/106", {
                headers: {
                    lang: "en"
                }
            })
        }
    },


    sirius: {
        categories: {
            getAll: () => {
                return VEGA.get("/a/category/all", {headers: {lang: "en"}})
            },

        },
        templates: {
            getAll: (PageSize="",CurrentPage="") => {
                return VEGA.get("/template/all", {headers: {lang: "en", PageSize, CurrentPage}})
            },
            getTypes: () => {
                return VEGA.get("/a/ft/all", {headers: {lang: "en"}})
            },
            getOneByName: (name) => {
                return VEGA.get(`/template/n/${name}`, {headers: {lang: "en"}})
            },
            getOneByTypeId: (typeId) => {
                return VEGA.get(`/template/t/${typeId}`, {headers: {lang: "en"}})
            },
            getOneById: (Id) => {
                return VEGA.get(`/template/i/${Id}`, {headers: {lang: "en"}})
            },
            createTemplate: (templateData) => {
                var bodyFormData = new FormData();
                const { key1, key2, key3} = templateData
                bodyFormData.append('Vm', JSON.stringify({ catId: 0,  key1, key2, key3 }));
                return VEGA.post(`/template/c`,bodyFormData, {headers: {lang: "en"}})
            },
        },
        interviews: {
            getAll: () => {
                return VEGA.get("/interview/all", {headers: {lang: "en"}})
            },
            getOneById: (Id) => {
                return VEGA.get(`/interview/i/${Id}`, {headers: {lang: "en"}})
            },
        },
        industry: {
            getTypes: () => {
                return VEGA.get("/a/ind/all", {headers: {lang: "en"}})
            }
        },
        topics : {
            getAll: () => {
                return VEGA.get("/a/topic/all", {headers: {lang: "en"}})
            }
        },
        kinds : {
            getAll: () => {
                return VEGA.get("/a/topic/all", {headers: {lang: "en"}})
            }
        },
        yearsOfExperience : {
            getAll : () => {
                return VEGA.get("/a/yoe/all", {headers: {lang: "en"}})
            }
        },
        users : {
            updateUserData: (userData) => {
                var bodyFormData = new FormData();
                bodyFormData.append('Vm', JSON.stringify(userData));
                return VEGA.post(`/account/p/c`, bodyFormData, {headers : { lang: "en" }})
            },
            getUserById : (id) => {
                // /sirius/g/u/i/5f3091fd-7350-4d80-9e71-f929ba300832
                return VEGA.get(`/g/u/i/${id}`, {headers : { lang: "en" }}) 
            }
        },
        search : (filters) => {
            let test = '?'
            filters.forEach(({type, value},idx) => {
                if(filters.length === idx + 1)test += `${type}=${value}`
                else test += `${type}=${value}&`
            })

            console.log(filters)

            console.log({test})

            // return VEGA.get(``, {headers : { lang: "en" }})
        }

    }
}
export default api



























