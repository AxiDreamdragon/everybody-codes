import { useEffect, useState } from 'react';
import './App.css';
import type { Camera } from './Camera';
import ColumnData from './ColumnData';
import CameraMap from './CameraMap';

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
    <div>
      <nav>
        <h1>Utrecht Cameras</h1>
      </nav>
      <div>
        <CameraMap cameras={orderedCameraData.flat()} />
      </div>
    </div>
  )
}

export default App;
