VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

function changeColor(getColor){
    let bg = document.querySelector(".bg");
    let selectColor = getColor.value;
    bg.style.background = selectColor;
    let text = getColor.options[getColor.selectedIndex].text;
    bg.innerHTML = text;
}

let list =  document.querySelectorAll('.sci li');
let b = document.querySelector('.socialMedia');
list.forEach(events => {
    events.addEventListener('mouseenter', function(elem){
        let color = elem.target.getAttribute('data-color');
        b.style.backgroundColor = color;
    })

    events.addEventListener('mouseleave',function(elem){
        b.style.backgroundColor = "#fff";
    })
})
