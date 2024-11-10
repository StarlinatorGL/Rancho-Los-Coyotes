if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service worker uwu:', registration);
            })
            .catch(error => {
                console.log('Service worker unu:', error);
            });
            
    });
}