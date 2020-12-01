import axios from 'axios'

export default {
    actions: {
        loginUser(context, requestData) {
            let url = context.getters.getURL;
            const headers = context.getters.getHeaders;
            
            axios.post(url + "/login", requestData, 
            {
                headers: headers,
            })
            .then(function(response) {
                setTimeout(() => context.commit("updateLoginMessageVisible", false), 2000);
                
                context.commit("updateUser", response.data.user);
                context.commit("updateAuthStatus", true);
                context.commit("updateAccessToken", response.data.access_token);
                context.commit("updateRefreshToken", response.data.refresh_token);

                context.commit("updateLoginMessageType", "success");
                context.commit("updateLoginMessageVisible", true);
                context.commit("updateLoginMessage", "Добро пожаловать " + response.data.user.PassName);               
            })
            .catch(function(error) {
                const status = error.response.status;
                console.log(status);
                context.commit("updateLoginMessageType", "error");
                context.commit("updateLoginMessageVisible", true);

                setTimeout(() => context.commit("updateLoginMessageVisible", false), 2000);
                if(status == '422') {
                    context.commit("updateLoginMessage", "Поля заполнены неправильно!");
                }else 
                if(status == '500') {
                    context.commit("updateLoginMessage", "Внутрення ошибка сервера");
                }else 
                if(status == '401') {
                    context.commit("updateLoginMessage", "Неправильный логин или пароль");  
                }
            })
        },
    },
    mutations: {
        updateUser(state, user) {
            state.user = user;
        },
        updateAccessToken(state, token) {
            state.accessToken = token;
        },
        updateRefreshToken(state, token) {
            state.refreshToken = token;
        },
        updateAuthStatus(state, status) {
            state.isAuthorized = status;
        },
        updateLoginMessageVisible(state, flag) {
            state.LoginMessageVisible = flag;
        },
        updateLoginMessage(state, msg) {
            state.LoginMessage = msg;
        },
        updateLoginMessageType(state, type) {
            state.LoginMessageType = type;
        }
    },
    state: {
        backendURL: "http://127.0.0.1/api",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',  
        },
        isAuthorized: false,
        accessToken: localStorage.getItem('access_token') || '',
        refreshToken: localStorage.getItem('refresh_token') || '',
        user: {},

        LoginMessageVisible: false,
        LoginMessage: "",
        LoginMessageType: "error",
    },
    getters: {
        getAccessToken(state) {
            return state.accessToken;
        },
        getRefreshToken(state) {
            return state.refreshToken;
        },
        getUser(state) {
            return state.user;
        },
        getRole(state) {
            return state.user.Role;
        },
        getLoginMessageVisible(state) {
            return state.LoginMessageVisible;
        },
        getLoginMessage(state) {
            return state.LoginMessage;
        },
        getLoginMessageType(state) {
            return state.LoginMessageType;
        },
        getHeaders(state) {
            return state.headers;
        },
        getURL(state) {
            return state.backendURL;
        },
        authStatus(state) {
            return state.isAuthorized;
        }
    },
}