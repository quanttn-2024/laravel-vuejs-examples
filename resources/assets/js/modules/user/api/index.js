import axios from 'axios';

export default class MemberService {
    /**
     * Return list members.
     *
     * @returns {AxiosPromise}
     *
     */
    static getMembers() {
        return axios.get('/api/users')
            .then(response => response)
            .catch(error => error);
    }
}
