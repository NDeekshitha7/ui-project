const Navigation = () => {
    return (
      <div className="Navigation container">
        <p className="title">Navigation Form</p>
   
      <form className="App">
          <input type="text" className='fname' placeholder='First Name' /><br />
          <input type="text" className='lname' placeholder='Last Name' /><br />
          <input type="text" className='email' placeholder='Email' /><br />
          <input type="password" className='Password1' placeholder='Password' /><br />
          <input type="password" className='password2' placeholder='Re-enter password' /><br />
          <input type="submit" className='Navigationbtn' value={"Submit"} /><br />
          
      </form>
      </div>
    );
  }
  
  export default Navigation;