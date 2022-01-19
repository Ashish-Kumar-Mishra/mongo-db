// show dbs 
// use ashishkart
// show collections

db.items.find({ price: 20000 })

//deleting items from the mongo db
db.items.deleteOne({ price: 20000 })
// deleteone will delete the matching document entry and will deletethe first entry in case of multi  document match

db.items.deleteMany({ price: 20000 })