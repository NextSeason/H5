( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-4',
            h1 : '2014大不同',
            h2 : [
                '<i>40%</i>',
                '小伙伴用手机或电脑买票<br />',
                '买票也越来越<i>提前</i>'
            ].join( '' ),
            chart : $( '#slice4-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#fe9d1f' );
        }
    } );
    Manager.append( slice );

    var options = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : false,

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 50, // This is 0 for Pie charts

        //Number - Amount of animation steps
        animationSteps : 50,

        //String - Animation easing effect
        animationEasing : "easeOut",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,
    };

    slice.play = function() {
        var ctx1 = document.getElementById( 'chart-4-1' ).getContext( '2d' ); 

        var chart1 = new Chart( ctx1 ).Doughnut( [ {
            value : 12,
            color : '#ff5c23'
        }, {
            value : 88,
            color : '#ffddb1'
        } ], options );

        var ctx2 = document.getElementById( 'chart-4-2' ).getContext( '2d' ); 

        var chart1 = new Chart( ctx2 ).Doughnut( [ {
            value : 25,
            color : '#ff5c23'
        }, {
            value : 75,
            color : '#ffddb1'
        } ], options );

        var ctx3 = document.getElementById( 'chart-4-3' ).getContext( '2d' ); 

        var chart3 = new Chart( ctx3 ).Doughnut( [ {
            value : 40,
            color : '#ff5c23'
        }, {
            value : 60,
            color : '#ffddb1'
        } ], options );

        setTimeout( function() {
            $( '.pic' ).css( 'top', 0 ).css( 'opacity', 1 );
        }, 1000 );
    };
} )();
