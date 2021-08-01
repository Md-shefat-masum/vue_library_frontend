import {
    createRouter,
    createWebHistory
} from "vue-router";

import dashboard from '../views/backend/dashboard';
import student from '../views/backend/student';

import admin from '../views/backend/admin';
import adminLayout from '../views/backend/admin/adminLayout';
import bookEntry from '../views/backend/admin/bookEntry';
import bookList from '../views/backend/admin/bookList';
import users from '../views/backend/admin/users';

import management from '../views/backend/management';

import authLayout from '../views/frontend/authLayout';
import login from '../views/frontend/login';
import signup from '../views/frontend/signup';
import portfolio from '../views/frontend/portfolio';

const routes = [{
        path: "/dashboard",
        name: "dasboard",
        component: dashboard,
    },

    {
        path: '/admin',
        component: adminLayout,
        children: [
            {
                path: '/',
                name: 'admin',
                component: admin,
            },
            {
                path: '/users',
                name: 'users',
                component: users,
            },
            {
                path: '/book-list',
                name: 'bookList',
                component: bookList,
            },
            {
                path: 'book-entry',
                name: 'bookEntry',
                component: bookEntry,
            }
        ]
    } ,

    {
        path: "/student",
        name: "student",
        component: student,
    },
    {
        path: "/management",
        name: "management",
        component: management,
    },

    {
        path: '/auth',
        component: authLayout,
        children: [
            {
                path: "/login",
                name: "login",
                component: login,
            },
            {
                path: "/signup",
                name: "signup",
                component: signup,
            }
        ]
    } ,
    {
        path: "/portfolio",
        name: "portfolio",
        component: portfolio,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;