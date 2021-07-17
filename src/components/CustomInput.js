import { useField } from "formik";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const FormikTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label
          className={`${
            meta.touched && meta.error ? "text-red-600" : ""
          } block text-xs font-semibold `}
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        {meta.touched && meta.error ? (
          <ExclamationCircleIcon
            className="text-red-600 inline-flex h-4 w-4"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <input
        className={`${
          meta.touched && meta.error
            ? "border-red-600 focus:ring-red-600 focus:border-red-600"
            : "border-primary-lighter focus:ring-primary focus:border-primary"
        } ${
          props.large ? "py-3" : "py-1.5"
        } appearance-none rounded block w-full px-3 border placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary text-xs`}
        {...field}
        {...props}
      ></input>
      {meta.touched && meta.error && props.showerror ? (
        <div className="text-xs font-normal text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikTextInput;
