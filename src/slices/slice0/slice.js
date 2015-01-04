( function() {
    var slice = new Slice( {
        el : $( '.slice-0' ),
        oncreate : function() {
            this.el.show();
        }
    } );

    Manager.append( slice );

    var cover = (function() {
        var num = 1;
        var intervalID1 = null;

        return {
            init: function() {
                intervalID1 = setInterval(function() {
                    $('#cover .cover_r_' + num).hide();
                    num++;
                    if (num > 4) num = 1;
                    $('#cover .cover_r_' + num).show();
                }, 500);
            },
            clear: function() {
                if (intervalID1 != null) {
                    clearInterval(intervalID1);
                }
            }
        };
    })();
    cover.init();
} )();

