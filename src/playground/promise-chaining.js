require("../db/mongoose");
const User = require("../models/user");

User.findByIdAndUpdate("609b8c0496cf3d4a50437daa", { age: 50 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 50 });
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
