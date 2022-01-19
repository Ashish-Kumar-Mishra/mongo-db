// show dbs 
// use  ashishkart 
// show collections

db.items.find()
db.items.updateOne({name:" iphone 11"},{$set:{price:1}})

db.items.find()
db.items.updateMany({name:" iphone 11"},{$set:{price:20,rating:1}})
