class Swal {
	config = {};

	constructor() {
		this.load();
	}

	/** Swal 라이브러리 Load */
	load() {
		const script = document.createElement('script');

		script.type = 'text/javascript';
		script.src = '../resources/sweetalert.js';

		document.querySelector('body').appendChild(script);
		script.onload = () => {
			console.log('load');
		};
	}

	/** Method 별 SWAL 지정
	 * */
	control(method) {
		switch (method) {
			case 'success':
				break;
			case 'error':
				break;
			case 'info':
				break;
			case 'warning':
				break;
		}
	}
}