db.collection('recipes').get().then((snapshot) => {
// when we have the data
//cycle through the array and output the data of each item to console
snapshot.docs.forEach(doc => {
  console.log(doc.data());
})

}).catch(err => {
  console.log(err)
});