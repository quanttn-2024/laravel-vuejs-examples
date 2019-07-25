<template>
    <div class="row">
        <div class="col-md-9">
            <form v-on:keydown.enter.prevent="save()">
                <div class="box" v-bind:class="errors && errors.length != 0 ? 'box-danger' : 'box-primary'">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="user-name" class="required">{{ $t('common.name') }}
                                <span class="require-input">*</span>
                            </label>
                            <div class="form-group" v-bind:class="{ 'has-error': errors && objectNotEmpty(errors.name) }">
                                <input type="text" class="form-control" id="user-name" v-model="member.name">
                                <span class="help-block" v-if="errors && objectNotEmpty(errors.name)">{{ errors.name[0] }}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user-email">{{ $t('common.email') }}
                                <span class="require-input">*</span>
                            </label>
                            <div class="form-group" v-bind:class="{ 'has-error': errors && objectNotEmpty(errors.email) }">
                                <input type="text" class="form-control" id="user-description" v-model="member.email">
                                <span class="help-block" v-if="errors && objectNotEmpty(errors.email)">{{ errors.email[0] }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div class="col-md-3">
            <div class="box" v-bind:class="errors && errors.length != 0 ? 'box-danger' : 'box-primary'">
                <div class="box-header with-border"><i class="fa fa-save"></i>
                    <h3 class="box-title"> {{ $t('common.publish') }} </h3>
                </div>
                <div class="box-body" style="text-align: center;">
                    <button type="submit" class="btn btn-success btn-flat btn-format" @click="save()">
                        <i class="fa fa-check-circle"></i> &nbsp;
                        {{ $t('common.save') }}
                    </button>
                    <button type="submit" class="btn btn-primary btn-flat btn-format" @click="$router.go(-1)">
                        <i class="fa fa-backward"></i> &nbsp;
                        {{ $t('common.back') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'FormMember',
    data() {
        return {
            member: {
                id: null,
                name: '',
                email: '',
                password: 123456,
            },
        };
    },

    computed: {
        ...mapState({
            createSucces: state => state.storeMember.createSucces,
            errors: state => state.storeMember.errors,
        }),
    },

    methods: {
        save() {
            this.$store.dispatch('actionCreateMember', {
                vue: this,
                params: this.member,
            });

            this.$router.push('/members');
        },

        objectNotEmpty(object) {
            return !_.isEmpty(object);
        },
    }
}
</script>

<style>
.require-input {
    color: red;
}
</style>
