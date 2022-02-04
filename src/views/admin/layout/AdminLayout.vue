<template>
		<AdminTopNav></AdminTopNav>
		<router-view name="sidebar"></router-view>
		<router-view></router-view>
</template>

<script>
import AdminTopNav from "../layout/AdminTopNav"
export default {
	name: "AdminLayout",
	components: {AdminTopNav}
}
</script>

<style scoped>

</style>
