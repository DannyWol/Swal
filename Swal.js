class Swal {

	constructor(method, successCallback, errorCallback) {
		if(method !== undefined && typeof method === 'string') this.method = method;
		if(successCallback !== undefined && typeof successCallback === 'function') this.success = successCallback;
		if(errorCallback !== undefined && typeof errorCallback === 'function') this.error = errorCallback;

		this.load();
	}

	/** Swal 라이브러리 Load */
	load() {
		const script = document.createElement('script');

		script.type = 'text/javascript';
		script.src = '../resources/sweetalert2.all.min.js';

		document.querySelector('body').appendChild(script);
		script.onload = () => {
			this.control(this.method);
		};
	}

	/** Method 별 SWAL 지정 */
	control(method) {
		switch (method) {
			case 'success':
				this.create({
					icon: 'success',
					text: '성공했습니다.',
					confirmButtonText: `확인`
				})
				break;
			case 'error':
				this.create({
					icon: 'error',
					title: 'title',
					text: 'text',
					confirmButtonText: '확인'
				})
				break;
			case 'info':
				this.create({
					icon: 'info',
					title: 'title',
					text: 'text',
					confirmButtonText: '확인'
				})
				break;
			case 'warning':
				this.create({
					icon: 'warning',
					title: 'title',
					text: 'text',
					confirmButtonText: '확인'
				})
				break;
			case 'loading':
				this.create({
					icon: 'loading',
					title: 'title',
					text: 'text',
					confirmButtonText: '확인'
				})
				break;
			default:
				this.handler('error', 'wrong parameter \n method - control');
		}
	}

	/** Swal 생성 */
	create(config) {
		SweetAlert.fire({
			icon: config.icon,
			title: config.title,
			text: config.text,
			footer: config.footer,
			imageUrl: config.imageUrl,
			imageWidth: config.imageWidth,
			background: config.background,
			padding: config.padding,
			imageHeight: config.imageHeight,
			imageAlt: config.imageAlt,

			showCloseButton: config.showCloseButton,
			showCancelButton: config.showCancelButton,
			showDenyButton: config.showDenyButton,

			focusConfirm: config.focusConfirm,

			confirmButtonText: config.confirmButtonText,
			cancelButtonText: config.cancelButtonText,
			denyButtonText: config.denyButtonText,

			confirmButtonAriaLabel: config.confirmButtonAriaLabel,
			cancelButtonAriaLabel: config.cancelButtonAriaLabel,

			cancelButtonColor: config.cancelButtonColor,
			confirmButtonColor: config.confirmButtonColor,

			timer: config.timer,
			position: config.position,
			showClass: config.showClass,
			hideClass: config.hideClass,
		})
	}

	/** callback Handler */
	handler(method, msg) {
		switch (method) {
			case 'success':
				if(typeof this.config.success === 'function') this.success(msg);
				break;
			case 'error':
				if(typeof this.config.error === 'function') this.error(msg);
				else throw new Error(msg);
				break;
		}
	}
}