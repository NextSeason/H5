( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-5',
            h1 : '散煤的危害',
            bd : $( '#slice-5-tpl' ).val(),
            summary : [
                '北京冬季单位浓度PM2.5中致癌物是夏季的<b>25</b>倍。',
                '散烧煤如果洗干净，我们的排放将降减少<b>50%</b>'
            ].join( '' )
        },
        oncreate : function() {
            var h = ( $( window ).height() - 30 - 26 - 50 - 258 -60 ) / 2 - 5;
            this.el.find( '.content' ).css( 'margin-top', h );
        }
    } );

    slice.play = function() {
        var me = this;
        setTimeout( function() {
            me.el.find( '.chart' ).css( 'top', 0 );
            me.el.find( '.legend' ).css( 'top', 0 );
        }, 500 );

        setTimeout( function() {  
            me.el.find( '.summary' ).css( 'opacity', 1 );
        }, 200 );
    };

    Manager.append( slice );
} )();
