

const login = () => {
    return (

        <div className="loginform container">
      <p className="title">Login Form</p>
 
    <form className="App">
    
        <input type="text" className='email' placeholder='Email' /><br />
        <input type="password" className='Password1' placeholder='Password' /><br />
        <input type="submit" className='loginbtn' value={"Submit"} /><br />
        
    </form>
    </div>
    )


}


export default login;