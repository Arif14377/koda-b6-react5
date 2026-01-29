/**
 * InputText Component
 * @typedef {Object} PropsInputText
 * @property {string} idName - The id and name for the input element
 * @property {string} labelInput - The text for the label input
 */

/**
 * 
 * @param {PropsInputText} props 
 * @returns
 */

function InputText(props) {
  const { idName, labelInput, placeholder, ...rest } = props;
  return (
    <div className="flex flex-col rounded-lg w-full bg-white shadow-lg px-4 py-6 gap-6">
        <label htmlFor={idName}>{labelInput} <span className="text-red-600">*</span> </label>
        <input  type="text" id={idName} placeholder={placeholder} className="focus:border-blue-600 focus:outline-hidden" {...rest}/>
    </div>
  )
}

export default InputText