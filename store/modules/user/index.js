/***
 *
 * Course Module
 *
 *
 */

 import getters from "./getters";
 import mutations from "./mutations";
 import actions from "./actions";
 
 export default {
   state: {
     user: {
       fullname: "",
       email: "",
       password: "",
       phone: "",
       balance:5
     }
   },
   getters,
   actions,
   mutations
 };