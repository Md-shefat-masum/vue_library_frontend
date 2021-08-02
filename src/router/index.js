import { createRouter, createWebHistory } from "vue-router";

import dashboard from "../views/backend/dashboard";
import student from "../views/backend/student";
import studentLayout from "../views/backend/student/studentLayout";
import studentBookList from "../views/backend/student/bookList";
import studentProfile from "../views/backend/student/studentProfile";

import admin from "../views/backend/admin";
import adminLayout from "../views/backend/admin/adminLayout";
import bookEntry from "../views/backend/admin/bookEntry";
import bookList from "../views/backend/admin/bookList";
import entryList from "../views/backend/admin/entryList";
import newEntry from "../views/backend/admin/newEntry";
import adminProfile from "../views/backend/admin/profile";
import userList from "../views/backend/admin/userList";

import management from "../views/backend/management";
import managementLayout from "../views/backend/management/managementLayout";
import managementBookList from "../views/backend/management/bookList";
import managementEntryList from "../views/backend/management/entryList";
import managementNewEntry from "../views/backend/management/newEntry";
import managementProfile from "../views/backend/management/profile";

import authLayout from "../views/frontend/authLayout";
import login from "../views/frontend/login";
import signup from "../views/frontend/signup";
import portfolio from "../views/frontend/portfolio";

const routes = [
  {
    path: "/dashboard",
    name: "dasboard",
    component: dashboard,
  },

  {
    path: "/admin",
    component: adminLayout,
    children: [
      {
        path: "",
        name: "admin",
        component: admin,
      },
      {
        path: "profile",
        name: "adminProfile",
        component: adminProfile,
      },
      {
        path: "users",
        name: "userList",
        component: userList,
      },
      {
        path: "book-list",
        name: "bookList",
        component: bookList,
      },
      {
        path: "book-entry",
        name: "bookEntry",
        component: bookEntry,
      },
      {
        path: "entry-list",
        name: "entryList",
        component: entryList,
      },
      {
        path: "new-entry",
        name: "newEntry",
        component: newEntry,
      },
    ],
  },

  {
    path: "/student",
    component: studentLayout,
    children: [
      {
        path: "",
        name: "student",
        component: student,
      },
      {
        path: "profile",
        name: "studentProfile",
        component: studentProfile,
      },
      {
        path: "book-list",
        name: "studentBookList",
        component: studentBookList,
      },
    ],
  },

  {
    path: "/management",
    component: managementLayout,
    children: [
      {
        path: "",
        name: "management",
        component: management,
      },
      {
        path: "book-list",
        name: "managementBookList",
        component: managementBookList,
      },
      {
        path: "entry-list",
        name: "managementEntryList",
        component: managementEntryList,
      },
      {
        path: "new-entry",
        name: "managementNewEntry",
        component: managementNewEntry,
      },
      {
        path: "profile",
        name: "managementProfile",
        component: managementProfile,
      },
    ],
  },

  {
    path: "/auth",
    component: authLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: login,
      },
      {
        path: "signup",
        name: "signup",
        component: signup,
      },
    ],
  },
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
