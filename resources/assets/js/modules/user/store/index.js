import MemberService from '../api';

const LIST_MEMBER = 'LIST_MEMBER';

const state = {
    listMembers: null,
};
const mutations = {
    [LIST_MEMBER](state, { listMembers }) {
        return state.listMembers = listMembers;
    },
};

const actions = {
    async actionGetMembers ({ commit }, { vue }) {
        let response = await MemberService.getMembers();

        if (response.status === 200) {
            return commit(LIST_MEMBER, { listMembers: response.data });
        }

        // let errorResponse = response.response;
        // return Helper.handleError(vue, errorResponse.status);
    },
};

const storeMember = {
    state,
    actions,
    mutations,
};

export default storeMember;
