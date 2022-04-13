import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value ;
        const email = event.target.email.value;
        const password = event.target.password.value ;
        console.log(name,email,password);
      };
    return (
        <div className='register'>
            <h2 className='text-center'>Create a new account..</h2>
            <form action="" className='mt-4' onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' id="" />
                <input  type="email" name="email" placeholder='Your Email' required id="" />
                <input  type="password" name="password" placeholder='Your Password' required id="" />
                <input type="submit" value="Register" />
            </form>
            <p>
          Already have an acount ?{" "}
          <Link
            className="text-danger text-text-decoration-none pe-auto"
             to='/login'
          >
            Go to login
          </Link>
        </p>
        </div>
    );
};

export default Register;