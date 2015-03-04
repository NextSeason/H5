( function() {
     var slice = new Slice( {
        data : {
            className : 'slice-5',
            h1 : '2014大不同',
            h2 : [
                '中国观众<i>影商</i>更高<br />',
                '唯有<i>干货</i>才能hold住全场'
            ].join( '' ),
            chart : $( '#slice5-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#7e5eca' );
        }
    } );
    Manager.append( slice );

    var start = 0;

    Damaku = {
        move : function() {
            this.intval = setInterval( function() {
                start = start - 5;
                $( '.danmaku' ).css( 'background-position-x', start );
            }, 50 );
        },
        stop : function() {
            this.intval && this.clearInterval( this.intval );
        }
    };

    slice.play = function() {

        setTimeout( function() {
            $( '.c-1' ).css( 'top', 0 );
            setTimeout( function() {
                $( '.c-2' ).css( 'top', 0 );
                setTimeout( function() {
                    $( '.c-3' ).css( 'top', 0 );
                    Damaku.move();
                }, 500 );
            }, 500 );
        }, 100 );
    };
} )();
