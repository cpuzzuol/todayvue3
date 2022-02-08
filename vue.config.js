module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/todayvue3/dist'
		: '/',
	devServer: {
		proxy: {
			'^/api': {
				target: 'http://0.0.0.0',
				changeOrigin: true
			},
		}
	}
}

