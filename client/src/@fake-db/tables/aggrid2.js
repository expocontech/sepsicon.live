import mock from "../mock"
const data = [
  {
    id: "1",
    name: "Mr. Mintu Nath",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "mintu@expocongroup.com",
    mobile: "8121118508",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    question: "I am testing I am testing I am testing",
    timing: "16/06/2020 3:08 AM" 
  },
  {
    id: "2",
    name: "Mr. Shaik Basheeruddin",
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "gmtech@expocongroup.com",
    mobile: "8121118508",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    question: "I am testing I am testing I am testing",
    timing: "14/06/2020 3:08 AM" 
  },
  {
    id: "3",
    name: "Mr. Essie Essie",    
    institute: "AIIMS, Delhi, India",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    question: "A 58 year gentleman complains of fatigue, lack of motivation and disturbed sleep. He has slowing of movements and stiffness in legs, more on right with history of falls and occasional right hand tremors. There is no diurnal variation. What would be the next best step?",
    timing: "14/06/2020 3:08 AM" 
  },
  {
    id: "4",
    name: "Dr. Rakesh Sahay",    
    institute: "Osmania Medical Collage, Hyderabad",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    question: "A 58 year gentleman complains of fatigue, lack of motivation and disturbed sleep.",
    timing: "14/06/2020 3:08 AM" 
  },
  {
    id: "5",
    name: "Mr. Georgette",    
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    question: "A 58 year gentleman complains of fatigue, lack of motivation and disturbed sleep.",
    timing: "14/06/2020 3:08 AM" 
  },
  {
    id: "6",
    name: "Mr. Georgette",    
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    question: "basheer92",
    timing: "14/06/2020 3:08 AM" 
  },
  {
    id: "7",
    name: "Mr. Georgette",    
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    question: "basheer92",
    timing: "14/06/2020 3:08 AM" 
  },
  {
    id: "8",
    name: "Mr. Georgette",    
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    question: "basheer92",
    timing: "14/06/2020 3:08 AM" 
  },
  {
    id: "9",
    name: "Mr. Georgette",    
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    question: "basheer92",
    timing: "14/06/2020 3:08 AM" 
  },
  {
    id: "10",
    name: "Mr. Georgette",    
    institute: "ExpoCon Technologies Pvt. Ltd.",
    email: "Shaik@vaill.com",
    mobile: "8121118508",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    question: "basheer92",
    timing: "14/06/2020 3:08 AM" 
  }
]
mock.onGet("/api/aggrid2/data").reply(200, {
  data
})
