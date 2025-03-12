export const Input = ({ label, name, type, placeholder, register, errors }) => {
  return (
    <div className='mb-3'>
      <label className='block text-gray-700'>{label}</label>
      <input name={name} type={type}placeholder={placeholder} {...register} className='w-full border p-2 rounded'/>
      {errors && <p className='text-red-500 text-sm'>{errors}</p>}
    </div>
  );
};
export default Input;