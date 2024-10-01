$(document).ready(function() {
    
    $.getJSON('data.json', function(data) {
      
      data.forEach(function(spot) {
        const name = spot.name;
        const description = spot.description;
        const latitude = spot.location[0];
        const longitude = spot.location[1];
  
       
        const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        
      
        const row = `
          <tr>
            <td>${name}</td>
            <td>${description}</td>
            <td><a href="${mapLink}" target="_blank">Open in Google Maps</a></td>
          </tr>
        `;
        
       
        $('#topSpotsTable').append(row);
      });
    });
  });
  
