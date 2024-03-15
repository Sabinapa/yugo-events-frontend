import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';

const MapView = ({ }) => {
    const navigate = useNavigate();
    const [markerClicked, setMarkerClicked] = useState(false);

    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM({
                        attributions: [], // remove the openstreetmap copyright text (and a random marker that appears?!?!? tf)
                    }),
                }),
            ],
            view: new View({
                //center: [15.6557, 46.5472], // centers the map on Maribor (change later to better fit our needs)
                center: fromLonLat([16.9960, 46.5473]),
                zoom: 6,
            }),
        });

        // mouse position control - for displaying the current mouse position on the map
        const mousePositionControl = new MousePosition({
            coordinateFormat: createStringXY(4),
            projection: 'EPSG:4326',
            className: 'custom-mouse-position',
            target: document.getElementById('mouse-position'),
            undefinedHTML: '&nbsp;',
        });

        map.addControl(mousePositionControl);

        // adding markers (find a better solution when we start implementing multiple points of interest, ex. make a list in a json file and just read from that)
        const marker = new Feature({
            geometry: new Point(fromLonLat([15.6442, 46.5567]))
        });

        const markerStyle = new Style({
            image: new Icon({
                src: 'https://openlayers.org/en/latest/examples/data/icon.png',
                anchor: [0.5, 1] // fixes a little bug where the map marker would be centered reletive to itself (the middle of the marker would be 0, 0 now its at the bottom of the marker)
            })
        });

        marker.setStyle(markerStyle);

        

        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [marker]
            })
        });

        map.addLayer(vectorLayer);

        map.on('click', function (evt) {
            map.forEachFeatureAtPixel(evt.pixel, function (feature) {
                if (feature === marker) {
                    console.log('Marker clicked');
                    setMarkerClicked(true);
                }
            });
        });


        return () => {
            map.setTarget(null);
        };
    }, []);

    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ flex: 1, margin: '50px' }}>
            <div id="map" style={{ width: '750px', height: '750px' }}>
                <div id="mouse-position" style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '5px' }}></div>
            </div>
        </div>
        <div style={{ flex: 1, margin: '50px', padding: '20px' }}>
            {markerClicked && <p>Info about the specific location (to be implemented)</p>}
        </div>
    </div>
    );
};

export default MapView;