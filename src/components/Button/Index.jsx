import './index.css'

export default function Index(props) {
    let {title,classes,}=props;
    classes +=" button";
  return (
    <button className={classes}>{title}</button>
   
  )
}
