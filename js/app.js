const hexValue = document.querySelector('#hex-value');
const container = document.querySelector('.container');
const button = document.querySelector('#btn');
const array = [0,1,2,3,4,5,6,7,'A','B','C','D','E','F']

button.addEventListener('click', function() {


    const random1 = Math.floor(Math.random() * array.length);
    const random2 = Math.floor(Math.random() * array.length);
    const random3 = Math.floor(Math.random() * array.length);
    const random4 = Math.floor(Math.random() * array.length);
    const random5 = Math.floor(Math.random() * array.length);
    const random6 = Math.floor(Math.random() * array.length);
  
    const hex1 = array[random1];
    const hex2 = array[random2];
    const hex3 = array[random3];
    const hex4 = array[random4];
    const hex5 = array[random5];
    const hex6 = array[random6];
    
    const hexColor = `#${hex1}${hex2}${hex3}${hex4}${hex5}${hex6}`

    document.body.style.backgroundColor = hexColor;
    hexValue.textContent = hexColor;

})