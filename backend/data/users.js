import bcrypt from "bcryptjs";

const users = [
  {
    name: "Irwanto",
    email: "irwantoadmin@yahoo.com",
    password: bcrypt.hashSync("irwantoadmin", 10),
    isAdmin: true,
  },
  {
    name: "Rina Pratama",
    email: "rinapratama@yahoo.com",
    password: bcrypt.hashSync("rinapratama", 10),
  },
  {
    name: "Budi Rahardja",
    email: "budirahardja@yahoo.com",
    password: bcrypt.hashSync("budirahardja", 10),
  },
];

export default users;
