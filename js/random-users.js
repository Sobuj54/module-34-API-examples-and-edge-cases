const random = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayRandom(data));
};

const displayRandom = (users) => {
  // gender
  console.log(users.results[0].gender);
  const gender = document.getElementById("gender");
  gender.innerHTML = users.results[0].gender;
  // email
  console.log(users.results[0].email);
  const email = document.getElementById("email");
  email.innerHTML = users.results[0].email;
  // picture
  console.log(users.results[0].picture.medium);
  const image = document.getElementById("image");
  image.innerHTML = users.results[0].picture.medium;

  console.log(users.results[0].phone);
  const phone = document.getElementById("phone");
  phone.innerHTML = users.results[0].phone;
};

random();
