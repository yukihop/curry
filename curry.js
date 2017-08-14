var $$ = document.getElementById.bind(document);

var comment = $$('comment');
comment.addEventListener('input', function() {
	comment.style.height = '1px';
	comment.style.height = (2 + comment.scrollHeight) + 'px';
});

var type = $$('type');
type.addEventListener('click', function() {
	var current = type.innerHTML;
	var next = '＜Cute＞';
	var nextClass = 'cute';
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

$$('portrait').addEventListener('click', function() {
	$$('file-selector').click();
});

var selector = $$('file-selector');
selector.addEventListener('change', function() {
	const reader = new FileReader();
	reader.onload = function(ev) {
		$$('portrait').style.backgroundImage = 'url(' + ev.target.result + ')';
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
