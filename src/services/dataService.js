const catalog =[
    {
        "title": "G-Wagon",
        "category": "Mercedes",
        "price": 250.99,
        "image": "G-Wagon.png",
        "_id":"1" // This must be unique
    },
    {
        "title": "F-40",
        "category": "Ferrari",
        "price": 410.99,
        "image": "Ferrari.png",
        "_id":"2" // This must be unique
    },
    {
        "title": "Lambo",
        "category": "Lamborghini",
        "price": 200.99,
        "image": "Lambo.png",
        "_id":"3" // This must be unique
    },
];

class DataService {
    getProducts ()
    {
        return catalog;
    }
}

export default DataService;
