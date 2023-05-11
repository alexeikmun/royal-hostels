const roomsArray = [
    {
        price: 100,
        description: 'Standard Room',
        name: 'Room 101',
        maxGuests: 2,
        propertyId: 1,
    },
    {
        price: 150,
        description: 'Deluxe Room',
        name: 'Room 201',
        maxGuests: 4,
        propertyId: 2,
    },
    {
        price: 80,
        description: 'Economy Room',
        name: 'Room 301',
        maxGuests: 2,
        propertyId: 3,
    },
    {
        price: 200,
        description: 'Suite Room',
        name: 'Room 401',
        maxGuests: 6,
        propertyId: 4,
    },
    {
        price: 120,
        description: 'Family Room',
        name: 'Room 501',
        maxGuests: 4,
        propertyId: 5,
    },
    {
        price: 90,
        description: 'Comfort Room',
        name: 'Room 601',
        maxGuests: 3,
        propertyId: 1,
    },
    {
        price: 130,
        description: 'Executive Room',
        name: 'Room 701',
        maxGuests: 2,
        propertyId: 2,
    },
    {
        price: 110,
        description: 'Business Room',
        name: 'Room 801',
        maxGuests: 2,
        propertyId: 3,
    },
];

// Generate random rooms to reach a total of 20
while (roomsArray.length < 20) {
    const room = {
        price: Math.floor(Math.random() * 200) + 50,
        description: 'Random Room',
        name: `Room ${roomsArray.length + 1}`,
        maxGuests: Math.floor(Math.random() * 5) + 1,
        propertyId: Math.floor(Math.random() * 5) + 1,
    };

    roomsArray.push(room);
}

export default roomsArray;
