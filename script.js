var featureIndex = 0;
    var features = [
      {
        image: 'img/det-image2.png',
        title: 'Feature 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id scelerisque turpis.'
      },
      {
        image: 'img/det-image2.png',
        title: 'Feature 2',
        description: 'Vestibulum malesuada dolor ac cursus sollicitudin. Vivamus rutrum tincidunt nulla, eu volutpat neque consectetur et.'
      }
    ];

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