$(function() {
    $("body").css("background-color", color);
});

$(function() {
    $("#title").on('click', function(event) {
        alert("we vote-is a voting website you can create your own public or private vote!");
});
});

$(function() {
    $('ul li').each(function(index, element) {
        if(index%2==0) {
            $(element).css('color', 'red');
        }
        else {
            $(element).css('color', 'blue');
        }
    })
});
function buildcounter(){
    var c=0;
    function counter(){
        c=c+100;
        return c;
    };
    return counter;
}
counter = buildcounter();
console.log(counter());
console.log(counter());

$(function() {

$("#button1").on('click', function(event) {
    alert("hello, this is a website you can create your own vote or bublic vote!");
});


});