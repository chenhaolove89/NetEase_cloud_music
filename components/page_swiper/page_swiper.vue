<template>
	<view>
		<view class="swiper">
			<view class="swiperImages">
				<swiper
					:indicator-dots="true"
					:autoplay="true"
					:interval="3000"
					:duration="1000"
					circular
					indicator-active-color="#dc4238"
					indicator-color="#fefefe"
					:style="{ height: imageHeight }"
				>
					<swiper-item v-for="item in swiperImageInfo" :key="item.id" >
						<image :src="item.picUrl" mode="scaleToFill" class="swiperImage"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name:"page_swiper",
	data() {
		return {
			imageHeight:this.height,
			swiperImageInfos:this.swiperImageInfo
		};
	},
	props:{
		swiperImageInfo:{
			type:Array,
			required:true,
		},
		height:{
			type:String,
			default:'400rpx'
		}
	},
	watch:{
		swiperImageInfo(){
			this.swiperImageInfos = this.swiperImageInfo
		}
	},

}
</script>

<style lang="less" scoped>
.swiper {
	display: flex;
	justify-content: center;
}
.swiperImages {
	width: 98%;
	height: 400rpx;
	.swiperImage {
		width: 100%;
		height: 100%;
	}
}
</style>
