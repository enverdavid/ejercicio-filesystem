//Imports de los módulos
//fs y path
const fs = require("fs/promises");

const getUsers = async () => {
  //Leer el archivo

  try {
    const data = await fs.readFile("users.json", { encoding: "utf-8" });
    return JSON.parse(data);
  } catch (error) {
    console.log(err);
  }

  //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
};


const addUser = async (userObj) => {
    
    try {
      //leer el archivo
    const data = await fs.readFile("users.json", { encoding: "utf-8" });

    //convertir el contenido en formato JSON en un objeto JS
     const arreglo = JSON.parse(data);

     //agregar el usuario en el arreglo
    arreglo.push(userObj)

    //sobreescribir el arreglo en el archivo
    fs.writeFile("users.json", JSON.stringify(arreglo));

    //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
    //que acabas de agregar en el arreglo
    return userObj;

  } catch (error) {
    console.log(err);
  }

};

const clearUsers = async () => {
  //Vaciar el arreglo y sobreescribir el archivo
  try {
    fs.writeFile("users.json", '[]');
  } catch (error) {
      console.log(error)
  }
  //Si el proceso se realizó correctamente tendrás que regresar true
  return true
};

module.exports = {
  getUsers,
  addUser,
  clearUsers,
};
