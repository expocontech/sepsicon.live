import mock from "../mock"
const data = [
  {
    id: "1",
    name: "Mr. Mintu Nath",
    designation: "CEO",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "mintu@expocongroup.com",
    mobile: "8121118508",
    password: "basheer92",
    cpassword: "basheer92"
  },
  {
    id: "2",
    name: "Mr. Shaik Basheeruddin",
    designation: "CEO",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "gmtech@expocongroup.com",
    mobile: "8121118508",
    password: "basheer92",
    cpassword: "basheer92"
  },
  {
    id: "3",
    name: "Mr. Essie Essie",
    designation: "CEO",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    password: "123",
    cpassword: "123"
  },
  {
    id: "4",
    name: "Mr. Georgette",
    designation: "CEO",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    password: "123",
    cpassword: "123"
  },
  {
    id: "5",
    name: "Mr. Georgette",
    designation: "CEO",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    password: "123",
    cpassword: "123"
  },
  {
    id: "6",
    name: "Mr. Georgette",
    designation: "CEO",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    password: "123",
    cpassword: "123"
  },
  {
    id: "7",
    name: "Mr. Georgette",
    designation: "CEO",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    password: "123",
    cpassword: "123"
  },
  {
    id: "8",
    name: "Mr. Georgette",
    designation: "CEO",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    password: "123",
    cpassword: "123"
  },
  {
    id: "9",
    name: "Mr. Georgette",
    designation: "CEO",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    password: "123",
    cpassword: "123"
  },
  {
    id: "10",
    name: "Mr. Georgette",
    designation: "CEO",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    password: "123",
    cpassword: "123"
  }
]
mock.onGet("/api/aggrid1/data1").reply(200, {
  data
})
