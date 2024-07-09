// pages/index.js
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
    const [datasets, setDatasets] = useState([]);
    const [selectedDataset, setSelectedDataset] = useState(null);
    const [availableBands, setAvailableBands] = useState([]);
    const [selectedBands, setSelectedBands] = useState([]);
    const [dateRange, setDateRange] = useState({ start: '2010-01-01', end: '2011-12-31' });
    const [measurement, setMeasurement] = useState('mean');
    const [orbitPass, setOrbitPass] = useState('ASCENDING');
    const [mapData, setMapData] = useState(null);

    useEffect(() => {
        fetch('/api/datasets')
            .then(response => response.json())
            .then(data => {
                setDatasets(data);
                const defaultDataset = data[14];
                if (defaultDataset) {
                    setSelectedDataset(defaultDataset.id);
                    setAvailableBands(defaultDataset.bands || []);
                    setSelectedBands(defaultDataset.bands.map(band => band.id) || []);
                }
            });
    }, []);

    useEffect(() => {
        if (selectedDataset) {
            const dataset = datasets.find(d => d.id === selectedDataset);
            setAvailableBands(dataset ? dataset.bands : []);
            setSelectedBands(dataset ? dataset.bands.map(band => band.id) : []);
        }
    }, [selectedDataset]);

    const handleDatasetChange = (e) => {
        setSelectedDataset(e.target.value);
    };

    const handleBandChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedBands(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/process', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                dataset: selectedDataset,
                bands: selectedBands,
                dateRange: dateRange,
                measurement: measurement,
                orbitPass: selectedDataset === 'COPERNICUS/S1_GRD' ? orbitPass : undefined,
            }),
        });
        const data = await response.json();
        console.log(data); // Print the response for debugging purposes
        setMapData(data);
    };

    return (
        <div>
            <h1>Select Dataset and Parameters</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Dataset:
                    <select onChange={handleDatasetChange} value={selectedDataset}>
                        {datasets.map(dataset => (
                            <option key={dataset.id} value={dataset.id}>{dataset.id}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Bands:
                    <select multiple onChange={handleBandChange} value={selectedBands}>
                        {availableBands.map(band => (
                            <option key={band.id} value={band.id}>{band.id}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Date Range:
                    <input type="date" value={dateRange.start} onChange={(e) => setDateRange({...dateRange, start: e.target.value})} />
                    <input type="date" value={dateRange.end} onChange={(e) => setDateRange({...dateRange, end: e.target.value})} />
                </label>
                <label>
                    Measurement:
                    <select value={measurement} onChange={(e) => setMeasurement(e.target.value)}>
                        <option value="mean">Mean</option>
                        <option value="max">Max</option>
                        <option value="min">Min</option>
                        <option value="median">Median</option>
                    </select>
                </label>
                {selectedDataset === 'COPERNICUS/S1_GRD' && (
                    <label>
                        Orbit Pass:
                        <select value={orbitPass} onChange={(e) => setOrbitPass(e.target.value)}>
                            <option value="ASCENDING">Ascending</option>
                            <option value="DESCENDING">Descending</option>
                        </select>
                    </label>
                )}
                <button type="submit">Submit</button>
            </form>
            {mapData && <Map data={mapData} />}
        </div>
    );
}
