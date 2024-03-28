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
            <input {...register(`${name}`, role)} {...rest} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            {errors && <span className="text-red-500 text-sm">{errors.message}</span>}

        </div>
    )
}

export function InputChangeComponent({ label, role, name, divStyle, value, ...rest }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    const error = errors[name];
    return (
        <div className={divStyle}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input {...register(`${name}`, role)} value={value} onChange={rest.onChange} {...rest} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            {errors && <span className="text-red-500 text-sm">{errors.message}</span>}

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
            <label className="block mb-2 text-md font-medium text-gray-900">{label}</label>
            <textarea
                {...register(name, role)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" {...rest} />
            {error && <span className="text-red-500 text-sm">{error.message}</span>}

        </div>
    )
}

export function FileInput({ label, name, onChange, role, divStyle, ...rest }) {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name]

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        onChange(file);
    };
    return (
        <div className={divStyle}>
            <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input
                onChange={handleFileChange}
                {...register(name, role)} className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="file" />
            <p className="mt-1 text-sm text-gray-500">PNG or JPG.</p>
            {error && <span className="text-red-500 text-sm">{error.message}</span>}
        </div>
    )
}

export function DropDown({ label, name, role, divStyle, values, ...rest }) {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name]
    return (
        <div className={divStyle}>
            <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <select {...register(name, role)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value={""}>{label}</option>
                {
                    values.map((item, index) => <option key={index} value={item}>{item}</option>)
                }
            </select>
        </div>
    )
}