module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? ''
		: '/',
	outputDir: '../frontend', // running 'yarn build' will send production code here
	devServer: {
		proxy: {
			'^/api': {
				target: 'http://0.0.0.0',
				changeOrigin: true
			},
		}
	}
}

