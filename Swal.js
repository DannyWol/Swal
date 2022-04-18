/** Swal Version 0.2
 *  TODO 1. TITLE, TEXT Custom할 수 있도록
 *  	 2. callback 들어가는지 확인
 *  	 3. Confirm 후 Loading 후 Success or Fail
 *  	 4.
 * */
class Swal {
	method = null;
	success = null;
	error = null;

	/** @Param : Object(method : String, confirmCallback: function */
	constructor(config) {
		if(typeof config !== 'object') throw new Error('wrong parameter');
		if(typeof config.method !== 'string') throw new Error('wrong parameter');
		if(typeof config.success === 'function') this.success = config.success;
		if(typeof config.error === 'function') this.error = config.error;

		this.load(config);
	}

	/** Swal 라이브러리 Load */
	load(config) {
		const swalLibrary = document.getElementById('sweetalert2');

		if (swalLibrary === null) {
			const script = document.createElement('script');

			script.type = 'text/javascript';
			script.src = '../resources/sweetalert2.all.min.js';
			script.id = 'sweetalert2'
			document.querySelector('body').appendChild(script);

			script.onload = () => {
				this.control(config);
			};
		}
		else {
			this.control(config);
		}
	}

	/** Method 별 SWAL 지정
	 *  @Param : String */
	control(config) {
		const method = config.method.toLowerCase();
		switch (method) {
			case 'success':
				this.create({
					icon: method,
					title: config.title,
					text: config.text,
					confirmButtonText: `확인`
				});
				break;
			case 'error':
				this.create({
					icon: method,
					title: config.title,
					text: config.text,
					confirmButtonText: '확인'
				});
				break;
			case 'info':
				this.create({
					icon: method,
					title: config.title,
					text: config.text,
					confirmButtonText: '확인'
				});
				break;
			case 'warning':
				this.create({
					icon: method,
					title: config.title,
					text: config.text,
					confirmButtonText: '확인'
				});
				break;
			case 'loading':
				this.create({
					title: method,
					text: config.title,
					timer: 1000,
					didOpen: () => {
						SweetAlert.showLoading();
					},
				});
				break;
			default:
				this.handler('error', 'wrong parameter \n method - control');
		}
	}

	/** Swal 생성
	 *  @Param : Object */
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
			didOpen: config.didOpen
		})
	}

	/** callback Handler
	 *  @Param : String, String*/
	handler(method, msg) {
		switch (method) {
			case 'success':
				if(typeof this.success === 'function') this.success(msg);
				break;
			case 'error':
				if(typeof this.error === 'function') this.error(msg);
				else throw new Error(msg);
				break;
		}
	}
}