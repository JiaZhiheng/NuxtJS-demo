let plugins = [];
if (process.env.NODE_ENV === "production") {
	plugins.push("transform-remove-console");
}

module.exports = {
	babel: {
		plugins,
	},
};
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		// head部分的配置 https://v3.nuxtjs.org/getting-started/seo-meta#seo-and-meta
		// 关于元标签的作用 https://juejin.cn/post/7089271039842058253
		head: {
			charset: "utf-8",
			viewport: "width=device-width,initial-scale=1.0",
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
					crossorigin: "",
				},
				{
					rel: "icon",
					href: "/favicon.ico",
				},
			],
			meta: [
				{
					name: "description",
					content:
						"無料の着信音を配布しているスマートフォン向け着信音ダウンロードサイトです。クラシック、童謡、シンプル、効果音などの電話やメール・SMSで設定できる着信音ファイルが無料でダウンロードできます。",
				},
				{
					name: "keywords",
					content:
						"着信音,着信音ダウンロード,無料着信音,android着信音,iphone着信音,mp3着信音,m4a着信音,着メロ,呼出音,通知音,メッセージ音,スマホ着信音",
				},
			],
		},
	},
});

/** 亟待解决的问题
 * 用插件的方式清除console.log
 */
