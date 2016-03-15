//queries and aggregations



//Lab 1A
//What I got currently:
.aggregate([
            { $group: {
                _id: "$category",
                count: { $sum: 1},
            } },
            { $project: {
                "count": 1,
                _id: 1,
            } },
            { $sort: { _id: 1 } },
        ])


db.item.aggregate([
{ $group: {
  _id: { category: "$category" },
  num: { $sum: 1},
} },
{ $project: {
  "count": 1,
  _id: 1,
} },
{ $sort: { _id: 1 } },
  ])


//Whatttt
db.item.aggregate([
 { $match: { "category": {$ne: null } } },
 { $group: {
   _id: "$category",
   num: { $sum: 1},
 } },
 { $project: {
   num: 1,
   _id: 1,
 } },
 { $sort: { _id: 1 } },
   ])


db.item.aggregate([
  {$match: { "category": {$ne: null } } },
  { $group: {
    _id: { category: "$category" },
    num: { $sum: 1 }
  } },
  { $sort: {_id: 1 } }
  ]);


// 1B

db.item.find({}).skip(0).limit(5);

//2a

db.item.find({ $text: { $search: "mongodb book" } } ).count()

db.item.createIndex({ title: "text" })

db.item.createIndex({ slogan: "text" })

db.item.createIndex({ description: "text" })

db.item.createIndex(
   {
     title: "text",
     slogan: "text",
     description: "text"
   }
 )

db.item.find({ _id: 1 }).pretty()