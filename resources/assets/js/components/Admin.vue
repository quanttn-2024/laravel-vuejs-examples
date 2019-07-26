<template>
    <div class="wrapper" style="position: relative">
        <app-header></app-header>
        <app-aside></app-aside>
        <div class="content-wrapper">
            <app-breadcrumd :list="listRoute"></app-breadcrumd>
            <section class="content">
                <router-view></router-view>
            </section>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '@/components/header/Header';
import AppAside from '@/components/aside/views/Aside';
import AppBreadcrumd from '@/components/breadcrumb/Breadcrumb';
import AppFooter from '@/components/footer/Footer';

export default {
    name: 'Admin',
    components: {
        AppHeader,
        AppAside,
        AppBreadcrumd,
        AppFooter,
    },

    computed: {
        listRoute() {
            return this.$route.matched;
        },
    },
}
</script>

<style>
.content-wrapper {
    overflow-x: auto;
    height: calc(100vh - 50px);
}

body::-webkit-scrollbar {
    display: none;
}
</style>
