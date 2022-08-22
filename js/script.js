const form = document.getElementById('form');
const qr = document.getElementById('qrcode');
const btnDiv = document.getElementById('btn-div');
function handleFormSubmmission(e) {
	e.preventDefault();
	clearUi();
	const url = document.getElementById('url').value;
	const size = document.getElementById('size').value;
	if (url === '') {
		alert('Please fill the url');
	} else {
		showSpinner();
		setTimeout(() => {
			hideSpinner();
			generationQr(url, size);
			setTimeout(() => {
				showSaveBtn();
			}, 50);
		}, 1000);
	}
	console.log(size, url);
}
const generationQr = function (url, size) {
	const qrcode = new QRCode(qr, {
		text: url,
		width: size,
		height: size,
	});
	qr.style.width = size + 'px';
	qr.style.height = size + 'px';
};

const showSpinner = function () {
	document.getElementById('spinner').style.display = 'block';
};

const hideSpinner = function () {
	document.getElementById('spinner').style.display = 'none';
};
const clearUi = function () {
	qr.innerHTML = '';
};
const showSaveBtn = () => {
	const button = document.createElement('button');
	button.innerHTML = 'Save';
	btnDiv.appendChild(button);
};
hideSpinner();
form.addEventListener('submit', handleFormSubmmission);
