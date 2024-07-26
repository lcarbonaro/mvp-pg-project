import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Input from "../components/Input";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const SignUp = () => {
  const auth = useAuth();
  const { user, register } = auth;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get('returnUrl');

  useEffect(() => {
    if (user) {
      navigate(returnUrl || '/');
    }
  }, [user, navigate, returnUrl]);

  const { handleSubmit, register: formRegister, getValues, formState: { errors } } = useForm();

  const submit = async (data) => {
    try {
      await register(data);
      navigate(returnUrl || '/');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <section className="flex flex-col items-center pt-6 dark:text-gray-800">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-50 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-800">
            Create an account
          </h1>
          <form onSubmit={handleSubmit(submit)} className="space-y-4 md:space-y-6" noValidate>
            <div>
              <Input
                type="text"
                label="Name"
                {...formRegister('name', { required: true, minLength: 3 })}
                error={errors.name}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300"
              />
            </div>
            <div>
              <Input
                type="email"
                label="Email"
                {...formRegister('email', {
                  required: true,
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                    message: 'Invalid email address',
                  },
                })}
                error={errors.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300"
              />
            </div>
            <div>
              <Input
                type="text"
                label="Address"
                {...formRegister('address', { required: true, minLength: 10 })}
                error={errors.address}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300"
              />
            </div>
            <div>
              <Input
                type="password"
                label="Password"
                {...formRegister('password', { required: true, minLength: 5 })}
                error={errors.password}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300"
              />
            </div>
            <div>
              <Input
                type="password"
                label="Confirm Password"
                {...formRegister('confirmPassword', {
                  required: true,
                  validate: value => value !== getValues('password') ? 'Passwords Do Not Match' : true,
                })}
                error={errors.confirmPassword}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <Link className="font-medium text-red-500 hover:underline dark:text-red-500" to={`/login?${returnUrl ? `returnUrl=${returnUrl}` : ''}`}>
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;



