const $comment = $('#comment');

const $$ = document.getElementById.bind(document);

const comment = $$('comment');

comment.addEventListener('input', () => {
	comment.style.height = '1px';
	comment.style.height = (2 + comment.scrollHeight) + 'px';
});

const type = $$('type');

type.addEventListener('click', () => {
	const current = type.innerHTML;
	let next = '＜Cute＞';
	let nextClass = 'cute';
	if (type.innerHTML.match(/Cute/i)) {
		next = '＜Cool＞';
		nextClass = 'cool';
	}
	if (type.innerHTML.match(/Cool/i)) {
		next = '＜Passion＞';
		nextClass = 'passion';
	}
	type.innerHTML = next;
	$$('name-container').className = nextClass;
});

document.body.addEventListener('focusout', () => {
	loadFont();
	console.log('pinya');
});

$$('portrait').addEventListener('click', () => {
	$$('file-selector').click();
});

const selector = $$('file-selector');

selector.addEventListener('change', () => {
	const reader = new FileReader();
	reader.onload = (e) => {
		$$('portrait').style.backgroundImage = `url(${e.target.result})`;
	};
	reader.readAsDataURL(selector.files[0]);
});

function loadFont() {
	try{
		Typekit.load({ async: true });
	} catch(e) {}
}

loadFont();
