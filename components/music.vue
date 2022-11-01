<template>
	<svg xmlns="http://www.w3.org/2000/svg" style="display: none">
		<defs>
			<symbol id="icon-ringstart" viewBox="0 0 70 70">
				<path
					d="M50.4597734,36.1314324 L26.4920573,49.6784024 C26.0112587,49.9501581 25.4011929,49.7806954 25.1294372,49.2998968 C25.044589,49.1497808 25,48.9802752 25,48.8078396 L25,21.7138995 C25,21.1616148 25.4477153,20.7138995 26,20.7138995 C26.1724356,20.7138995 26.3419412,20.7584885 26.4920573,20.8433367 L50.4597734,34.3903067 C50.940572,34.6620624 51.1100347,35.2721282 50.838279,35.7529268 C50.7488503,35.9111468 50.6179934,36.0420037 50.4597734,36.1314324 Z"
					id="Play-triangle"
					fill="#FFFFFF"
				></path>
				<g class="sc-fzoydu ctZjfV">
					<circle
						opacity="1"
						cx="35"
						cy="35"
						r="34"
						class="sc-fzoJMP gWdKUw"
					></circle>
					<circle
						stroke-dasharray="213.62830044410595"
						stroke-dashoffset="213"
						r="34"
						cx="35"
						cy="35"
						class="circle"
					></circle>
				</g>
			</symbol>
		</defs>
	</svg>
	<div class="tones-wp">
		<div class="tones-con">
			<a class="coverlink" href="#"></a>
			<a class="tones-name" href="#">{{ data.value.name }}</a>
			<div class="tones-play">
				<div class="ringend">
					<svg class="icon-ring">
						<use xlink:href="#icon-ringstart"></use>
					</svg>
				</div>
			</div>
			<img
				:src="'/tones/' + ((data.index % 30) + 1) + '.png'"
				class="tones-img"
			/>
		</div>
	</div>
</template>
<script>
	import { defineComponent } from "vue";
	export default defineComponent({
		name: "Music",
		props: { value: Object, index: Number }, // 从父组件接收的参数
		setup(props) {
			const data = ref(props);

			return {
				data,
			};
		},
	});
</script>
