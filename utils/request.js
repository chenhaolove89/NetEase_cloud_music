const base_url = 'http://47.98.169.165:3000'
export const http = (options) => {
	console.log(options)
	return new Promise((reslove, reject) => {
		uni.request({
			url: base_url + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			timeout: 6000,
			success(res) {
				if (res.statusCode !== 200 || res.data.code !== 200) {
					uni.showToast({
						title: '接口请求失败'
					})
					reject(res)
				}
				reslove(res)
			},
			fail(err) {
				console.log(1)
				uni.showToast({
					title: '接口请求失败'
				})
				reject(err)
			}
		})
	})
}
