import { createRouter, createWebHistory } from 'vue-router'
import Products from '../components/Products.vue'
import Product from '../components/Product.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import Sidebar from '../components/Sidebar.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/', 
        name: 'products',
        components: {
            default: Products,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/product/:id',
        name: 'product',
        components: {
            default: Product,
            LeftSideBar: Sidebar
        },
        
    },
    {
        path: '/about', 
        name: 'about',
        components: {
            default: About,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/contact',
        name: 'contact',
        components: {
            default: Contact,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/posts', 
        name: 'posts',
        components: {
            default: Posts,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/post/:id',
        name: 'post',
        components: {
            default: Post,
            LeftSideBar: Sidebar
        },
        
    },
    { 
    path: '/:pathMatch(.*)*', 
    name: 'notfound',
    components: {
        default: NotFound,
        LeftSideBar: Sidebar
    },
    
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router