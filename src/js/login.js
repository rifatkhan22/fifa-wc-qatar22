async function login() {
  const res = await fetch(`${proxy}http://api.cup2022.ir/api/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "zaploq25@aol.com",
      password: "123456789",
    }),
  });
  const data = await res.json();
  return data.data.token;
}
