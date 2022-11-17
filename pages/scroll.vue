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
								<span class="menu-category-link"
									><NuxtLink to="/">人気着信音</NuxtLink></span
								>
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
							<div class="menu-category-item">
								<span class="menu-category-link">Scroll</span>
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
					<h2 class="section-tl">新着着信音</h2>
					<div class="tones-ls" style="flex-direction: column">
						<div class="tones-item" v-for="(item, index) in list" :key="index">
							<Ringtone :value="item" :index="index"></Ringtone>
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

	const { data: arrayList, refresh } = await useFetch(
		() => "https://hiappo.app/getlist",
		{ method: "get", params: { lang: "ja" } }
	);
	list.value = arrayList._value.list;

	let options = {
		root: null,
		rootMargin: "0px 0px 300px 0px",
		threshold: 0,
	};

	// 滑动加载方法
	function scrollLoad() {
		let loadMore = document.getElementById("loadMore");
		let observer = new IntersectionObserver((entries) => {
			// 回调函数
			refresh();
			list.value = list.value.concat(arrayList._value.list);
			lazyload();
			console.log(list.value.length);
		}, options);
		observer.observe(loadMore);
	}

	// 懒加载方法
	function lazyload() {
		let images = document.querySelectorAll("img");
		Array.from(images).length = 30;
		let observer = new IntersectionObserver((entries) => {
			entries.forEach((item) => {
				// 回调函数
				if (item.isIntersecting) {
					item.target.src = item.target.dataset.origin;
					observer.unobserve(item.target);
				}
			});
		}, options);
		images.forEach((item) => observer.observe(item));
	}

	/* 组件挂载 */
	onMounted(() => {
		scrollLoad();
	});
	/* 组件卸载 */
	onUnmounted(() => {});
</script>
