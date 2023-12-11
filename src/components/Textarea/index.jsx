import './index.css'

export default function index(props) {
    const{name, title,placeholder,id,isRequired}=props;
  return (
    <div className='textarea-wrapper'>
        <label className='input-label' htmlFor={id}>
            {title} &nbsp;
            {
                isRequired && <span>*</span>
            }
        </label> <br />
        <textarea name={name} id={id} placeholder={placeholder} className='description'></textarea>
    </div>
  )
}
