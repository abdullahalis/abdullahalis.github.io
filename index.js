// JavaScript to handle car selection and image update
const carSelect = document.getElementById('carSelect');
const selectedCarImage = document.getElementById('selectedCarImage');

// Define the Car object
function Car(year, make, model, image) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.image = image;
}

// Create an array of Car objects
const cars = [
    new Car(2022, 'Nissan', 'GTR', 'path/to/nissan_gtr.jpg'),
    new Car(2022, 'Mazda', 'RX-7', 'path/to/mazda_rx7.jpg'),
    // Add more cars as needed
];

// Populate the dropdown with car options
cars.forEach(car => {
    const option = document.createElement('option');
    option.value = car.make.toLowerCase(); // Using make as a value for simplicity
    option.textContent = `${car.year} ${car.make} ${car.model}`;
    carSelect.appendChild(option);
});

// Set the default selected car (Nissan GTR)
let selectedCar = cars[0];
selectedCarImage.src = selectedCar.image;

function updateSelectedCar() {
    // Find the selected car object based on the selected value
    selectedCar = cars.find(car => car.make.toLowerCase() === carSelect.value);
    selectedCarImage.src = selectedCar.image;
}

function addCar() {
    // Create a new car object (you can customize these values)
    const newCar = new Car(2023, 'NewMake', 'NewModel', 'path/to/new_car.jpg');
    
    // Add the new car object to the array
    cars.push(newCar);

    // Add a new option to the dropdown
    const option = document.createElement('option');
    option.value = newCar.make.toLowerCase(); // Using make as a value for simplicity
    option.textContent = `${newCar.year} ${newCar.make} ${newCar.model}`;
    carSelect.appendChild(option);
}