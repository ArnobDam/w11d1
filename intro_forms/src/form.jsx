import React, { useState, useRef } from "react";

function Form(props) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        notifications: ""
    })

    const [errors, setErrors] = useState([]);

    const validate = () => {
        let errors = []

        if (user.name.length === 0) {
            errors.push("Name can't be blank")
        }

        if (user.email.length === 0) {
            errors.push("Email can't be blank")
        } else if (user.email.split("@").length !== 2) {
            errors.push("Email should be properly formatted with @")
        } else if (user.email.split(".").length !== 2) {
            errors.push("Email should be properly formatted with .com, .net, etc")
        }

        if (user.phoneNumber.split("-").length !== 3) {
            errors.push("Format phone number like 888-888-8888")
        } else if (user.phoneNumber.length !== 12) {
            errors.push("Enter valid phone number")
        }

        if (user.bio.length > 280) {
            errors.push("Bio has character limit of 280.")
        }

        return errors
    }

    const handleChange = (field) => {
        return (e) => {
            console.log(e)
            console.log(e.target.checked)
            console.log(e.target.value)
            console.log(user.notifications)

            let newObj;

            if (field === "notifications") {
                if (e.target.checked) {
                    newObj = Object.assign({}, user, { [field]: true })
                } else {
                    newObj = Object.assign({}, user, { [field]: false })
                }
            } else {
                newObj = Object.assign({}, user, { [field]: e.target.value })
            }
            setUser(newObj)
        }
    }
    
    // const [isSubscribed, setIsSubscribed] = useState(false)

    // const handleSubscribe = () => {
    //     setIsSubscribed(current => !current)
    // }


    const handleSubmit = (e) => {
        console.log("hit handleSubmit")
        console.log(user)

        e.preventDefault()
        let errors = validate()



        if (errors.length) {
            setErrors(errors)
        }
    }

    const showErrors = () => {
        if (!errors.length) return null;
        return (
            <ul>
                {errors.map(error => <li>{error}</li>)}
            </ul>
        )
    }

    return (
        <>
            {showErrors()}
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <input
                    type="text"
                    placeholder="name"
                    value={user.name}
                    onChange={handleChange("name")}
                />
                <input
                    type="text"
                    placeholder="email"
                    value={user.email}
                    onChange={handleChange("email")}
                />
                <input
                    type="text"
                    placeholder="XXX-XXX-XXXX"
                    value={user.phoneNumber}
                    onChange={handleChange("phoneNumber")}
                />
                <select name="phoneType" id="phoneType" value={user.phoneType} onChange={handleChange("phoneType")}>
                    <option value="home">home</option>
                    <option value="work">work</option>
                    <option value="mobile">mobile</option>
                </select>

                <input
                    type="radio"
                    id="student"
                    name="staff"
                    value="student"
                    onChange={handleChange("staff")}
                /> student
                <input
                    type="radio"
                    id="instructor"
                    name="staff"
                    value="instructor"
                    onChange={handleChange("staff")}
                /> instructor

                <textarea id="bio" name="bio" value={user.bio} onChange={handleChange("bio")}>
                </textarea>

                <input
                    type="checkbox"
                    id="notifications"
                    value={user.notifications}
                    onChange={handleChange("notifications")}
                />
                <button>Submit</button>
            </form>
        </>
    )


}

export default Form
