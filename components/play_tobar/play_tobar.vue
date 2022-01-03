<template>
	<view>
		<view>
			<text>{{ myName }} ></text>
			<view class="card">
				<view class="music_image" v-for="(item, index) in cardInfo" :key="index" :style="{ height: myHeight }">
					<image :src="item.coverUrl" mode="scaleToFill" class="img"></image>
					<view style="margin: 15rpx 0;">
						<text >{{ item.albumName }}</text>
					</view>
					<view>
						<text class="albuName">{{ item.artistName }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'play_tobar',
	props: {
		cardInfo: {
			type: Array,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		height: {
			type: String,
			default: '200rpx'
		}
	},
	data() {
		return {
			myCardInfo: this.cardInfo,
			myHeight: this.height,
			myName: this.name
		};
	},
	mounted() {
		console.log(this.myCardInfo);
	}
};
</script>

<style lang="less" scoped>
.card {
	display: flex;
	justify-content: space-around;
	.music_image {
		width: 30%;
		.img {
			width: 100%;
			height: 100%;
		}
		.albuName {
			display: inline-block;
		}
	}
}
</style>
