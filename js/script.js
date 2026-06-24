// High-Performance Parallax Engine 
        // Syncs scroll distance to CSS custom variables for buttery smooth hardware-accelerated movement
        const root = document.documentElement;

        window.addEventListener('scroll', () => {
            // Using requestAnimationFrame to prevent layout thrashing
            window.requestAnimationFrame(() => {
                const y = window.scrollY;
                root.style.setProperty('--scroll-y', `${y}px`);
            });
        }, { passive: true });