import React from 'react'
import Layout from '../core/Layout'
const Signup = () => {

    const [values, setValues] = React.useState([{
        email: "",
        password: ""
    }])

    const [login, setLogin] = React.useState([])

    const { email, password } = values

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
        console.log(values)
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        console.log(values)
    }

    const signUpForm = () => (
        <div>
            <form>
                <div>
                    <input
                        type="text"
                        value={email}
                        placeholder="email"
                        className="form-control"
                        onChange={handleChange("email")}
                    />
                    <input
                        type="text"
                        value={password}
                        placeholder="password"
                        className="form-control"
                        onChange={handleChange("password")}
                    />
                    <button onClick={clickSubmit}
                        className="btn btn-success"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )


    return (
        <Layout
            title="Signup Form"
            description="Signup to App"
            className="container col-md-8 offset-md-2"
        >
            {signUpForm()}
        </Layout>
    )
}
export default Signup