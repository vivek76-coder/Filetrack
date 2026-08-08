const login = async (e)=>{
    try{
        e.preventDefault()
    const form = e.target
    const element = form.elements
    const payload = {
        email : element.email.value,
        password: element.password.value
    }
    await axios.post('http://localhost/api/login', payload)
    console.log("login success")
    } catch(err) {
        console.log(err.message)
    }
}
