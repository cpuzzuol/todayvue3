<template>
	<div>
		<h1>STORIES!</h1>
		<router-view name="stories"></router-view>
	</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
	name: 'StoriesMainView',
	components: {},
	data() {
		return {
			loading: true
		}
	},
	created() {

	},
	computed: {
		...mapState(['apiUser', 'apiRoles'])
	}
}
</script>
