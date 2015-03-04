( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-7',
            h1 : '2014这个姿势看电影',
            h2 : [
                '男生看得多，2014平均看<i>6次</i><br />',
                '女性观众多，占观影用户<i>53%</i>'
            ].join( '' ),
            chart : $( '#slice7-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#cd8bd1' );
        }
    } );
    Manager.append( slice );

    var data1 = [ {
        value : 47,
        color : '#bae4ff'
    }, {
        value : 53,
        color : 'rgba( 0, 0, 0, 0 )'
    } ];

    var data2 = [ {
        value : 47,
        color : 'rgba( 0, 0, 0, 0 )'
    }, {
        value : 53,
        color : '#ffd3f0'
    } ];

    var options = {
        segmentShowStroke : false,
        animationSteps : 50,
        animationEasing : "easeOut",
        animateRotate : true,
        animateScale : true,
    };

    slice.play = function() {
        var me = this;

        var ctx1 = document.getElementById( 'chart7-1' ).getContext( '2d' );
        var chart1 = new Chart( ctx1 ).Pie( data1, options );

        var ctx2 = document.getElementById( 'chart7-2' ).getContext( '2d' );
        var chart2 = new Chart( ctx2 ).Pie( data2, options );

        setTimeout( function() {
            var container = me.el.find( '.canvas-container' );

            container.eq( 0 ).css( 'left', '5px' );
            container.eq( 1 ).css( 'left', '-5px' );
            container.find( 'p' ).css( 'opacity', 1 );
        }, 1200 );
    };
} )();
