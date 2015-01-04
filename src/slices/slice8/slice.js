( function() {
    var slice = new Slice( {
        data : {
            className : 'slice-8',
            h1 : '2014这个姿势看电影',
            h2 : [
                '<i>22%</i>一人看电影，',
                '<i>65%</i>成对看，',
                '<i>13%</i>三人以上组团看'
            ].join( '' ),
            chart : $( '#slice8-chart-tpl' ).val()
        },
        oncreate : function() {
            this.el.css( 'background', '#f05565' );
        }
    } );
    Manager.append( slice );

    var data = [ {
        value: 22,
        color: "#fee165"
    }, {
        value: 65,
        color: "#fce8ea"
    }, {
        value: 13,
        color:"#abe0be",
    } ];

    var options = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : false,

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 50, // This is 0 for Pie charts

        //Number - Amount of animation steps
        animationSteps : 80,

        //String - Animation easing effect
        animationEasing : "easeIn",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,
    };

    slice.play = function() {

        var ctx = document.getElementById("chart8").getContext("2d");

        var myDoughnutChart = new Chart(ctx).Doughnut(data, options);
    };


} )();
