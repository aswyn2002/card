import CarListingCard from "@/components/cardSample/carListingCard";


const carData = [
    {
        id: 1,
        name: "Range Rover Evoque",
        seats: 4,
        gearbox: "Auto Gearbox",
        price: 101,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Range+Rover+Evoque",
    },
    {
        id: 2,
        name: "Volkswagen Golf",
        seats: 7,
        gearbox: "Auto Gearbox",
        price: 150,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Volkswagen+Golf",
    },
    {
        id: 3,
        name: "Fiat 500",
        seats: 5,
        gearbox: "Manual Gearbox",
        price: 120,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Fiat+500",
    },
    {
        id: 4,
        name: "Mercedes G-Wagon",
        seats: 6,
        gearbox: "Auto Gearbox",
        price: 135,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Mercedes+G-Wagon",
    },
    {
        id: 5,
        name: "BMW X5",
        seats: 5,
        gearbox: "Auto Gearbox",
        price: 145,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=BMW+X5",
    },
    {
        id: 6,
        name: "Audi Q7",
        seats: 7,
        gearbox: "Auto Gearbox",
        price: 160,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Audi+Q7",
    },
    {
        id: 7,
        name: "Porsche 911",
        seats: 2,
        gearbox: "Manual Gearbox",
        price: 200,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Porsche+911",
    },
    {
        id: 8,
        name: "Lamborghini Urus",
        seats: 5,
        gearbox: "Auto Gearbox",
        price: 300,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Lamborghini+Urus",
    },
    {
        id: 9,
        name: "Tesla Model X",
        seats: 7,
        gearbox: "Auto Gearbox",
        price: 250,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Tesla+Model+X",
    },
    {
        id: 10,
        name: "Ford Mustang",
        seats: 4,
        gearbox: "Manual Gearbox",
        price: 180,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Ford+Mustang",
    },
    {
        id: 11,
        name: "Chevrolet Camaro",
        seats: 4,
        gearbox: "Manual Gearbox",
        price: 175,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Chevrolet+Camaro",
    },
    {
        id: 12,
        name: "Jaguar F-Type",
        seats: 2,
        gearbox: "Auto Gearbox",
        price: 220,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Jaguar+F-Type",
    },
    {
        id: 13,
        name: "Maserati Levante",
        seats: 5,
        gearbox: "Auto Gearbox",
        price: 240,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Maserati+Levante",
    },
    {
        id: 14,
        name: "Nissan GT-R",
        seats: 2,
        gearbox: "Manual Gearbox",
        price: 260,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Nissan+GT-R",
    },
    {
        id: 15,
        name: "Range Rover Sport",
        seats: 5,
        gearbox: "Auto Gearbox",
        price: 210,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Range+Rover+Sport",
    },
    {
        id: 16,
        name: "Bentley Continental GT",
        seats: 4,
        gearbox: "Auto Gearbox",
        price: 350,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Bentley+Continental+GT",
    },
    {
        id: 17,
        name: "Rolls-Royce Cullinan",
        seats: 5,
        gearbox: "Auto Gearbox",
        price: 500,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Rolls-Royce+Cullinan",
    },
    {
        id: 18,
        name: "Alfa Romeo Giulia",
        seats: 5,
        gearbox: "Manual Gearbox",
        price: 150,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Alfa+Romeo+Giulia",
    },
    {
        id: 19,
        name: "Mini Cooper",
        seats: 4,
        gearbox: "Auto Gearbox",
        price: 110,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Mini+Cooper",
    },
    {
        id: 20,
        name: "Honda Civic",
        seats: 5,
        gearbox: "Manual Gearbox",
        price: 130,
        imageUrl: "https://via.placeholder.com/1170x780.png?text=Honda+Civic",
    }
];



const CarListing = () => {
    return (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {carData.map((car) => (
                <CarListingCard
                    key={car.id}
                    name={car.name}
                    seats={car.seats}
                    gearbox={car.gearbox}
                    price={car.price}
                    imageUrl={car.imageUrl}
                />
            ))}
        </div>
    );
};

export default CarListing;
