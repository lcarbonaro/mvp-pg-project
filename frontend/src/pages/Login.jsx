import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import Input from '../components/Input';

const Login = () => {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get('returnUrl'); // get return URL 

  useEffect(() => {
    if (user) {
      returnUrl ? navigate(returnUrl) : navigate('/');
    }
  }, [user, navigate, returnUrl]); 

  const submit = async({ email, password }) => {
    try {
      await login(email, password); // after submit, pass email and password to login function
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  }

  return (
    <section className="flex flex-col items-center pt-6 dark:text-gray-800">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-50 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-800">
            Login to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(submit)} method="" noValidate>
            <div>
              <Input label="email" type="email" {...register('email', { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address'} })}
              error={errors.email}/>
            </div>
            <div>
              <Input label="password" type="password" {...register('password', { required: true})}
              error={errors.password}/>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account?{" "}
              <Link className="font-medium text-red-500 hover:underline dark:text-red-500" to="/signup">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
