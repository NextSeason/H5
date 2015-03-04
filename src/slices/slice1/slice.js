( function() {
    var slice = new Slice( {
        tpl : $( '#slice-cover-tpl' ).val(),
        oncreate : function() {
            this.el.show();
        }
    } );

    Manager.append( slice );
} )();
