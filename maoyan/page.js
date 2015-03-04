/**
 * @fileOverview index.js
 * @desc
 */
var Slice = function( options ) {
    var defaultOptions = {
        el : null,
        container : $( '#body' ),
        tpl : $( '#slice-tpl' ).val()
    };

    options = options || {};

    for( attr in defaultOptions ) {
        if( defaultOptions.hasOwnProperty( attr ) ) {
            if( !options.hasOwnProperty( attr ) ) {
                options[ attr ] = defaultOptions[ attr ];
            }
        }
    }

    for( attr in options ) {
        options.hasOwnProperty( attr ) && ( this[ attr ] = options[ attr ] );
    }

    this._init( options );
};

Slice.prototype = {
    _init : function() {
        this.el || this._create();
        this.trigger( 'create' );
    },
    _create : function() {
        this.el = $( this._render( this.tpl, this.data ) ); 
    },
    _extract : function( chain, data ) { 
        var list = chain.split( '.' ),
            i = 0,
            l = list.length,
            tmp;
 
        data = data || window;
 
        tmp = data;
 
        for( ; i < l; i += 1 ) { 
            tmp = tmp[ list[ i ] ];
            if( typeof tmp === 'undefined' ) return tmp 
        }   
 
        return tmp;
    },
 
    _render : function( str, data ) { 
        var me = this;
        return str.replace( /{#([\w.]+)}/g, function( m, n ) { 
            val = me._extract( n, data );
            return typeof val === 'undefined' ? '' : val;
        } ) 
    },
    getElement : function() {
        return this.el;
    },
    insert : function() {
        this.trigger( 'insert' );
    },
    resize : function() {
        this.trigger( 'resize' );
    },
    focus : function() {
        this.trigger( 'beforefocus' );
        this.trigger( 'focus' );
    },
    onfocus : function() {
        this.play();
    },
    setZIndex : function() {
    },
    play : function() {
    },
    trigger : function( e ) {
        var fn = this[ 'on' + e ];

        if( typeof fn === 'function' ) {
            return fn.call( this );
        }
    }
};

var Manager = ( function() {
    var queue = [],
        visited = [],
        container = $( '#body' ),
        current = 0,
        zIndexStart = 1000;

    return {
        getPrevious : function() {
            return current ? queue[ current - 1 ] : null;
        },
        getCurrent : function() {
            return queue[ current ];
        },

        getNext : function() {
            return current === queue.length - 1 ? null : queue[ current + 1 ];
        },
        append : function( slice ) {
            queue.push( slice );
            container.append( slice.el );
            slice.el.css( 'z-index', zIndexStart - queue.length );
        },
        next : function() {
            var c;

            if( current === queue.length - 1 ) return false;

            c = queue[ current ];

            c.el.css( 'top', '-100%' );
            current++;

            if( visited.indexOf( current ) === -1 ) {
                queue[ current ].play && queue[ current ].play.call( queue[ current ] );
                visited.push( current );
            }

        },
        previous : function() {
            var pre;

            if( !current ) return false;
            pre = queue[ current - 1 ];

            pre && pre.el.css( 'top', 0 );
            current--;
        }
    };
} )();
( function() {
    var startY = 0,
        startTime = new Date;

    $( document ).on( 'touchstart', function( e ) {
        startTime = new Date;
        startY = e.targetTouches[ 0 ].pageY;
    } )
    
    $( document ).on( 'touchend', function( e ) {
        var Y = e.changedTouches[ 0 ].pageY;

        if( new Date - startTime < 500 ) {
            if( startY - Y > 30 ) {
                Manager.next();
            } else if( Y - startY > 30 ) {
                Manager.previous();
            }
        }
    } );

    $( document ).on( 'touchstart', function( e ) {
        e.preventDefault();
    } );
} )();
