( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-7',
            h1 : '柴油车的危害',
            bd : $( '#slice-7-tpl' ).val(),
            summary : [
                '至少<b>90%</b>的柴油货车都没有基本的排放过滤设备。',
                '这类车排放的一次性颗粒物排放占总量的<b>99%</b>。',
                '且其排放尾气的致基因突变性是普通汽车尾气污染物的<b>100,000</b>倍。'
            ].join( '' )
        },
        oncreate : function() {
            var h = ( $( window ).height() - 30 - 26 - 50 - 179 -80 ) / 2 - 5;
            this.el.find( '.content' ).css( 'margin-top', h );
        }
    } );

    slice.play = function() {
        var me = this;

        setTimeout( function() {
            var el = $( '#times' );
            me.el.find( '.diesel' ).css( '-webkit-transform', 'scale(1)' );    

            ( function() {
                var i = parseInt( el.html().replace( ',', '' ) ),
                    args = arguments,
                    j = ( i + 2468 ) + '';

                if( j.length > 3 ) j = j.replace( /(\d{3})$/, ',$1' );
                el.html( j + ' 倍' );
                if( i >= 100000 ) {
                    el.html( '100,000 倍' );
                    return;
                }
                setTimeout( function() {
                    args.callee();
                }, 20 );
            } )()
        }, 500 );

        setTimeout( function() {  
            me.el.find( '.summary' ).css( 'opacity', 1 );
        }, 200 );
    };

    Manager.append( slice );

} )();
