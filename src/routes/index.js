const usersController = require("../controllers").users;
const weightController = require("../controllers").weight;
const bpController = require("../controllers").bp;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message:
        "Welcome to the Node API!. Please contact system admin to get api details"
    })
  );

  app.post("/api/create-user", usersController.create);
  app.get("/api/get-users", usersController.list);
  app.get("/api/get-user", usersController.getUserById);
  app.post("/api/save-weight", weightController.saveUserWeight);
  app.get("/api/get-user-weight", weightController.getWeightByUserId);
  app.put("/api/update-user-steps", weightController.updateUserWeight);
  app.delete("/api/delete-user-steps", weightController.deleteUserWeight);
  app.post("/api/save-bp", bpController.saveUserBp);
  app.get("/api/get-user-bp", bpController.getBpByUserId);
};
