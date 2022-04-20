import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import(/* webpackChunkName: "home" */ '@/components/HelloWorld.vue')
const Blog = () => import(/* webpackChunkName: "Blog" */ '@/components/Blog.vue')

export default new Router({
    mode: 'history',

    routes: [

        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Blog',
            name: 'Blog',
            component: Blog,
        },
    ]
});