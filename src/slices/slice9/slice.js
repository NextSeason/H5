(function() {
    var slice = new Slice( {
        data : {
            className : 'slice-9',
            h1 : '2014这个姿势看电影',
            h2 : [
                '女看肉，男看斗<br />',
                '女爱小呆萌，男爱小怪兽'
            ].join( '' ),
            chart : $( '#slice9-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#383838' );
        }
    } );
    Manager.append( slice );

    function _increase( ele ) {
        var l = +ele.attr( 'value' ),
            max = +ele.attr( 'data-value' );
        if (l < max) {
            console.log( ele, l );
            l += 2;
            if( l > max ) l = max;

            ele.parent().find( '.percent' ).html( l + '%' );
            ele.attr( 'value', l );
            setTimeout(function() {
                _increase( ele );
            }, 30 );
        }
    };
    slice.play = function() {
        setTimeout( function() {
            slice.el.find( 'progress' ).forEach( function( elem ) {
                _increase( $( elem ) );
            } );
        }, 600 );
    }
} )(); 
