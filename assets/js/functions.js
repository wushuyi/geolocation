//(function($){
//	$(document).ready(function (){

var $el = {};
$el.latitude = $('#latitude');
$el.longitude = $('#longitude');
$el.accuracy = $('#accuracy');
$el.error = $('#error');

var getPosition = function () {
    geoPosition.getCurrentPosition(success_callback, error_callback, {enableHighAccuracy: true});
};

var success_callback = function (evt) {
    console.log(evt);
    var latitude = parseFloat(evt.coords.latitude).toFixed(8);
    var longitude = parseFloat(evt.coords.longitude).toFixed(8);
    var accuracy = parseFloat(evt.coords.accuracy).toFixed(2);
    $el.latitude.text(latitude);
    $el.longitude.text(longitude);
    $el.accuracy.text(accuracy);
};

var error_callback = function (evt) {
    $el.error.text(evt.message);
};


if (geoPosition.init()) {
    getPosition();
    setInterval(getPosition, 3000);
}
else {
    alert('地理位置初始化失败!');
}


//	});
//})(window.jQuery);