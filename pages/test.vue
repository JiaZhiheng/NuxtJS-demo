<template>
	<div>
		<div>
			<Link rel="preconnect" href="https://fonts.googleapis.com" />
			<Link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
				crossorigin=""
			/>
			<Meta name="description" content="description" />
		</div>
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
								<span class="menu-category-link">
									<NuxtLink to="/">人気着信音</NuxtLink>
								</span>
							</div>
							<div class="menu-category-item">
								<span class="menu-category-link">
									<NuxtLink to="/home">新着着信音</NuxtLink>
								</span>
							</div>
							<div class="menu-category-item">
								<span class="menu-category-link"> Test </span>
							</div>
							<div class="menu-category-item">
								<span class="menu-category-link">
									<NuxtLink to="/scroll">Scroll</NuxtLink>
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
					<h2 class="section-tl">{{ name }}</h2>
					<div class="tones-ls">
						<div class="tones-item" v-for="(item, index) in list" :key="index">
							<Music :value="item" :index="index"></Music>
						</div>
					</div>
					<a class="tones-more" id="loadMore" @click="ja()">获取日文数据</a>
					<a class="tones-more" id="loadMore" @click="en()">获取英文数据</a>
					<a class="tones-more" id="loadMore" @click="remove()">清空数据</a>
				</section>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from "vue";
	const list = ref([]);
	const name = ref("");

	// 定义Head （优先级高于全局的配置）
	useHead({
		title: "test",
		meta: [
			{
				name: "description", // 是一段简短而精确的、对页面内容的描述
				content: "Diggo",
			},
			{
				name: "keywords", // 与页面内容相关的关键词，使用逗号分隔。
				content: "Hiappo",
			},
		],
		// script: [
		// 	{
		// 		src: "https://third-party-script.com",
		// 		body: false, // 附加到标记的末尾
		// 	},
		// ],
	});

	// 获取英文数据
	const { data: EnglishList, refresh: English } = await useFetch(
		() => "https://hiappo.app/getlist",
		{ method: "get", params: { lang: "" } }
	);

	// 获取日文数据
	// 解构赋值
	const { data: JapanList, refresh: Japan } = await useFetch(
		() => "https://hiappo.app/getlist",
		{ method: "get", params: { lang: "ja" } }
	);

	// 重新获取日文数据
	const ja = () => {
		name.value = "日文数据";
		Japan();
		list.value = JapanList._value.list;
		console.log(list.value);
	};

	// 重新获取英文数据
	const en = () => {
		name.value = "英文数据";
		English();
		list.value = EnglishList._value.list;
		console.log(list.value);
	};

	const remove = () => {
		list.value = [];
	};
</script>
