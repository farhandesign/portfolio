const header = document.querySelector('nav');
const sectionOne = document.querySelector('.hi');

const sectionOneOptions = {
	rootMargin: '-200px 0px 0px 0px',
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
