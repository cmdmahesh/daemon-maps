import React, { Component } from 'react'
import MarkersList from './admin/markers/MarkersList';
import './tailwind.css';

export default class DaemonMaps extends Component {
    constructor( props ){
        super(props);
        this.props = props;
        this.state = {
            zoom : 3,
            lat : 0,
            lng : 0,
            map : null,
            markers : null,
            polylines : null,

            

        }        
        this.add_marker = this.add_marker.bind(this);
        this.add_polyline = this.add_polyline.bind(this);
    }

    add_marker() {
        let marker = new google.maps.Marker({
            map:this.state.map,
            draggable:true,
            animation: google.maps.Animation.DROP,
            position: {lat:0,lng:0}/* results[0].geometry.location */
        });

        let markers = this.state.markers;
        if(typeof(markers) === typeof(null)) {
            markers = Array();
        }

        let unique_id = "#"+parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(10).toString().replace(".", "")).toString();

        marker.unique_id = unique_id;

        markers[unique_id] = marker;

        this.setState({'markers':markers});
    }

    add_polyline() {

    }

    componentDidMount() {
        window.daemond_map = new google.maps.Map(document.getElementById("daemon_map_container"), {
            center: { lat: Number(window.daemon_maps._lat) , lng:Number(window.daemon_maps._lng) },
            zoom: Number(window.daemon_maps._zoom),
        });
        this.setState({map:window.daemond_map});
    }

    render() {        
        return (
            <>
                <input type="hidden" name="_zoom" value={window.daemon_maps._zoom}/>
                <input type="hidden" name="_lat" value={window.daemon_maps._lat}/>
                <input type="hidden" name="_lng" value={window.daemon_maps._lng}/>

                <div className="w-full h-96" id="daemon_map_container"></div>
                <div className="w-full inline-flex items-baseline" id="daemon_mop_tools">
                    <div className="w-1/3">
                        <h2 className="font-black">Markers</h2>
                        <div className="daemon_trackers">
                            <MarkersList list={this.state.markers}/>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <h2 className="font-black">Polylines</h2>
                        <div className="daemon_polylines"></div>
                    </div>
                    <div className="w-1/3">
                        <h2 className="font-black">Actions</h2>
                        <div className="inline-flex space-x-4">
                            
                            <span className="bg-green-400 p-3 cursor-pointer" onClick={this.add_polyline}>Add Polyline</span>
                        </div>
                    </div>
                </div>
                <div className="w-96" id="daemon_add_marker_form">
                    <h3 className="h-3 pt-4 pb-4 text-left mb-4 font-black">Add Marker</h3>
                    <label for="marker_label" class="marker_label flex space-x-2 items-center mb-4">
                        <span className="w-32">Name</span>
                        <input type="text" class="block w-full text-sm" id="marker_label" name="marker_label"/>
                    </label>
                    <label for="marker_desc" class="marker_desc flex space-x-2 items-center mb-4">
                        <span className="w-32">Description</span>
                        <textarea class="block w-full text-sm" id="marker_desc" name="marker_desc"></textarea>
                    </label>
                    <label class="flex space-x-2 items-center mb-4">
                        <span className="bg-green-400 p-3 cursor-pointer" onClick={this.add_marker}>Add Marker</span>
                    </label>
                </div>
            </>
        )
    }
}

/*  */
function daemond_map_init() {    
    ReactDOM.render( <DaemonMaps/>,(document.getElementById("daemon_maps_meta_container")) );
}
window.daemond_map_init = daemond_map_init;

