import React, { Component } from 'react'

export default class MarkersList extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let markers = this.props.list;
        if(typeof(markers) === typeof(null)) {
            return(<></>);
        } else {

            let marker_list = markers.map((mkr)=>{
                if(!mkr.hasOwnPropery('unique_id')) {
                    mkr.unique_id = '';
                }

                if(!mkr.hasOwnPropery('title')) {
                    mkr.title = '';
                }

                return(<div className="" data-id={mkr.unique_id}>{mkr.title}</div>);
            });
        }
    }
}
