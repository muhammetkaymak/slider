var models = [
    {
        name: 'BMW 418d',
        image: 'img/bmw.jpg'
    },
    {
        name: 'Honda Civic',
        image: 'img/honda.jpg'
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg'
    },
    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg'
    },
    {
        name: 'Volvo S60',
        image: 'img/volvo.jpg'
    }
];

var index = 2;
var slaytCount = models.length;
var interval;

var settings = {
    duration: '1000',
    random: true
};

init(settings);

document.querySelector('.fa-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
});

document.querySelector('.fa-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){

    var prev;
    interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random()*slaytCount);
            }while(index==prev)
            prev = index
        }else{
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    },settings.duration)
}


function showSlide(i){
    index = i;

    if (i<0){
        index = slaytCount -1;
    }
    if(i>=slaytCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);    
}


