import React, {useState} from 'react';

import Desc from './Components/Description/Desc';
import Dropdown from './Components/Dropdown/DropDown';

function App(){
    const [selected, setSelected] = useState({});

  const handleOnSelect = (cat) => {
    console.log(cat);
    setSelected({
      image: cat.image.url,
      name: cat.name,
      desc: cat.description
    });
  };
    return(
        <>
        <div className="Tittle">
            <h1 className='text-red-600 text-center mt-5 mb-2'>Cat API</h1>
        </div>
          <Dropdown selected = {selected.name} setSelected = {handleOnSelect} />
          <Desc image={selected.image} name ={selected.name} desc= {selected.desc}/>
        </>
    )

}


export default App
