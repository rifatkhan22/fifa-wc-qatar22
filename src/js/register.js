const proxy = "https://cors-anywhere.herokuapp.com/";
async function register() {
  const res = await fetch(`${proxy}http://api.cup2022.ir/api/v1/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Rifat Khan",
      email: "zaploq25@aol.com",
      password: "123456789",
      passwordConfirm: "123456789",
    }),
  });
  const data = await res.json();
  console.log(data);
}

//register();
