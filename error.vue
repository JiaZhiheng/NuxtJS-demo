<template>
	<div>
		<div id="app">
			<header class="header">
				<div class="wrapper">
					<div class="header-con">
						<a
							class="logo"
							href="/ja-hiappo/"
							rel="home"
							title="Best App News &amp; Free APK Download"
						></a>
						<input type="checkbox" id="topmenu" />
						<label for="topmenu" class="opacityblack"></label>
						<label for="topmenu" class="topmenu-box">
							<span class="menu-icon"></span>
						</label>
						<input type="checkbox" id="searchmenu" />
						<label for="searchmenu" class="opacitywhite"></label>
						<label for="searchmenu" class="search-icon-wp">
							<span class="search-icon"></span>
						</label>
						<div class="notfound-box">
							<img class="notfound-img" src="./public/hiappo_404.png" alt="" />
							<div class="notfound-title">着信音が失われました</div>
							<div class="notfound-message">
								別の着信音を入手してみませんか？
							</div>
							<NuxtLink class="notfound-button" to="/">
								ホームページに戻る
							</NuxtLink>
						</div>
						<div class="menu-category">
							<div class="menu-category-item">
								<span class="menu-category-link">人気着信音</span>
							</div>
							<div class="menu-category-item">
								<span class="menu-category-link">
									<NuxtLink to="/home">新着着信音</NuxtLink>
								</span>
							</div>
							<div class="menu-category-item">
								<span class="menu-category-link">
									<NuxtLink to="/test">Test</NuxtLink>
								</span>
							</div>
						</div>
						<div class="search">
							<div class="search-pos"><span class="search-icon"></span></div>
							<form class="search-form" action="/ja-hiappo/search-ringtones">
								<input
									class="sea-text"
									type="text"
									name="q"
									required=""
									placeholder="無料着信音を検索"
									value=""
								/>
								<button class="sea-btn" type="submit"></button>
							</form>
						</div>
					</div>
				</div>
			</header>
			<div class="wrapper">
				<section>
					<h2 class="section-tl">人気着信音</h2>
					<div class="tones-ls">
						<div class="tones-item" v-for="(item, index) in list" :key="index">
							<Music :value="item" :index="index"></Music>
						</div>
					</div>
					<a class="tones-more" id="loadMore">もっと見る</a>
				</section>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	const list = ref("");

	const { data: arrayList } = await useFetch(
		() => "https://hiappo.app/getlist",
		{ method: "get", params: { lang: "ja" } }
	);
	list.value = arrayList._value.list;

	defineProps({
		error: Object,
	});
</script>
