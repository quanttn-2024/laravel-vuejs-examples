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

    /**
     * Create a member
     *
     * @param member
     *
     * @returns {AxiosPromise<any>}
     */
    static save(member) {
        return axios.post('/api/users', member)
            .then(response => response)
            .catch(error => error);
    }

    /**
     * Show a member
     *
     * @param id
     *
     * @returns {AxiosPromise<any>}
     */
    static show(id) {
        return axios.get(`/api/users/${ id }`)
            .then(response => response)
            .catch(error => error);
    }

    /**
     * Delete a member
     *
     * @param id
     *
     * @returns {AxiosPromise}
     */
    static destroy(id) {
        return axios.delete(`/api/users/${ id }`)
            .then(response => response)
            .catch(error => error);
    }
}
