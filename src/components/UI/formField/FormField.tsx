import {FormFieldProps} from '../../../interfaces/validationform'
import './style.css'

// ф-ция возвращает Input для форм обратной связи и/или регистрации

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
  <div className="formInput">
    <input
    className='input'
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && <span className="text-red-600">{error.message}</span>}
    </div>
  </>
);
export default FormField;
