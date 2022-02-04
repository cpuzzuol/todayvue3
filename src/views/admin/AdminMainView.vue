<template>
	<AdminDashboardView v-if="$route.name == 'Admin'"></AdminDashboardView>
	<router-view></router-view>
</template>
<script>
import AdminDashboardView from "./AdminDashboardView";
export default {
	name: 'AdminMainView',
	components: {AdminDashboardView},
	data() {
		return {}
	},
	created() {

	}
}
</script>

<style scoped lang="scss">
	//.w-app {padding: 4px;background-color: #fffeed;}
	//header, footer, aside, main {
	//	margin: 4px;
	//	padding: 12px;
	//	text-transform: uppercase;
	//	color: #666;
	//	border: 1px solid rgba(0, 0, 0, 0.07);
	//}
	//header, footer {background-color: #e9f8fe;min-height: 60px;}
	//aside {background-color: #fef2ff;}
	//main {background-color: #efffed;}
</style>


