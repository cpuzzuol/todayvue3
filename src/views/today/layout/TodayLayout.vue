<template>
	<TodayTopNav></TodayTopNav>
	<router-view></router-view>
</template>

<script>
import TodayTopNav from '../layout/TodayTopNav'
export default {
	name: "TodayLayout",
	components: { TodayTopNav }
}
</script>

<style scoped>

</style>
