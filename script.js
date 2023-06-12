var featureIndex = 0;
    var features = [
      {
        image: 'img/det5.png',
        title: 'Coming Soons',
        description: 'Our app is still under development the rest of the features coming soon and are in progress of working still.'
      },
      {
        image: 'img/det3.png',
        title: 'Find Nearby Laundry',
        description: 'You can find nearby laundry by geolocation system that we have implemented.'
      },
      {
        image: 'img/det2.png',
        title: 'Find Nearby Laundry',
        description: 'Vestibulum malesuada dolor ac cursus sollicitudin. Vivamus rutrum tincidunt nulla, eu volutpat neque consectetur et.'
      },
      {
        image: 'img/det4.png',
        title: 'Find Nearby Laundry',
        description: 'Vestibulum malesuada dolor ac cursus sollicitudin. Vivamus rutrum tincidunt nulla, eu volutpat neque consectetur et.'
      },
      
    ];
    var slideInterval = setInterval(showNextFeature, 99999); // Auto slide interval in milliseconds (5 seconds)

    function showNextFeature() {
      var featureImage = document.getElementById('featureImage');
      var featureTitle = document.getElementById('featureTitle');
      var featureDescription = document.getElementById('featureDescription');

      // Hide the current feature
      var currentFeature = document.querySelector('#features .feature');
      currentFeature.classList.add('hidden');

      // Update the feature index
      featureIndex++;
      if (featureIndex >= features.length) {
        featureIndex = 0;
      }

      // Set a timeout to update the content and show the next feature after the animation
      setTimeout(function() {
        featureImage.src = features[featureIndex].image;
        featureTitle.textContent = features[featureIndex].title;
        featureDescription.textContent = features[featureIndex].description;

        // Show the next feature
        currentFeature.classList.remove('hidden');
      }, 300); // Adjust the timeout duration to match the transition duration in CSS
    }

    