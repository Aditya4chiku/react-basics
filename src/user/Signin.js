import React from 'react'
import Layout from '../core/Layout'


const Signin = () => {
    const [values, setValues] = React.useState([{
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    }])

    const [data, setData] = React.useState([])


    const { name, email, password } = values

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
        console.log(values)
    }


    const clickSubmit = (event) => {
        event.preventDefault();
        console.log(data, values)
        //setValues({ ...values })
        setData([...data, values])
        console.log(data)
    }


    const submitForm = () => (
        <form>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="UserName"
                    className="form-control"
                    value={name}
                    onChange={handleChange("name")}
                />

                <input
                    placeholder="Email"
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={handleChange("email")}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    className="form-control"
                    onChange={handleChange("password")}
                />

                <button onClick={clickSubmit} className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    )


    const showData = () => {
        return (<table border="1">
            {console.log(data)}
            {
                data.map((val, key) => (
                    <tr>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.password}</td>
                    </tr>
                ))
            }
        </table>)

    }


    return (
        <Layout
            title="Signin Form"
            className="container col-md-8 offset-md-2"
        >
            {submitForm()}

        </Layout>





    )
}
export default Signin