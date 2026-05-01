const catalog =[
    {
        "title": "Orange",
        "category": "fruit",
        "price": 12.99,
        "image": "orange.png",
        "_id":"1" // This must be unique
    },
    {
        "title": "Strawberry",
        "category": "Berry",
        "price": 13.99,
        "image": "strawberry.png",
        "_id":"2" // This must be unique
    },
    {
        "title": "Apple",
        "category": "fruit",
        "price": 14.99,
        "image": "apple.png",
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
