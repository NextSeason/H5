( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-10',
            h1 : '我们怎么办',
            bd : $( '#slice-10-tpl' ).val(),
            summary : [
                '发生过“大烟雾事件”的伦敦在治理污染的前10年，污染物下降了<b>80%</b> 。',
                '发生过严重“光化学烟雾”事件的洛杉矶，车辆比上世纪七十年代增加了3倍，但排放低了<b>75%</b>。',
                ,'污染可以解决，每人都可监督——全国统一环保举报热线：<b>12369</b>'
            ].join( '' )
        },
        oncreate : function() {
            var h = ( $( window ).height() - 30 - 26 - 50 - 123 - 120 ) / 2 - 5;
            this.el.find( '.content' ).css( 'margin-top', h );
        }
    } );

    slice.play = function() {
        var me = this;
        setTimeout( function() { 
            me.el.find( '.summary' ).css( 'bottom', '50px' ).css( 'opacity', 1 ); 
        }, 200 );
    };

    slice.play();

    Manager.append( slice );
} )();
