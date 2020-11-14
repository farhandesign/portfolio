const header = document.querySelector('nav');
const sectionOne = document.querySelector('.my__name');

const sectionOneOptions = {
	rootMargin: '-100px 0px 0px 0px',
	threshold: 0.05
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			header.classList.add('nav-scrolled');
		} else {
			header.classList.remove('nav-scrolled');
		}
	});
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);
