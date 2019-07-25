<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <!-- <div class="user-panel">
                <div class="pull-left image">
                    <img src="/img/noavatar.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>{{ user.name }}</p>
                    <a href="#">
                        <i class="fa fa-circle text-success"></i>
                        {{ $t('words.online') }}
                    </a>
                </div>
            </div> -->
            <!--
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Search...">
                    <span class="input-group-btn">
                        <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </form>
            -->
            <ul class="sidebar-menu" data-widget="tree">
                <!-- <li class="header">{{ $t('common.main_navigation') }}</li>
                <li :class="{'active': navigation == 'dashboard'}">
                    <router-link class="page-sidebar__item" :to="{ path: '/' }">
                        <i class="fa fa-dashboard"></i>
                        <span>{{ $t('common.dashboard') }}</span>
                    </router-link>
                </li>
                <li :class="{'active': navigation == 'team'}" v-if="$user.can('browse_group_teams')">
                    <router-link class="page-sidebar__item" :to="{ path: '/teams' }">
                        <i class="fa fa-cubes"></i> <span> {{ $t('common.teams') }}</span>
                    </router-link>
                </li>
                <li :class="{'active': navigation == 'member'}" v-if="$user.can('browse_group_members')">
                    <router-link class="page-sidebar__item" :to="{ path: '/members' }">
                        <i class="fa fa-users"></i> <span>{{ $t('common.members') }}</span>
                    </router-link>
                </li>

                <li :class="{'active': navigation == 'monthly'}" v-if="$user.can('browse_monthly_reports')">
                    <router-link class="page-sidebar__item" :to="{ path: '/monthly/reports' }">
                        <i class="fa fa-book"></i> <span>{{ $t('common.monthly_reports') }}</span>
                    </router-link>
                </li> -->
                <li class="active">
                    <router-link class="page-sidebar__item">
                        <i class="fa fa-users"></i> <span>{{ $t('common.members') }}</span>
                    </router-link>
                </li>
            </ul>
        </section>
    </aside>
</template>
