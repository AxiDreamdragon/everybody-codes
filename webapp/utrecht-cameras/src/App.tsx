import { useEffect, useState } from 'react';
import './App.css';
import type { Camera } from './Camera';
import CameraData from './CameraData';
import CameraMap from './CameraMap';
import echtIcon from './assets/wapen-echt-rood.svg';
import CameraSearch from './CameraSearch';
import SearchProvider from './SearchContext';

function App() {
  const [orderedCameraData, setOrderedCameraData] = useState<Camera[][]>([[], [], [], []]);

  useEffect(() => {
    const fetchCameraData = async () => {
      const response = await fetch('/api/search.php');
      const rawData = await response.json();

      //I feel like this could be cleaner but it works - if I have time left I can look at it in detail
      setOrderedCameraData(() => {
        const newData: Camera[][] = [[], [], [], []];

        for (const camera of rawData) {
          const typedCamera: Camera =
          {
            id: camera[0],
            name: camera[1],
            lat: camera[2],
            lng: camera[3]
          };

          if (typedCamera.id < 600) {
            newData[0].push(typedCamera);
          } else if (typedCamera.id < 700) {
            newData[1].push(typedCamera);
          } else if (typedCamera.id < 800) {
            newData[2].push(typedCamera);
          } else {
            newData[3].push(typedCamera);
          }
        }

        return newData;
      });
    }

    fetchCameraData();
  }, []);


  return (
    <div className='content'>
      <nav>
        <img src={echtIcon} className='echt-icon' />
        <h1>Cameras</h1>
      </nav>
      <div>
        <SearchProvider>
          <CameraSearch />
          <CameraMap cameras={orderedCameraData.flat()} />
          <CameraData orderedCameraData={orderedCameraData} />
        </SearchProvider>
      </div>
    </div>
  )
}

export default App;
