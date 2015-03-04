( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-6',
            h1 : '机动车的污染',
            bd : $( '#slice-6-tpl' ).val(),
            summary : [
                '2010年一年汽车的增长量<b>80</b>万，',
                '北京PM2.5来源最大的是机动车。北京<b>34%</b>的人开车，',
                '六环以内每小时PM2.5的排放量达到<b>1</b>吨。'
            ].join( '' )
        },
        oncreate : function() {
            var h = ( $( window ).height() - 30 - 26 - 50 - 255 -80 ) / 2 - 5;
            this.el.find( '.content' ).css( 'margin-top', h );
        }
    } );

    slice.play = function() {
        var me = this;

        setTimeout( function() {
            me.el.find( '.car' ).css( 'left', 0 );
        }, 500 );
        setTimeout( function() {
            me.el.find( '.water, .text' ).css( 'opacity', 1 );
        }, 600 );

        setTimeout( function() {  
            me.el.find( '.summary' ).css( 'opacity', 1 );
        }, 200 );
    };

    Manager.append( slice );
} )();
