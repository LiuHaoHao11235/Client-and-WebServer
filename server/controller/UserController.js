const { application } = require("express");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "myproject";
const adminDB = "admin";
const loginForm = [];
const registerForm = [];
async function encryption(encryption_Form, req, res) {
  const salt = await bcrypt.genSalt();
  const hashedPasswaord = await bcrypt.hash(req.body.password, salt);
  const encrypted_Form = { ...req.body, password: hashedPasswaord };
  encryption_Form.push(encrypted_Form);
  console.log("加密成功");
}
//!設置帳號密碼
async function register(req, res) {
  // Use connect method to connect to the server
  await client.connect();
  console.log(`Connected successfully to DataBase${adminDB}`);
  const db = client.db(adminDB);
  const collection = db.collection("users");
  const insertResult = await collection.insertOne({
    ...registerForm,
  });
  console.log("Inserted documents =>", insertResult);
  res.status(201).send("註冊成功");
}
async function get_userdata_from_database(collect) {
  await client.connect();
  console.log(`Connected successfully to DataBase${dbName}`);
  const db = client.db(dbName);
  const collection = db.collection(collect);
  const findResult = await collection.find({}).toArray();
  return findResult;
}
//!登入驗證 從資料庫抓資料比對
async function login_authentication(req, res) {
  await client.connect();
  const db = client.db(adminDB);
  const collection = db.collection("users");
  const findResult = await collection.find({}).toArray();
  console.log("連接資料庫成功");
  console.log(loginForm);
  const user = findResult.find((user) => {
    return user[0].username === loginForm[0].username;
  });

  if (!user) {
    loginForm.pop(0);
    res.status(500).send("查無此帳號");
  } else {
    if (await bcrypt.compare(req.body.password, user[0].password)) {
      console.log("密碼正確 登入成功");
      loginForm.pop(0);
      res.status(200).sent("密碼正確");
    } else {
      console.log("密碼錯誤");
      loginForm.pop(0);
      res.status(500).sent("密碼錯誤");
    }
  }
}
module.exports = {
  sentmeassge: (req, res) => {
    res.send("respond with a resource!!");
  },
  get_commodity: (req, res) => {
    var page = req.query.page;
    //console.log(page);
    if (page) {
      collect = "commodity" + page;
    } else {
      collect = "commodity";
    }
    get_userdata_from_database(collect)
      .then((findResult) => {
        res.json(findResult);
      })
      .catch(console.error)
      .finally(() => {
        console.log("finally");
        client.close();
        res.end();
      });
  },
  get_topphone: (req, res) => {
    collect = "TOP_phones";
    get_userdata_from_database(collect)
      .then((findResult) => {
        res.json(findResult);
      })
      .catch(console.error)
      .finally(() => {
        console.log("finally");
        client.close();
        res.end();
      });
  },
  post_login: async (req, res) => {
    try {
      await encryption(loginForm, req, res);
      await login_authentication(req, res);
      res.end();
    } catch {
      res.end();
    }
  },
  get_login: (req, res) => {
    res.json(loginForm);
  },
  post_register: async (req, res) => {
    try {
      await encryption(registerForm, req, res);
      await register(req, res);
    } catch {
      res.status(500).send("伺服器沒有回應...無法註冊");
    }
  },
};
