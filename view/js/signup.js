const signup = async (e) => {
  e.preventDefault();
  const form = e.target;
  const payload = {
    fullanme: form.elements.fullname.value,
    mobile: form.elements.mobile.value,
    email: form.elements.email.value,
    password: form.elements.password.value,
  };

  const responce = await axios.post("http://127.0.0.1:8080//signup", payload);
  console.log(responce);
};
