<template>
    <section class="content-header">
        <h1>
            {{ $t('common.dashboard') }}
        </h1>
        <ol class="breadcrumb">
            <li v-for="(item, index) in list" :key="index">
                <span class="active" v-if="isLast(index)">
                    <router-link :to="item">
                        {{ showName(item) }}
                    </router-link>
                </span>
                <div class="active" @click="setNavigation('dashboard')" v-else>
                    <router-link :to="item">
                        <i class="fa fa-home"></i>
                        {{ showName(item) }}
                    </router-link>
                </div>
            </li>
        </ol>
    </section>
</template>

<script>
export default {
    name: 'AppBreadcrumb',
    props: {
        list: {
            type: Array,
            required: true,
            default: () => [],
        },
    },

    methods: {
        isLast(index) {
            return index !== 0;
        },

        showName(item) {
            let name = item.name;
            if (item.meta && item.meta.label) {
                name = item.meta.label;
            }

            return name;
        },
    },
}
</script>

<style>
li.no-arrow::before {
    display: none;
}

.active a {
    color: #444;
}
</style>
