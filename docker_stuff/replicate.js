rs.initiate( {
  _id : "rs0",
  members: [
    { _id: 0, host: "mongodb01a:27017" },
    { _id: 1, host: "mongodb01b:27017" },
  ]
});
