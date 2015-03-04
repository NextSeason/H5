( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-3',
            h1 : '我们的伤害：<i>15</i>种',
            bd : $( '#slice-3-tpl' ).val(),
            summary : [
                '在雾霾中生活一天，监测出<b>15</b>种致癌物，',
                '最危险一种物质的含量超过国家标准<b>14</b>倍。'
            ].join( '' )
        },
        oncreate : function() {
            var h = ( $( window ).height() - 30 - 26 - 50 - 280 -60 ) / 2 - 5;
            this.el.find( '.content' ).css( 'margin-top', h );
        }
    } );

    slice.play = function() {
        var me = this;
        setTimeout( function() {
            me.el.find( '.chart' ).css( '-webkit-transform', 'scale(1) rotate(360deg)' );
        }, 500 ); 

        setTimeout( function() {  
            me.el.find( '.summary' ).css( 'opacity', 1 ); 
        }, 200 );
    };

    Manager.append( slice );
} )();
