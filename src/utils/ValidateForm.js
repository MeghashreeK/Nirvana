export const ValidateForm=(email,password)=>{
const emailValidate=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const passwordValidate=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/.test(password);

if(!emailValidate) return "*Email is not valid";
if(!passwordValidate) return "*Password is not valid";

return null;

}