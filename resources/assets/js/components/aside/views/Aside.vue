<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <ul class="sidebar-menu" data-widget="tree">
                <li>
                    <router-link class="page-sidebar__item" :to="{ path: '/members' }">
                        <i class="fa fa-user"></i> <span> {{ $t('common.members') }}</span>
                    </router-link>
                </li>
            </ul>
        </section>
    </aside>
</template>

<script>
export default {
    name: 'AppAside'
}
</script>

<style>
li a span.fa {
    text-align: right!important;
    margin-right: 4px;
}
</style>
