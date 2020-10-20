import { combineReducers } from "redux"
import { login } from "./loginReducer"
import { register } from "./registerReducers"
import {cometChat} from "./cometChatReducer"

const authReducers = combineReducers({
  login,
  register,
  cometChat
})

export default authReducers
