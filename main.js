// const card = document.getElementById('share');
// const tool = document.getElementById('tooltip');
// let isClicked = true;

// function hideshow() {
//     if(isClicked) {
//         card.style.display = 'block';
//         console.log('you are so curious');
//         isClicked = false;
//     } else {
//         tool.style.display = 'none';
//         console.log('oupssss!! i hurt your pride');
//         isClicked = true;

//     }
// }

function toggleShareLinks(e){
    let share = document.querySelector('.share-container');
    share.classList.toggle('share-links-hidden');
    
    let currentExpandedValue = shareBtn.getAttribute('aria-expanded') === "true";
    shareBtn.setAttribute('aria-expanded', !currentExpandedValue);
}

let shareBtn = document.getElementById('js-share-button');
shareBtn.addEventListener('click', toggleShareLinks);