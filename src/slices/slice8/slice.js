( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-8',
            h1 : '油品质量堪忧',
            bd : $( '#slice-8-tpl' ).val(),
            summary : [
                '我国柴油含硫量比欧盟美国高<b>25</b>倍，',
                '我国汽油油品长期比发达国家低<b>2-3</b>等级，每提高一个等级，排放可减少<b>10%</b>，',
                '全国<b>50%</b>的油处于失控状态，符合标准的油仅为<b>3%</b>'
            ].join( '' )
        },
        oncreate : function() {
            var h = ( $( window ).height() - 30 - 26 - 50 - 230 -80 ) / 2 - 5;
            this.el.find( '.content' ).css( 'margin-top', h );
        }
    } );

    slice.play = function() {
        var me = this;
        setTimeout( function() {
            $( '.slice-8 .bar' ).each( function() {
                $( this ).css( 'height', +$( this ).attr( 'data-value' ) )
            } );
        }, 500 );
        setTimeout( function() { me.el.find( '.summary' ).css( 'bottom', '50px' ).css( 'opacity', 1 ); }, 200 );
    };

    Manager.append( slice );
} )();
