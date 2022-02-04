<template>
	<div>
		<template v-if="$route.name === 'StoriesMain'">
			<h1>Stories Dashboard</h1>
			<StoriesLanding></StoriesLanding>
		</template>
		<router-view name="stories"></router-view>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import StoriesLanding from "../../../components/stories/StoriesLanding";

export default {
	name: 'StoriesMainView',
	components: {StoriesLanding},
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
