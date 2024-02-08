// Fetch radio stations from the backend API
fetch('/api/stations')
  .then(response => response.json())
  .then(stations => {
    const stationsList = document.getElementById('stations-list');
    stations.forEach(station => {
      const stationElement = document.createElement('div');
      stationElement.innerHTML = `
        <h3>${station.name}</h3>
        <p>${station.description}</p>
        <audio controls>
          <source src="${station.streamURL}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      `;
      stationsList.appendChild(stationElement);
    });
  })
  .catch(error => console.error('Error fetching stations:', error));

  const express = require('express');
  const app = express();
  const PORT = 3000;
  
  // Sample data for radio stations
  const stations = [
    {
      id: 1,
      name: 'Cool FM',
      description: 'The coolest tunes around!',
      streamURL: 'http://cool-fm-stream-url.com'
    },
    // Add more stations as needed
  ];
  
  // Route to get all stations
  app.get('/api/stations', (req, res) => {
    res.json(stations);
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  