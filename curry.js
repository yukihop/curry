const $comment = $('#comment');

let edited = false;

$comment.on('input', ev => {
	const t = ev.target;
	t.style.height = '1px';
	t.style.height = (2 + t.scrollHeight) + 'px';
});

const $type = $('#type');

$type.on('click', () => {
	let next = '＜Cute＞';
	let nextClass = 'cute';
	if ($type.text().match(/Cute/i)) {
		next = '＜Cool＞';
		nextClass = 'cool';
	}
	if ($type.text().match(/Cool/i)) {
		next = '＜Passion＞';
		nextClass = 'passion';
	}
	$type.text(next);
	$('#name-container').removeClass('cute cool passion').addClass(nextClass);
});

$('body').on('input', () => edited = true);

$('#portrait').on('click', () => {
	$('#file-selector').click();
});

const $selector = $('#file-selector');

$selector.on('change', () => {
	const reader = new FileReader();
	reader.onload = (e) => {
		$('#portrait').css('background-image', `url(${e.target.result})`);
	};
	reader.readAsDataURL($selector.get(0).files[0]);
});

function loadFont() {
	try{
		Typekit.load({ async: true });
	} catch(e) {}
}

loadFont();

setInterval(() => {
	if (edited) {
		edited = false;
		loadFont();
	}
}, 2000);
