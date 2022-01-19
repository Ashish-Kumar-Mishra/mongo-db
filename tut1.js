// inserting data in mongo db
// use ashishkart
db.items.insertOne({ name: "samsung 30s", price: 22000, rating: 4.5, qty: 200, sold: 98 })

db.items.insertMany([{ name: "samsung 30a", price: 22000, rating: 2, qty: 200, sold: 98 },
{ name: " iphone 11", price: 100000, rating: 5, qty: 20, sold: 10 },
{ name: "realme 8i ", price: 10000, rating:4.5 , qty: 50, sold: 34 },
{ name: " realme narzo 30a", price: 20000, rating:4, qty: 200, sold: 100,isBig:true }])


