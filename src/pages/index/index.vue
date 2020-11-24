<template>
	<view class="content">
		<image class="logo" src="../../static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			<x-commodity :data="data"></x-commodity>
		</view>
	</view>
</template>

<script lang="ts">
	import { Vue, Component } from 'vue-property-decorator'

	@Component
	export default class Index extends Vue {
		title = 'Hello'
		data = {
			title: 'sdfsdfasdddddfasdf'
		}
		onLoad() {

		}

		mounted() {
			console.log(this.$options)
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
