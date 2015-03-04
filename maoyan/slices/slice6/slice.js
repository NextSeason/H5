( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-6',
            h1 : '2014他们大出风头',
            h2 : [
                '基友赛高 <i>鲜肉</i>争宠<br />',
                '遥想2014，女神都嫁了'
            ].join( '' ),
            chart : $( '#slice6-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#6fd0d9' );
        }
    } );
    Manager.append( slice );

    slice.play = function() {

        setTimeout( function() {
            $( '.box-container .b-1' ).css( 'margin-top', 0 );
        }, 500 );

        $( '.nav li' ).on( 'tap', function( e ) {
            var i = $( this ).attr( 'data-index' );
            e.preventDefault();

            if( $( this ).hasClass( 'current' ) ) {
                return false;
            }
            $( '.nav li' ).removeClass( 'current' );
            $( this ).addClass( 'current' );

            $( '.box-container .b-1' ).css( 'margin-top', -( i * 322 )  );
        } );
    };
} )();
