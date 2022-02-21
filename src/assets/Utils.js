export default {
	getQueryParams() {
		let a = window.location.search.substr(1).split('&')
		if (a == "") {
			return {}
		}
		let b = {}
		let p, i
		for (i = 0; i < a.length; ++i) {
			p = a[i].split('=', 2);
			if (p.length == 1) {
				b[p[0]] = "";
			}
			else {
				b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
			}
		}
		return b;
	},
	async checkLogin(axios) {
		//fire off a request to the server every 5 minutes to check if still logged in
		//if not still logged in, redirect to web-login
		const check = await this.check(axios)
		setInterval(async () => {
			await this.check(axios)
		}, 300000)
		return check
	},
	async check(axios) {
		return await axios.get('http://0.0.0.0/api/checklogin')
			.then(r => {
				if (!r.data) {
					console.log(r)
					// location.replace('https://netid.emich.edu/cas/login?service=https://ucrisko.ddns.net/admin')
					// location.replace('https://netid.emich.edu/cas/login?service=http://localhost:8080/admin')
				}
				console.log(r)
				return r.data
			})
			.catch(() => {
				// location.replace('https://netid.emich.edu/cas/login?service=http://localhost:8080')
			})
	},
	// Run this on load (window.onload) to logout after a period of time
	inactivityTime(url, minutes) {
		let milliseconds = minutes * 60000

		let time;
		window.onload = resetTimer;
		// DOM Events
		document.onmousemove = resetTimer;
		document.onkeypress = resetTimer;

		function logout() {
			location.href = url
		}

		function resetTimer() {
			clearTimeout(time);
			time = setTimeout(logout, milliseconds)
		}
	},
	validateUrl(value) {
		return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
	}
}

export const appStates = {
	STATE_INITIAL: 0,
	STATE_SAVING: 1,
	STATE_SUCCESS: 2,
	STATE_FAILED: 3,
	STATE_INVALID: 4,
	STATE_EDITED: 5,
	STATE_RESETTING: 6,
	STATE_DELETING: 7,
	STATE_DELETED: 8,
	STATE_ERROR: 9,
	STATE_LOADING: 10,
	STATE_NOT_FOUND: 11,
	STATE_UNAUTHORIZED: 12
}
