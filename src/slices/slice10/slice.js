( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-10',
            h1 : '2014这个姿势看电影',
            h2 : [
                '70后爱家，80后回忆<br />',
                '<i>90后</i>就是不一样'
            ].join( '' ),
            chart : $( '#slice10-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#4bc293' );
       }
    } );

    Manager.append( slice );

    slice.play = function() {
        setTimeout( function() {
            $( '.boxes' ).css( 'left', 0 );
        }, 500 );
    };

} )();
