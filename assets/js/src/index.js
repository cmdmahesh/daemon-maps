import React, { Component } from 'react'
import './tailwind.css';

export default class DaemonMaps extends Component {
    render() {
        return (
            <>
                <input type="hidden" name="_zoom" value={window.daemon_maps._zoom}/>
                <input type="hidden" name="_lat" value={window.daemon_maps._lat}/>
                <input type="hidden" name="_lng" value={window.daemon_maps._lng}/>

                <div className="w-full h-96" id="daemon_map_container"></div>
            </>
        )
    }
}

/*  */
function daemond_map_init() {
    
    ReactDOM.render( <DaemonMaps/>,(document.getElementById("daemon_maps_meta_container")) );

    window.daemond_map = new google.maps.Map(document.getElementById("daemon_map_container"), {
        center: { lat: Number(window.daemon_maps._lat) , lng:Number(window.daemon_maps._lng) },
        zoom: Number(window.daemon_maps._zoom),
    });
}
window.daemond_map_init = daemond_map_init;

