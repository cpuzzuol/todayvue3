<template>
	<div>
		stories1
	</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
	name: 'StoriesLandingView',
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
