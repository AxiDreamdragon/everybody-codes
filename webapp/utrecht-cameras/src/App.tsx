import { useEffect, useState } from 'react';
import './App.css';
import type { Camera } from './Camera';

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
      </div>
      <div className='camera-columns'>
        <div>
          Kolom 1 (minder dan 600)
          {/* iterating over each camera four times is slow, but the database is small enough that it's alright. */}
          <ul>
            {orderedCameraData[0].length > 0 ?
              orderedCameraData[0].map(camera => <li>{camera.name}</li>) :
              <p>Geen camera's gevonden in dit bereik.</p>}
          </ul>
        </div>
        <div>
          Kolom 2 (600-700)
          <ul>
            {orderedCameraData[1].length > 0 ?
              orderedCameraData[1].map(camera => <li>{camera.name}</li>) :
              <p>Geen camera's gevonden in dit bereik.</p>}
          </ul>
        </div>
        <div>
          Kolom 3 (700-800)
          <ul>
            {orderedCameraData[2].length > 0 ?
              orderedCameraData[2].map(camera => <li>{camera.name}</li>) :
              <p>Geen camera's gevonden in dit bereik.</p>}
          </ul>
        </div>
        <div>
          Kolom 4 (overig)
          <ul>
            {orderedCameraData[3].length > 0 ?
              orderedCameraData[3].map(camera => <li>{camera.name}</li>) :
              <p>Geen camera's gevonden in dit bereik.</p>}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
