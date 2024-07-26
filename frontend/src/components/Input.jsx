import { forwardRef } from "react";
import PropTypes from 'prop-types';

const Input = ({ label, type, defaultValue, onChange, onBlur, name, error }, ref) => {
    const errorMessage = () => {
        if (!error) return;
        if (error.message) return error.message;
        switch (error.type) {
            case "required":
                return 'This field is required';
            case "minLength":
                return 'Field is Too Short';
            default:
                return '*';
        }
    };

    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">
                {label}
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300"
                placeholder={label}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <p className="text-red-500">{errorMessage()}</p>}
        </div>
    );
};

// Add propTypes validation and defaultProps to the Input function directly
const ForwardedInput = forwardRef(Input);
Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    name: PropTypes.string.isRequired,
    error: PropTypes.shape({
        message: PropTypes.string,
        type: PropTypes.string,
    }),
};

Input.defaultProps = {
    type: 'text',
    defaultValue: '',
    onBlur: () => {},
    error: null,
};



export default ForwardedInput;
