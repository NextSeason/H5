( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-3',
            h1 : '2014大不同',
            h2 : [
                '<i class="orange">90后</i>',
                '有钱又任性<br />',
                '超越80后，成为观影主力军'
            ].join( '' ),
            chart : $( '#slice3-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#387dc3' );
       }
    } );

    Manager.append( slice );

    var data = {
        2012: [ {
            value : 26,
            color: "#FC0"
        }, {
            value : 61,
            color: "#fefce5"
        }, {
            value : 13,
            color:"#8af0e0",
        } ],
        2013 : [ {
            value : 40,
            color: "#FC0"
        }, {
            value : 50,
            color: "#fefce5"
        }, {
            value : 10,
            color:"#8af0e0",
        } ],
        2014 : [ {
            value: 52,
            color: "#FC0"
        }, {
            value: 40,
            color: "#fefce5"
        }, {
            value: 8,
            color:"#8af0e0",
        } ]
    };

    var options = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : false,

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 50, // This is 0 for Pie charts

        //Number - Amount of animation steps
        animationSteps : 100,

        //String - Animation easing effect
        animationEasing : "easeOutBounce",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,
    };

    slice.play = function() {

        var ctx = document.getElementById("chart-3").getContext("2d");

        var myDoughnutChart = new Chart(ctx).Doughnut(data[ 2014 ],options);

        setTimeout( function() {
            $( '.pao' ).css( 'opacity', 1 );
        }, 1000 );

        $( '.years' ).on( 'tap', function( e ) {
            e.preventDefault();
            var year = $( this ).attr( 'data-year' ),
                d = data[ year ]
                i = 0,
                l = d.length;

            var paos = $( '.pao' );

            $( '.year-selector li' ).removeClass( 'current' );

            $( this ).closest( 'li' ).addClass( 'current' );

            for( ; i < l; i += 1 ) {
                myDoughnutChart.segments[ i ].value = d[ i ].value;
                paos.eq( i ).find( '.percent' ).html( d[ i ].value + '%' );
            }

            $( '.big-year' ).html( year );

            myDoughnutChart.update();
        } );
    };

} )();
