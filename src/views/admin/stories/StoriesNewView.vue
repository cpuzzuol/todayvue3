<template>
	<div>
		<StoryForm></StoryForm>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import StoryForm from "../../../components/stories/StoryForm";

export default {
	name: 'StoriesNewView',
	components: {StoryForm},
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
