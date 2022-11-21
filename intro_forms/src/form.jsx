import React, {useState, useRef} from "react";

function Form (props) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        notifications: ""
    })



    return (
        <>
            <form className="form"> 
                <h1>Sign Up</h1>
                <input
                type="text"
                placeholder="name"
                value={user.name}
                />
                <input
                type="text"
                placeholder="email"
                value={user.email}
                />
                <input
                type="text"
                placeholder="phone number"
                value={user.phoneNumber}
                />
                <select name="phoneType" id="phoneType" value={user.phoneType}>
                    <option value="home">home</option>
                    <option value="work">work</option>
                    <option value="mobile">mobile</option>
                </select>
                <input
                    type="radio"
                    id="student"
                    value="student"
                /> student
                <input
                    type = "radio"
                    id = "instructor"
                    value="instructor"
                /> instructor

                <textarea id="bio" name="bio" value={user.bio}>
                </textarea>

                <input
                type = "checkbox"
                id="notifications"
                value={user.notifications}
                />
            </form>
        </>
    )


}

export default Form
