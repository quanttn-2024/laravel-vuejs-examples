import MemberService from '../api';

const LIST_MEMBER = 'LIST_MEMBER';
const CREATE_SUCCESS = 'CREATE_SUCCESS';
const ERRORS_MEMBER = 'ERRORS_MEMBER';
const DETAIL_MEMBER = 'DETAIL_MEMBER';
const DELETE_MEMBER = 'DELETE_MEMBER';

const state = {
    listMembers: null,
    createSucces: false,
    errors: null,
    detailMember: null,
    deleteMember: false,
};
const mutations = {
    [LIST_MEMBER](state, { listMembers }) {
        return state.listMembers = listMembers;
    },
    [CREATE_SUCCESS](state, { status }) {
        return state.createSucces = status;
    },

    [ERRORS_MEMBER](state, { errors }) {
        return state.errors = errors;
    },

    [DETAIL_MEMBER](state, { detailMember }) {
        return state.detailMember = detailMember;
    },

    [DELETE_MEMBER](state, { deleteMember }) {
        return state.deleteMember = deleteMember;
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

    async actionCreateMember ({ commit }, { vue, params }) {
        let response = await MemberService.save(params);

        if (response.status === 200) {
            return commit(CREATE_SUCCESS, { status: true });
        }

        let errorResponse = response.response;

        if (errorResponse.status === 422){
            commit(CREATE_SUCCESS, { status: false });
            return commit(ERRORS_MEMBER, { errors: errorResponse.data.errors });
        }
    },

    async actionShowMember ({ commit }, { vue, id }) {
        let response = await MemberService.show(id);

        if (response.status === 200) {
            return commit(DETAIL_MEMBER, { detailMember: response.data });
        }
    },

    async actionDeleteMember ({ commit }, { vue, id }) {
        let response = await MemberService.destroy(id);

        if (response.status === 200) {
            return commit(DELETE_MEMBER, { status: true });
        }

        commit(DELETE_MEMBER, { status: false });
    },
};

const storeMember = {
    state,
    actions,
    mutations,
};

export default storeMember;
