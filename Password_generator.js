let Big_string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
function generatedPassword(){
  let password=""
  for (let n=0;n<9;n++){
    let index=Math.floor(Math.random() * Big_string.length)
    let q=Big_string[index];
    password+=q
  }
  return password
}
let Password=generatedPassword()
console.log("Your generated password: "+Password)