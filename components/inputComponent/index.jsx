import { useFormContext } from "react-hook-form";

export function InputComponent({ label, role, name, divStyle, ...rest }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    const error = errors[name];
    return (
        <div className={divStyle}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input {...register(`${name}`, role)} {...rest} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            {error && <span className="text-red-500 text-sm">{error.message}</span>}

        </div>
    )
}


export function TextAreaValidation({ label, name, role, divStyle, ...rest }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    const error = errors[name];
    return (
        <div className={divStyle}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <textarea
                {...register(name, role)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...rest} />
            {error && <span className="text-red-500 text-sm">{error.message}</span>}

        </div>
    )
}