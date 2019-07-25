import Admin from './components/Admin';

import MemberList from './modules/user/views/List';
import MemberForm from './modules/user/views/Form';

// import ErrorPage from './components/errors/ErrorPage';

const routes = [{
    path: '/',
    name: 'Dashboard',
    component: Admin,
    children: [{
        path: '/members',
        name: 'Members',
        component: MemberList,
    },
    {
        path: '/members/create',
        name: 'Member Create',
        component: MemberForm,
    }
    ]
// {
//     path: '*',
//     name: 'Error Page',
//     component: ErrorPage,
// },
}];

export default routes;
