( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-9',
            h1 : '空气中是钱的味道',
            bd : $( '#slice-9-tpl' ).val(),
            summary : [
                '生产<b>1</b>吨钢省去环保成本可以节省<b>100</b>元、',
                '1吨煤省去环保成本可以节省<b>156</b>元、<b>1</b>辆车不装环保设施可以节省<b>20,000</b>元、',
                '油品少升级一次可以节省<b>500</b>亿元。雾霾天中，我们闻到空气中的其实是钱的味道。'
            ].join( '' )
        },
        oncreate : function() {
            var h = ( $( window ).height() - 30 - 26 - 50 - 220 - 100 ) / 2 - 5;
            this.el.find( '.content' ).css( 'margin-top', h );
        }
    } );

    slice.play = function() {
        var me = this;

        setTimeout( function() {
            me.el.find( 'ul li div' ).css( 'opacity', 1 );
        }, 200 );
        setTimeout( function() { 
            me.el.find( '.summary' ).css( 'bottom', '50px' ).css( 'opacity', 1 );
        }, 200 );
    };
    Manager.append( slice );
} )();
