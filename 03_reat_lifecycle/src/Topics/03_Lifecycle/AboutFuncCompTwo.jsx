import React, {useState, useEffect} from 'react'



//Example of functional component with state ...
export default function AboutFuncCompTwo() {
    return (

        <div>
            {<MainHeadline></MainHeadline>}
        </div>
    )
}

// child functional component with state ...
const MainHeadline = () => {
    const [greeting, setGreeting] = useState("This is child functional component state");

    return (
    <div>
        <h4>{greeting}</h4>
        <input type="text" value={greeting} onChange={event => setGreeting(event.target.value)}/>
        <UserForm></UserForm>
        {/* <Counter></Counter> */}
    </div>
    );
}


const UserForm = () => {

    /**
     * create a state
     * create function that update the state
     * return the component
     */
    
     //initial state
     const [userName, setUserName] = useState("");
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");

     const handleUserNameInput = event => {
         setUserName(event.target.value);
     }

     const handleFirstNameInput = event => {
         setFirstName(event.target.value);
     }

     const handleLastNameInput = event => {
         setLastName(event.target.value);
     }

     //will display the user information
     const DisplayUserInfo = () => {
         console.log(userName);
         console.log(firstName);
         console.log(lastName);
         
      return (<div>
          <h4>{userName}</h4>
          <h4>{firstName}</h4>
          <h4>{lastName}</h4>
      </div>);
     };

     return <div>
         <h3>User Input Form</h3>
         {/* <input type="text" onChange={handleUserNameInput} value={userName} placeholder="user name"/>
         <input type="text" onChange={handleFirstNameInput} value={firstName} placeholder="first name"/>
         <input type="text" onChange={handleLastNameInput} value={lastName} placeholder="last name"/>

         <button onClick = {DisplayUserInfo}>show info</button> */}

     </div>
}

const Counter = () => {
    const initialCount = localStorage.getItem("storageCOunt" || 0);
    const [count, setCount] = useState(initialCount);

    const handleIncrement = () => {
        setCount(currentCount => currentCount + 1);
    }

    const handleDecrement = () => {
        setCount(currentCount => currentCount -1);
    }

    useEffect(()=>{
        localStorage.setItem("StorageCount", count)
    })
    return <div>

        <h2>Counter</h2>
<h4>{count}</h4>
        <button type="button" onClick={handleIncrement}>Add</button>
<button type="button" onClick={handleDecrement}>Remove</button>
    </div>
}
