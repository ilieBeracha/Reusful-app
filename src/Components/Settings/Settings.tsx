import "./Settings.css";
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Settings(): JSX.Element {
    return (
        <div className="Settings">
            <Map
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14
                }}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            />
        </div>
    );
}

export default Settings;
