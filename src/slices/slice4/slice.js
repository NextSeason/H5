( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-4',
            h1 : '雾霾的来源：煤、油',
            bd : $( '#slice-4-tpl' ).val(),
            summary : [
                '<b>60%</b>pm2.5来自于燃油燃煤，',
                '2013年中国燃煤量<b>36</b>亿吨，是世界其他国家总和，',     
                '河北一个省烧了全世界<b>6%</b>的煤，违规排放的企业无法得到管理。'
            ].join( '' )
        },
        oncreate : function() {
            var h = ( $( window ).height() - 30 - 26 - 50 - 252 -80 ) / 2 - 5;
            this.el.find( '.content' ).css( 'margin-top', h );
        }
    } );

    slice.play = function() {
        var me = this;

        setTimeout( function() {
            me.el.find( '.c3' ).css( '-webkit-transform', 'scale(1)' );
        }, 500 );

        setTimeout( function() {
            me.el.find( '.c2' ).css( '-webkit-transform', 'scale(1)' );
        }, 550 )

        setTimeout( function() {
            me.el.find( '.c1' ).css( '-webkit-transform', 'scale(1)' );
        }, 600 );

        setTimeout( function() {  
            me.el.find( '.summary' ).css( 'opacity', 1 );
        }, 200 );
    };

    Manager.append( slice );

} )();
