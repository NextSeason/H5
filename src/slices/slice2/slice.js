( function() {
    var slice = new Slice( {
        el : $( '.slice-2' ),
        oncreate : function() {
            this.el.show();
        }
    } );

    Manager.append( slice );

    function increase( ele ) {
        var l = +ele.attr( 'value' ),
            max = +ele.attr( 'data-percent' );
        if (l < max) {
            console.log( ele, l );
            l+=5;
            if( l > max ) l = max;

            ele.attr( 'value', l );
            setTimeout(function() {
                increase( ele );
            }, 30 );
        }
    };
    slice.play = function() {
        setTimeout( function() {
            slice.el.find( 'progress' ).forEach( function( elem ) {
                increase( $( elem ) );
            } );
        }, 600 );
    };

} )();
