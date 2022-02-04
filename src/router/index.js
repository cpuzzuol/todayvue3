import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/today/HomeView.vue'
import AdminMainView from '../views/admin/AdminMainView.vue'
import Utils from "../assets/Utils"
import store from '../store'
import axios from "axios";
import StoriesMainView from "../views/admin/stories/StoriesMainView"
import StoriesNewView from "../views/admin/stories/StoriesNewView"
import AdminSidebar from "../views/admin/AdminSidebar"
// import StoriesLandingView from "../views/stories/StoriesLandingView"
// import StoriesLandingView2 from "../views/stories/StoriesLandingView2"
// import VueCookies from "vue-cookies";

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
		meta: {
			requiresAuth: false
		}
	},
	{
		path: '/admin',
		name: 'Admin',
		components: {
			default: AdminMainView
		},
		meta: {
			requiresAuth: true
		},
		children: [
			{
				path: 'stories',
				name: 'StoriesMain',
				components: {
					default: StoriesMainView,
					sidebar: AdminSidebar
				},
				children: [
					{
						path: 'new',
						name: 'NewStory',
						components: {
							stories: StoriesNewView
						}
					}
				]
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach(async (to,from,next) => {
	if(to.matched.some(record => record.meta.requiresAuth)) {
		const login = await Utils.checkLogin(axios)
		store.state.apiUser = login.user
		store.state.apiRoles = login.roles
	}
	next()
})
export default router
