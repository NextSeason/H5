( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-15',
            h1 : '2014这个姿势看电影',
            h2 : [
                '全国城市观影姿态<br />',
                '各式各样，千姿百态'
            ].join( '' ),
            chart : $( '#slice15-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#6cdce6' );
       }
    } );

    Manager.append( slice );

    var bloom = function() {
        var bubbles = $( '.bubble' );

        bubbles.sort( function() {
            return Math.random() > .5 ? -1 : 1;
        } );

        var run =  function( i ) {
            if( bubbles.eq( i ).length ) {
                bubbles.eq( i ).addClass( 'big' );
                setTimeout( function() {
                    run( i + 1 );
                }, Math.random() * 150 );
            }
        };

        run( 0 );
    };

    slice.play = function() {
        setTimeout( function() {
            bloom();
        }, 500 );
    };

} )();
