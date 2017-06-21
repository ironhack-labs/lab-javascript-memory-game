(function( $ ) {

    $.fn.solitaireVictory = function(settings) {

        settings = settings || {};

        var g = settings.g || -3;
        var dt = settings.dt || 20;
        var bounce = settings.bounce || 0.7;
        var endVelocity = settings.endVelocity || 20;
        var stagger = settings.stagger || 200;
        var relativeToDocument = settings.relativeToDocument || false;
        var clear = settings.clear || false;
        var fallToLeft = settings.fallToLeft || false;

        var body = $('body');
        var windowHeight = (relativeToDocument ? $(document).height() : $(window).height());

        var fallIteration = function(elem, elemHeight, oldPos, dx, dy) {
            var copy = elem.clone();
            body.append(copy);

            var newTop = Math.min(windowHeight - elemHeight, oldPos.top + dy);
            var newPos = {
                left: oldPos.left + dx,
                top: newTop
            };
            copy.offset(newPos);
            if (Math.abs(newTop - (windowHeight - elemHeight)) < 5) {
                if (dy < 0 || dy > endVelocity) {
                    dy *= -1*bounce;
                    setTimeout(function() {
                        fallIteration(copy, elemHeight, newPos, dx, dy);
                    }, dt);
                }
            } else {
                dy = dy - g;
                setTimeout(function() {
                    fallIteration(copy, elemHeight, newPos, dx, dy);
                }, dt);
            }
        };

        var startFall = function(elem, height, stagger) {
            var dx = settings.dx || Math.floor((Math.random()*10)) + 5;
            if (fallToLeft) {
                dx = -dx;
            }
            var copy = elem.clone();
            console.log(copy);
            copy.addClass('solitaire-victory-clone');
            if (relativeToDocument) {
                copy.css('position', 'absolute');
            } else {
                copy.css('position', 'fixed');
            }
            var originalOffset = elem.offset();
            copy.offset({top: originalOffset.top, left: originalOffset.left});
            body.append(copy);
            setTimeout(function() {fallIteration(copy, height, copy.offset(), dx, 0);}, stagger);
        };

        if (clear) $('.solitaire-victory-clone').remove();

        this.each(function(index) {
            var obj = $(this);
            console.log(this);
            if (relativeToDocument || obj.offset().top < $(window).height()) {
                if (!obj.hasClass('solitaire-victory-clone')) {
                    startFall(obj, obj.height(), index*stagger);
                }
            }
        });
    };

}( jQuery ));
