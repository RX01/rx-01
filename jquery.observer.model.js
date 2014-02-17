https://github.com/RX01/rx-01

//a publication/subscription model based on jQuery's trigger/on methods

//limiting the scope
(function( $ ) {

 	//defining a readable API
    $.fn.observerModel = function() {

    	//defining a subscribe method for the observer model
    	$.fn.observerModel.subscribe = function( eventName, fn ) {

    		//check input
    		if( jQuery.type( eventName ) === 'string' && jQuery.type( fn ) === 'function'  ) {

    			//listen for custom event and execute a function
    			//console.log('subscribing to event ', eventName);
    			$( document ).on( eventName, fn);

    			return fn;

    		}

    	}

    	    	//defining an unsubscription method for the observer model
    	$.fn.observerModel.unsubscribe = function( eventName ) {

    		//check input
    		if( jQuery.type( eventName ) === 'string'  ) {

    			//listen for custom event and execute a function
    			//console.log('unsubscribing to event ', eventName);
    			$( document ).off( eventName );

    			return null;

    		}

    	}

    	//defining a publication method for the observer model
    	$.fn.observerModel.publish = function( eventName ) {

    		//check input
    		if( jQuery.type( eventName ) === 'string' ) {
    			//console.log('publishing event ', eventName);
    			//trigger custom event
    			$( document ).trigger( eventName );

    			return eventName;
    		
    		}

    	}

    }

}( jQuery ));

if( $().observerModel ) {

	var o = ['foo', 'bar'];

	$().observerModel( o );

	$().observerModel.subscribe('construct', function( o ) {

		console.log( 'o: ', o )

	});

	$().observerModel.publish('construct');

	$().observerModel.unsubscribe('construct');

	$().observerModel.publish('construct');


}