<template>
	<view class="content">
		<view class="title">
			<view class="search">
				<icon type="search" size="28rpx" class="searchIcon"></icon>
				<input
					type="text"
					:value="searchValue"
					placeholder="请输入歌手或歌曲名"
					placeholder-class="searchInput"
				/>
			</view>
		</view>
		<view class="Tab">
			<view class="swiper-table">
				<text class="swiperTitle">个性推荐</text>
				<text class="swiperTitle">主播电台</text>
			</view>
			<view class="underline" :style="{ left: underline }"></view>
			<swiper :duration="1000" class="mySwiper" @change="pageAlter">
				<swiper-item>
					<mySwiper :swiperImageInfo="swiperImageInfo"></mySwiper>
					<view class="nav">
						<view class="navIcon"><text class="iconfont">&#xe63b;</text></view>
						<view class="navIcon"><text class="iconfont">&#xe639;</text></view>
						<view class="navIcon"><text class="iconfont">&#xe63a;</text></view>
						<view class="navIcon"><text class="iconfont">&#xe63d;</text></view>
					</view>
					<view class="nav">
						<view v-for="(item, index) in recommendList" :key="index">
							<text>{{ item.name }}</text>
						</view>
					</view>
					<my-tobar :cardInfo="cardInfor" :name="classifyName"></my-tobar>
				</swiper-item>
				<swiper-item>
					<mySwiper :swiperImageInfo="swiperStation"></mySwiper>
					<view class="nav">
						<view class="navIcon"><text class="iconfont">&#xe63b;</text></view>
						<view class="navIcon"><text class="iconfont">&#xe639;</text></view>
						<view class="navIcon"><text class="iconfont">&#xe63a;</text></view>
						<view class="navIcon"><text class="iconfont">&#xe63d;</text></view>
					</view>
					<view class="nav">
						<view v-for="(item, index) in broadcastingStationList" :key="index">
							<text>{{ item.name }}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import { getSwiper, getStation, getNewAlbum } from '../../utils/send_request.js';
import swipers from '../../components/page_swiper/page_swiper.vue';
import myTobar from '../../components/play_tobar/play_tobar.vue';
export default {
	data() {
		return {
			src: '',
			searchValue: '',
			clickTabButton: true,
			swiperImageInfo: [],
			swiperStation: [],
			underline: '165rpx',
			//个性推荐导航
			recommendList: [
				{
					name: '推荐MV',
					path: ''
				},
				{
					name: '歌手榜',
					path: ''
				},
				{
					name: '推荐歌单',
					path: ''
				},
				{
					name: '排行',
					path: ''
				}
			],
			// 电台推荐导航
			broadcastingStationList: [
				{
					name: '电台分类',
					path: ''
				},
				{
					name: '推荐节目',
					path: ''
				},
				{
					name: '付费精品',
					path: ''
				},
				{
					name: '精选电台',
					path: ''
				}
			],
			classifyName: '最新音乐',
			cardInfor: []
		};
	},
	components: {
		mySwiper: swipers,
		myTobar: myTobar
	},
	onLoad() {},
	methods: {
		// 获取推荐电台
		async getStation() {
			const that = this;
			const station = await getStation();
			station.data.data.forEach(item => {
				item.picUrl = item.pic;
				item.id = item.targetId;
			});
			this.swiperStation = station.data.data;
		},
		// 切换轮播时下划线指向
		pageAlter(e) {
			if (e.detail.current == 1) {
				this.underline = '535rpx';
			}
			if (e.detail.current == 0) {
				this.underline = '165rpx';
			}
		},
		async getCardInfo() {
			const { data: result } = await getNewAlbum({ limit: 3 });
			this.cardInfor = result.products
			console.log(result);
		}
	},
	async created() {
		// 获取个性推荐
		const images = await getSwiper();
		this.getStation();
		this.swiperImageInfo = images.data.result;
		this.getCardInfo();
	}
};
</script>

<style scoped lang="less">
@import '../../static/css/iconfont.css';
.content {
	height: 100%;
}
.title {
	display: flex;
	justify-content: center;
	background-color: #dc4238;
}
.search {
	width: 95%;
	background-color: #de645b;
	border: #de645b 1rpx solid;
	border-radius: 20rpx;
	text-align: center;
	align-items: center;
}
/deep/.searchInput {
	color: #e6a99e;
}
.searchIcon {
	position: absolute;
	left: 210rpx;
	top: 8rpx;
}
.Tab {
	height: 100%;
	.underline {
		position: absolute;
		background-color: #ffffff;
		width: 50rpx;
		height: 10rpx;
		top: 105rpx;
		left: 500rpx;
		border-radius: 30rpx;
	}
}
.swiper-table {
	display: flex;
	justify-content: space-around;
	background-color: #dc4238;
	text-align: center;
	color: white;
	padding: 15rpx 0;
	font-size: 34rpx;
	.swiperTitle {
		width: 25%;
	}
}
.mySwiper {
	height: 100%;
}
.nav {
	display: flex;
	justify-content: space-around;
	margin-top: 20rpx;
	.navIcon {
		width: 80rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		color: #ffffff;
		background-color: #dc4238;
		border-radius: 50rpx;
	}
}
</style>
