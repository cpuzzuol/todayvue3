<template>
  <div>
		<PublicNavigation></PublicNavigation>
    HOME
		<router-view></router-view>
  </div>
</template>

<script>
import PublicNavigation from "../../components/PublicNavigation"
export default {
  name: 'HomeView',
  components: {PublicNavigation},
};
</script>
