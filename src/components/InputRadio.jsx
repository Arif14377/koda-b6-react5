export function InputRadio(props) {
  const { id, placeholder, value, label, ...rest } = props;
  return (
    <div className="flex gap-4">
        <input type="radio" name={name} id={id} value={value} className="focus:border-blue-600 focus:outline-hidden" {...rest}/>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}