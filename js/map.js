ymaps.ready(function () {
    var myMap = new ymaps.Map('ymap', {
            center: [59.927125, 30.374860],
            zoom: 17,
            controls: ['zoomControl']
        });
    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom'); 
});