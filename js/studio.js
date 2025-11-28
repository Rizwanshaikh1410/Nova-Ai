 // Add scroll animation for feature cards
        document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe feature cards and list items
            document.querySelectorAll('.feature-card, .pages-list li').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
        });