<template>
	<div style="margin: 2rem;">
		Sidebar:
		<router-link to="/">EMU Today</router-link> |
		<router-link to="/admin">Dashboard</router-link> |
		<router-link to="/admin/stories">Stories</router-link>
	</div>
</template>
<script>

export default {
	name: 'AdminSidebar',
	components: {},
	data() {
		return {
			minimized: false
		}
	},
	created() {

	}
}
</script>
