const arr = document.querySelector('.ok');
const cont = document.querySelector('.sidebar');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
let isOpen = false;
arr.addEventListener('click', () => {
    if (isOpen) {
        cont.style.marginLeft = '-300px';
        img1.style.display = 'flex';
        img2.style.display = 'none';
        isOpen = false;
    } else {
        cont.style.marginLeft = '0';
        img1.style.display = 'none';
        img2.style.display = 'flex';
        isOpen = true;
    }
});