// Select input, button, and gallery elements
const imageURL = document.getElementById('imageURL');
const addImageButton = document.getElementById('addImageButton');
const imageGallery = document.getElementById('imageGallery');

// Add image when button is clicked
addImageButton.addEventListener('click', addImage);

// Add image when Enter key is pressed
imageURL.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addImage();
  }
});

function addImage() {
  const url = imageURL.value.trim();

  if (url === '') {
    alert('Please enter a valid image URL!');
    return;
  }

  // Create a new gallery item
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';

  // Create the image element
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Gallery Image';

  // Create the remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    galleryItem.remove();
  });

  // Append image and remove button to gallery item
  galleryItem.appendChild(img);
  galleryItem.appendChild(removeButton);

  // Add the gallery item to the image gallery
  imageGallery.appendChild(galleryItem);

  // Clear the input field
  imageURL.value = '';
}
