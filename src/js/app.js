import {TweenMax} from 'gsap';
import $ from 'jquery';

function startAnimation() {
    var $balloon = getBaloonElement();
    addAnimationBalloon($balloon);
    TweenMax.to($balloon, 3, {
        top: '-150px',        
        onComplete: function() {
            $balloon.remove();
        },
        onStart: function() {
            $balloon.show();
        }
    });
}

function addAnimationBalloon($balloon) {
    $('#js-animation-area').append($balloon);
}

function getBaloonElement() {
    return $($('#animation-balloon-tpl').html());
}

document.getElementById('start').addEventListener('click', () => startAnimation());