import axios from 'axios';

const http = axios.create({
   baseURL: 'http://user_web/api/v1/',
});

const userService = () => {
    const getUsers = async () => {
        return http.get('users');
    }

    return {
        getUsers
    }
}

export default userService;