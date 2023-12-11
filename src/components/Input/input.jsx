import './input.css'
export default function input(props) {
  const{title, placeholder,isRequired,name ,id}=props;
  return (
    <div>
        <label className='input-label' htmlFor={id} >{title} &nbsp;
        {
          isRequired && <span>*</span>
        }
        </label>
        <input className='text-input' type="text" placeholder={placeholder} name={name} id={id} />
    </div>
  )
}
