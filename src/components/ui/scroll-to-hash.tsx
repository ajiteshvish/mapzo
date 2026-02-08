import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that handles scrolling to hash fragments in the URL.
 * Also handles scrolling to top on route change if no hash is present.
 */
export const ScrollToHash = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // If no hash, scroll to top on route change
        if (!hash) {
            window.scrollTo(0, 0);
            return;
        }

        // Wait for the next tick to ensure the DOM has rendered
        const timeoutId = setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                // We use scrollIntoView with smooth behavior if possible
                // But the browser's default behavior often conflicts, 
                // and scroll-margin-top (CSS) is better for sticky headers.
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [pathname, hash, key]);

    return null;
};
