let observer: IntersectionObserver;

function getObserver() {
	if (typeof window === 'undefined') return null;
	
	if (!observer) {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.15
			}
		);
	}
	return observer;
}

export function reveal(node: HTMLElement, { type = 'up' }: { type?: 'up' | 'left' | 'right' | 'scale' } = {}) {
	node.classList.add(`reveal-${type}`);
	node.classList.add('reveal-on-scroll');
	
	const obs = getObserver();
	if (obs) {
		obs.observe(node);
	}

	return {
		destroy() {
			if (obs) {
				obs.unobserve(node);
			}
		},
		update({ type: newType = 'up' }: { type?: 'up' | 'left' | 'right' | 'scale' } = {}) {
			node.classList.remove('reveal-up', 'reveal-left', 'reveal-right', 'reveal-scale');
			node.classList.add(`reveal-${newType}`);
		}
	};
}
