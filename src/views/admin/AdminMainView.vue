<template>
	<div>
		<AdminNavigation v-if="$route.matched.some(record => record.meta.requiresAuth)"></AdminNavigation>
		<router-view></router-view>
		<router-view name="sidebar"></router-view>
		<va-card color="background" style="padding: 0.75rem;">
			<div class="row">
				<div class="flex md12">
					<div class="item">md12</div>
				</div>
				<div class="flex md6">
					<div class="item">md6</div>
				</div>
				<div class="flex md6">
					<div class="item">md6</div>
				</div>
			</div>
			<br />
			<div class="row">
				<div class="flex md12">
					<div class="item">md12</div>
				</div>
				<div class="flex md9">
					<div class="item">md9</div>
				</div>
				<div class="flex md3">
					<div class="item">md3</div>
				</div>
			</div>
		</va-card>
	</div>
</template>
<script>
import AdminNavigation from "../../components/AdminNavigation"
export default {
	name: 'AdminMainView',
	components: {AdminNavigation},
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


