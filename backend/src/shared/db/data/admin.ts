const seedList = [
    {
        name: 'admin',
        address: '123 admin st.',
        country: 'Colombia',
        city: 'Bogota',
        zipcode: '110111',
        birthday: '1980-02-23',
        phone: '311345678',
        email: 'admin@admin.com',
        password: '1q2w3e4r',
        role: 'ADMIN',
        isSuper: true,
    },
    {
        name: 'host',
        address: '123 host st.',
        country: 'Colombia',
        city: 'Bogota',
        zipcode: '110111',
        birthday: '1980-02-23',
        phone: '311345678',
        email: 'host@host.com',
        password: '1q2w3e4r',
        role: 'HOST',
        isSuper: true,
    },
];

const adminArray = seedList.map((seed) => ({ name: seed }));

export default adminArray;
