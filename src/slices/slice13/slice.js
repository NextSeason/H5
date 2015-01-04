( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-13',
            h1 : '2014这个姿势看电影',
            h2 : [
                '<i>70%</i>小伙伴会参考朋友意见',
                '<i>50%</i>会先查查电影资讯网站'
            ].join( '' ),
            chart : $( '#slice13-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#4ea7e6' );
       }
    } );

    Manager.append( slice );

    slice.play = function() {
        setTimeout( function() {
            $( 'div.slice-13 div.container' ).addClass( 'star' );
        }, 500 );
    };

} )();
