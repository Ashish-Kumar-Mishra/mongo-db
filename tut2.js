// searching  data in mongo db
// use ashishkart

// this query will return all the objects with rating to 3
db.items.find({rating:3})
db.items.find({rating:{$gte:3}})
db.items.find({rating:{$gt:3}})

// and operator
db.items.find({rating:{$gt:4},price:{$gt:90000}})

db.items.find({rating:{$lt:3.5},price:{$gt:10000}})


db.items.find({
    $or :[{rating:{$lt:3.5}},{price:{$gt:10000}}]
})

db.items.find({rating:{$gt:3.5}});

