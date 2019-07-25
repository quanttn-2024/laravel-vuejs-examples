<template>
    <div class="row">
        <div class="col-xs-12">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ $t('common.members') }}</h3>
                    <div class="pull-right">
                        <div class="dt-buttons btn-group">
                            <router-link class="btn btn-primary btn-flat action-item" :to="{ path: '/members/create' }" tag="div">
                                <span>
                                    <i class="fa fa-plus"></i> &nbsp;
                                    {{ $t('common.create') }}
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="box-body" v-if="listMembers">
                    <div v-if="listMembers.length">
                        <table id="example2" class="table table-bordered table-hover">
                            <thead>
                                <tr class="label-primary">
                                    <th class="center-content">{{ $t('common.number') }}</th>
                                    <th scope="col">{{ $t('common.name') }}</th>
                                    <th scope="col">{{ $t('common.email') }}</th>
                                    <th scope="col" class="action-table">{{ $t('common.actions') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(member, index) in listMembers" :key="index">
                                    <td class="center-content">{{ index + 1 }}</td>
                                    <td>{{ member.name }}</td>
                                    <td>{{ member.email }}</td>
                                    <td class="action-table">
                                        <router-link class="btn btn-default btn-edit btn-xs btn-flat" :to="{ path: `/members/edit/${member.id}` }">
                                            <i class="fa fa-pencil"></i>
                                        </router-link>
                                        <button class="btn btn-danger btn-xs member__action bnt-delete btn-flat" @click="destroy(member.id)">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ListMember',
    data() {
        return {
            listMembers: null,
        };
    },

    computed: {
        ...mapState({
            members: state => state.storeMember.listMembers,
            deleteSuccess: state => state.storeMember.deleteMember,
        }),
    },

    async created() {
        this.getMemberList();
    },

    methods: {
        async getMemberList() {
            await this.$store.dispatch('actionGetMembers', {
                vue: this,
            });

            this.listMembers = this.members;
        },

        destroy(id) {
            this.$store.dispatch('actionDeleteMember', {
                vue: this,
                id: id,
            });

            this.getMemberList();
        },
    }
}
</script>
