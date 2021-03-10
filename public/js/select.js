var tahjirBtn = document.querySelector('#tahjir');
var atTahjir = document.querySelector('.at-tahjir');
var artiBtn = document.querySelector('#arti');
var atArti = document.querySelector('.at-arti');
var container = document.querySelector('.buttons');

container.addEventListener('click', (event) => {
	if (event.target.classList.contains('artiBtn')) {
		atTahjir.classList.add('hide');
		atTahjir.classList.remove('display');
		atArti.classList.add('display');
		atArti.classList.remove('hide');
	} else {
		atTahjir.classList.remove('hide');
		atTahjir.classList.add('display');
		atArti.classList.remove('display');
		atArti.classList.add('hide');
	}
});
