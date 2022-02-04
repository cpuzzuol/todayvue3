<template>
	<div>
		stories2
	</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
	name: 'StoriesLandingView2',
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
