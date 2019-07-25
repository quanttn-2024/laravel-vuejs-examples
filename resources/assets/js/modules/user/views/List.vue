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
                <div class="box-body">
                    <div>
                        <table id="example2" class="table table-bordered table-hover">
                            <thead>
                                <tr class="label-primary">
                                    <th class="center-content">{{ $t('common.number') }}</th>
                                    <th scope="col">{{ $t('common.name') }}</th>
                                    <th scope="col">{{ $t('common.email') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="center-content">1</td>
                                    <td>justin</td>
                                    <td>justin@example.com</td>
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
export default {
    name: 'ListMember',
}
</script>
