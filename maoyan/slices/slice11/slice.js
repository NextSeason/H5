( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-11',
            h1 : '2014这个姿势看电影',
            h2 : [
                '十二星座，各有所爱<br />',
                '个个有气质，人人有品味'
            ].join( '' ),
            chart : $( '#slice11-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#48cfe3' );
       }
    } );

    Manager.append( slice );

    slice.play = function() {
        setTimeout( function() {
            $( 'div.slice-11 div.boxes' ).addClass( 'star' );
        }, 500 );
    };

} )();
