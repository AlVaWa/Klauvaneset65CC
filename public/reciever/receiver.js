const context = cast.framework.CastReceiverContext.getInstance();

// Update style using javascript
let playerElement = document.getElementsByTagName("cast-media-player")[0];
playerElement.style.setProperty('--splash-image', 'url("Klauvaneset65Logo.png")');
playerElement.style.setProperty('--progress-color', 'hsl(203, 46%, 48%)');

context.start();