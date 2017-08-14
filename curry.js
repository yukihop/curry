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
	if (current.match(/Cute/i)) {
		next = '＜Cool＞';
		nextClass = 'cool';
	}
	if (current.match(/Cool/i)) {
		next = '＜Passion＞';
		nextClass = 'passion';
	}
	type.innerHTML = next;
	$$('name-container').className = nextClass;
});

$$('portrait').addEventListener('click', () => {
	$$('file-selector').click();
});

const selector = $$('file-selector');
selector.addEventListener('change', () => {
	const reader = new FileReader();
	reader.onload = ev => {
		$$('portrait').style.backgroundImage = `url(${ev.target.result})`;
	};
	reader.readAsDataURL(selector.files[0]);
});

document.body.addEventListener('focusout', loadFont);

function loadFont() {
	try{
		Typekit.load({ async: true });
	} catch(e) {}
}

loadFont();
