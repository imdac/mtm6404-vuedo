const routes = [
	{ path: '/', name: 'Lists', component: httpVueLoader('pages/lists.vue') },
	{ path: '/list/:id', name: 'List', component: httpVueLoader('pages/list.vue'), props: true }
]

const router = new VueRouter ({
	routes
})
