let svg = document.getElementById('likes');
let likesnumber = document.getElementById('number')

svg.addEventListener('click', () => {

    if (svg.style.stroke === 'rgb(194, 193, 193)') {
        svg.style.stroke = 'red'
        likesnumber.innerHTML++;

    } else {
        likesnumber.innerHTML--;
        svg.style.stroke = 'rgb(194, 193, 193)'


    }

})