import axios from 'axios';

const server = 'https://api03.nejmy.net/sirius';
const server1 = 'https://api.nejmy.net';
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
            return (VEGA1.post(`/users/c`, bodyFormData, Headers = { lang: "en" }))
        },
        signIn: (userCredits) => {
            var bodyFormData = new FormData();
            const { userName, password } = userCredits
            bodyFormData.append('Vm', JSON.stringify({ userName: userName, password: password }));
            return (VEGA1.post(`/users/login`, bodyFormData, Headers = { lang: "en" }))
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
            return VEGA1.post(`/users/c/p`, bodyFormData, Headers = { lang: "en" })
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
    timezone: {
        getAll: () => {
            return VEGA1.get("/vega/timezone/all", {
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
    languages: {
        getAll: () => {
            return VEGA1.get("/a/p/104", {
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
    countries: {
        getAll: () => {
            return VEGA1.get("/a/p/106", {
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


    sirius: {
        categories: {
            getAll: () => {
                return VEGA.get("/a/category/all", {headers: {lang: "en"}})
            },

        },
        templates: {
            getAll: () => {
                return VEGA.get("/template/all", {headers: {lang: "en"}})
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
        }

    }


}
export default api