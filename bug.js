```javascript
// Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne( { "_id": ObjectId("someId") }, { $inc: { "myField": "1" } } );
```