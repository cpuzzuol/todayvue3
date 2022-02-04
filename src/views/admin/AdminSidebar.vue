<template>
	<va-sidebar :minimized="minimized" textColor="dark" minimizedWidth="0">
		<va-sidebar-item>
			<va-sidebar-item-content>
				<va-icon name="home" />
				<va-sidebar-item-title v-if="!minimized" style="height: 24px;">
					SIDEBAR!
				</va-sidebar-item-title>
			</va-sidebar-item-content>
		</va-sidebar-item>
	</va-sidebar>
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
