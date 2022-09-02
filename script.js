const videoElement = document.getElementById('video');
const button = document.getElementById('button');

if ('pictureInPictureEnabled' in document) {
  button.classList.remove('hidden')
  button.disabled = false;
  
  button.addEventListener('click', () => {
    if (document.pictureInPictureElement) {
      document
        .exitPictureInPicture()
        .catch(error => {
          // Error handling
        })
    } else {
      videoElement
      .requestPictureInPicture()
      .catch(error => {
        // Error handling
      });
    }
  });
}

videoElement.addEventListener('enterpictureinpicture', () => {
    button.textContent = 'Exit Picture-in-Picture mode';
});

videoElement.addEventListener('leavepictureinpicture', () => {
    button.textContent = 'Enter Picture-in-Picture mode';
});