export default {
    SET_USER_DETAILS(state, data) {
      console.log(data, "data");
      const { fullname, email,password, phone, balance} = data;
      state.user.fullname = fullname;
      state.user.email = email;
      state.user.phone = phone;
      state.user.password = password;
      state.user.balance = balance;
     
    },
   
}