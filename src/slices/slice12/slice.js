( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-12',
            h1 : '2014这个姿势看电影',
            h2 : [
                '<i>25%</i>的小伙伴在11:30-13:30买票<br />',
                '<i>40%</i>选择在18:30-20:30看电影'
            ].join( '' ),
            chart : $( '#slice12-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#fee974' );
       }
    } );

    Manager.append( slice );

    slice.play = function() {
        setTimeout( function() {
            $( 'div.slice-12 div.boxes' ).css( 'margin-top', '10px' );
        }, 500 );
    };
} )();
