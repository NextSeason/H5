( function() {
    var slice = new Slice( {
        el : $( '.slice-16' ),
        oncreate : function() {
            this.el.show();
        }
    } );

    Manager.append( slice );

    $( '.share' ).on( 'tap', function( e ) {
        $( '.mask' ).show();
    } );

    $("#gotouch").on('tap',function(){
        window.location.href = $(this).attr("href");
    });

    $("body").on('tap','.mask',function() {
         $(this).hide();
    });

    var ua = window.navigator.userAgent;
    if(ua.indexOf('MicroMessenger') > -1){
        $(".slice-16").find(".buttons").css("visibility","visible");
    }

    var _share = {
        title : '2014中国人是如何看电影的？猫眼电影独家解读！生命短暂，影院里见!Let’s Movie On!',
        img : 'http://m.maoyan.com/newGuide/summary2014/static/images/wsshare.jpg',
        link : window.location.href,
        img_width : 150,
        img_height : 150

    };
    document.addEventListener( 'WeixinJSBridgeReady', function() {

        if( typeof WeixinJSBridge === 'undefined' ) return false;

        WeixinJSBridge.on( 'menu:share:timeline', function() {

            WeixinJSBridge.invoke( 'shareTimeline', {
                "title" : _share.title,
                "link" : _share.link,
                "img_url" : _share.img,
                "img_width" : _share.img_width,
                "img_height" : _share.img_height,
                "desc" : _share.title
            }, function( data ) {} );

        } );

        WeixinJSBridge.on( 'menu:share:appmessage', function() {
            WeixinJSBridge.invoke( 'sendAppMessage', {
                "link" : _share.link,
                "img_url" : _share.img,
                "img_width" : _share.img_width,
                "img_height" : _share.img_height,
                "desc" : _share.title
            }, function( data ) {} );
        } );

        WeixinJSBridge.on( 'menu:share:weibo', function() {
            WeixinJSBridge.invoke('shareWeibo', {
                "desc": _share.title,
                "url": share.link
            }, function() {} );
        } );

    }, false );
} )();
