import { useEffect, useState } from "react";

function Dropdown({selected,setSelected}){
    const [isActive , setActive] = useState(false);
    const [options, setOptions] = useState([]);

    async function getListBreed() {
        const res = await fetch("https://api.thecatapi.com/v1/breeds");
        const json = await res.json();
        setOptions(json)
    }
    useEffect(() => {
        getListBreed();
    },[]);

    return(
       <div className='dropdown' >
           <div className="choose-cats text-center text-2xl mb-5">
                <div className="dropdown-btn" onClick = {(e) => setActive(!isActive)}>
                    {selected || "Choose One"}
                </div>

                
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={(e) => {
                  setSelected(option);
                  setActive(false);
                }}
                className="dropdown-item bg-indigo-500"
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


export default Dropdown;