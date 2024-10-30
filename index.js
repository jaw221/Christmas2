// Event listener for your cat's image upload
document.getElementById("yourCatInput").addEventListener("change", function() {
    const input = this; // The file input
    const container = document.querySelector("section#Cats > div:first-of-type div"); // Selector for Maou's images

    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            // Create a new image element
            const img = document.createElement("img");
            img.src = e.target.result; // Set the image source to the uploaded file
            img.style.width = "100%"; // Make it fill the container
            img.style.height = "150px"; 
            img.style.objectFit = "cover"; 
            img.style.borderRadius = "15px"; 

            // Append the image to the container
            container.appendChild(img);
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    } else {
        alert("Please choose an image file.");
    }
});

// Event listener for friend's cat image upload
document.getElementById("friendsCatInput").addEventListener("change", function() {
    const input = this; // The file input
    const container = document.querySelector("section#Cats > div:nth-of-type(2) div"); // Selector for Yuri's images

    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            // Create a new image element
            const img = document.createElement("img");
            img.src = e.target.result; // Set the image source to the uploaded file
            img.style.width = "100%"; // Make it fill the container
            img.style.height = "150px"; 
            img.style.objectFit = "cover"; 
            img.style.borderRadius = "15px"; 

            // Append the image to the container
            container.appendChild(img);
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    } else {
        alert("Please choose an image file.");
    }
});
