( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-2',
            h1 : '我们的环境：<i>175</i>天',
            bd : $( '#slice-2-tpl' ).val(),
            summary : [
                '北京2014年全年污染天数达<b>175</b>天。',
                '据前卫生部长测算，中国每年因大气污染提早死亡的人数是<b>50</b>万。'
            ].join( '' )
        },
        oncreate : function() {
            var h = ( $( window ).height() - 30 - 26 - 50 - 218 -80 ) / 2 - 5;
            this.el.find( '.content' ).css( 'margin-top', h );
        }
    } );

    slice.play = function() {
        var me = this;

        setTimeout( function() {
            me.el.find( '.c2' ).css( 'opacity', 1 );
        }, 500 );

        setTimeout( function() {
            me.el.find( '.p1, .p2' ).css( 'opacity', 1 );
        }, 1500 );
        
        setTimeout( function() { 
            me.el.find( '.summary' ).css( 'opacity', 1 ); 
        }, 200 );
    };

    Manager.append( slice );

} )();
