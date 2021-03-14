const about = document.getElementById('about');
const aboutContent = document.querySelector('.about');
const Shop = document.getElementById('shop');
const shopContent = document.querySelector('.shop');


about.addEventListener('mouseover', () => {
    showContent(aboutContent)
} );
shop.addEventListener('mouseover', () => {
    showContent(shopContent)
});



function showContent(content) {
    content.classList.add('visible-state')
    hideContent(content);
}

function hideContent(content) {
    setTimeout(function(){content.classList.remove('visible-state')}, 2000);
}