import {
	http
} from "./request.js"


export function getSwiper(params) {
	return http({
		url: '/personalized/newsong',
		data: {
			limit: 10,
		}
	})
}
export function getStation(params) {
	return http({
		url: '/dj/banner',
	})
}
export function getNewAlbum(params) {
	return http({
		url: '/album/list',
		data:params
	})
}

