/**
 * Created by Frédéric on 06-03-17.
 */

$(document).ready(function () {
    debuger(2, 'je suis pret');
    ancre();
});


function ancre() {
    var links = document.querySelectorAll('.ancre_link');
    debuger('3', links);
    $('#contenu .panel-primary').hide();
    $('#intro').show();
    $('.ancre_link').click(function (event) {
        event.preventDefault();
        var actuel = event.target;
        debuger('3', actuel.text);
        $('#' + actuel.text + '').show().siblings().hide();
    });
}

/**
 *
 * @param msg
 * @param lvl 1 = debug function, 2 = text, 3 = variable
 */
function debuger(lvl , msg) {
    if (lvl == 1){
        console.log('Function : '+msg);
    }else if (lvl == 2){
        console.log('Texte : '+msg);
    }else if (lvl == 3){
        console.log('Variable : '+msg);
    }
}