( function() {
    var slice = new Slice( {
        tpl : $( '#slice-end-tpl' ).val(),
        oncreate : function() {
            var h = ( $( window ).height() - 30 - 62 - 30 - 322 ) / 2 - 5;
            this.el.find( '.slogan' ).css( 'margin-top', h );
        }
    } );

    slice.play = function() {
        var me = this;

        setTimeout( function() { 
            me.el.find( '.slogan' ).css( 'opacity', 1 );
        }, 200 );
    }

    Manager.append( slice );
} )();
