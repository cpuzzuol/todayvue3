<template>
	<h1>Today 2023</h1>
	<router-view></router-view>
	<h2>Practice CSS Grid</h2>
	<div class="container">
		<div class="item-a">HEADER</div>
		<div class="item-b">MAIN</div>
		<div class="item-c">SIDEBAR</div>
		<div class="item-d">FOOTER</div>
	</div>

	<h2>Bulma</h2>
	<section class="hero is-primary">
		<div class="hero-body">
			<div class="container">Bloop</div>
		</div>
	</section>
	<section class="section">
		<div class="container">
			<div class="columns is-vcentered">
				<div class="column">
					NEWS - There is stuff going on, like, everywhere!
					<div class="buttons">
						<a class="button is-info">
							Find out more</a>
						<a class="button is-danger is-outlined">
							Buy now</a>
					</div>
				</div>
				<div class="column">
					<div class="column">
						<figure class="image is-16by9">
							<img src="../../assets/logo.png">
						</figure>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
};
</script>
<style scoped lang="scss">
//.container {
//	//display: grid;
//	//grid-template-columns: 1fr 1fr;
//	//grid-template-rows: min-content 1fr min-content;
//	.item-a {
//		grid-area: header;
//		border: 1px solid blue;
//	}
//	.item-b {
//		grid-area: main;
//		border: 1px solid black;
//	}
//	.item-c {
//		grid-area: sidebar;
//		border: 1px solid red;
//	}
//	.item-d {
//		grid-area: footer;
//		border: 1px solid green;
//	}
//	display: grid;
//	grid-template-columns: repeat(4, 25%);
//	grid-template-rows: 40px 12em 70px;
//	grid-template-areas:
//    "header header header header"
//    "main main  . sidebar"
//    "footer footer footer footer";
//}
</style>
