const express = require("express");
const app = express();
const { User, users } = require("./models/user.model");
const { Company, companies } = require("./models/company.model");

app.get("/api/users/new", (req, res) => {
  res.status(200).json(users);
});

app.get("/api/companies/new", (req, res) => {
  res.status(200).json(companies);
});

app.post("/api/user/company", (req, res) => {
  // const newArr = [];
  // const newUser = new User();
  // newArr.push(newUser);
  // const newCompany = new Company();
  // newArr.push(newCompany);
  res.status(200).json({User: new User(), Company: new Company()});
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
