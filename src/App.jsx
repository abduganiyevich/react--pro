import Input from "./components/Input/input";
import Textarea from './components/Textarea/index'
import Button from './components/Button/Index'
import Dropdown from './components/Dropdown/index'
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="form-wrapper">
       <h1 className="form-title">Vakansiya yaratish</h1> 
       <p className="form-subtitle">Yangi vakansiyalar uchun ma'lumotlar</p>
       <Input title="Sarlavha" placeholder="Sarlavha" isRequired={true} name="title" id='title'/>

       <div className="tripple-drop">
        <Dropdown title="Ariza topshirish muddati" isRequired={true} id='application'/>
        <Dropdown title="Ish turi" isRequired={true} id='work-type' />
        <Dropdown title="Ish vaqti" isRequired={true} id='work-time'/>
       </div>

       <div className="region">
       <Dropdown title="davlat" isRequired={true} id='country' />
        <Dropdown title="shahar" isRequired={true} id='city'/>
       </div>

       <div className="type">
        <Input title='Soha' placeholder="soha" id='type' isRequired={true} name='type'/>
       </div>

       <div className="skill">
        <Input title='Konikmalar' placeholder="skills" id='skill' isRequired={true} name='skill'/>
       </div>

       <div className="salary">
       <Dropdown title="Maksimal" isRequired={true} id='salary' />
        <Dropdown title="Minimal" isRequired={true} id='salary'/>
       </div>

       <Textarea
       name="izoh"
       title="izoh"
       placeholder='Vakansiya uchun izoh qoldiring'
       id='desc'
       isRequired={false}
       />

       <div className="button-group">
        <Button  clsses='gray-button' title='ortga'/>
        <Button classes='blue-button' title='Davom etish'/>
       </div>
      </div>
    </>
  );
}

export default App;
