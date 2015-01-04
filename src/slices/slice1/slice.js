( function() {
    var slice = new Slice( {
        el : $( '.slice-1' ),
        oncreate : function() {
            this.el.show();
        }
    } );

    Manager.append( slice );

    slice.play = function() {
        function increase1(ele, max) {
            var len = $(ele).children().length;
            if (parseInt(len) < parseInt(max+1)) {
                var bottom = 8 + 7*(len-1);
                $(ele).append($('<img src="./static/images/pie_2012.png" width="39" height="30" style="bottom: '+bottom+'px" />'));
                setTimeout(function() {
                    increase1(ele, max);
                }, 100);
            }
        }
        increase1($('#pie-canvas .pie1'), 6);
        increase1($('#pie-canvas .pie2'), 5);
        increase1($('#pie-canvas .pie3'), 7);
    };
} )();

