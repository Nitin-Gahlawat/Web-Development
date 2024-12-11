// Only string can be stores as the data
const user = {
  id: 1,
  name: "John Doe",
  email: ["john.doe@example.com", "sam.doe@example.com"],
  isActive: true,
  preferences: {
    theme: "dark",
    notifications: true,
  },
};

// // Store value in local storage
localStorage.setItem("User", "Local user");
localStorage.setItem("privileges", "Admin");

//get a value from the local storage
console.log(localStorage.getItem("User"));
console.log(localStorage.getItem("privileges"));

//storing a object in localstorage
localStorage.setItem("userdata", JSON.stringify(user));
let x = JSON.parse(localStorage.getItem("userdata"));
console.log(x);
console.log(typeof x);

// removing element from the local storage
localStorage.removeItem("User");

// Clear all items
// localStorage.clear();
