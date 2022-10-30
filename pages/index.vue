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
						<div class="menu-category">
							<div class="menu-category-item">
								<span class="menu-category-link">人気着信音</span>
							</div>
							<div class="menu-category-item">
								<span class="menu-category-link"
									><NuxtLink to="/home">新着着信音</NuxtLink></span
								>
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
						<div class="tones-item" v-for="(item, index) in list">
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
	import { ref, onMounted } from "vue";
	const list = ref("");
	// const getlist = () => {

	// }

	// 获取日文数据
	const { data: jiagouList, refresh: jiagou } = await useFetch(
		() => "https://hiappo.app/getlist",
		{ method: "get", params: { lang: "ja" } }
	);
	list.value = jiagouList._value.list;

	// 获取英文数据
	const { data: kanggouList, refresh: kanggou } = await useFetch(
		() => "https://hiappo.app/getlist",
		{ method: "get", params: { lang: "" } }
	);
	list.value = kanggouList._value.list;

	// 滑动加载方法
	function scrollLoad() {
		const viewHeight = document.documentElement.clientHeight; // 获取视口高度
		const loadMore = document.getElementById("loadMore"); // 滑动加载标志
		let temptop = document.documentElement.clientTop
			? document.documentElement.clientTop
			: 0;
		const top = loadMore.getBoundingClientRect().top - temptop;
		const bottom = loadMore.getBoundingClientRect().bottom - temptop;
		if (top < viewHeight && bottom >= viewHeight) {
			jiagou();
			list.value = list.value.concat(jiagouList._value.list);
		}
	}

	/* 组件挂载 */
	onMounted(() => {
		window.addEventListener("scroll", scrollLoad, true);
	});
	/* 组件卸载 */
	onUnmounted(() => {
		window.removeEventListener("scroll", scrollLoad, true);
	});
</script>
