import React from "react";
import { useState } from "react";

const options = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];
function App() {
    const [fruit, setFruit ] = useState("pineapple");

    const handleChange = (event)=> {
      console.log("Fruit Selected!!");
    //   this.setState({fruit: event.target.value }); //hedhy fi west l classe
      setFruit(event.target.value) //hedhy fi west lfunction
      
    }
  
      return (
        <div id="App">
          <div className="select-container">
            <select value={fruit} onChange={handleChange}>
              {options.map((option) => (
                 
                <option value={option.value}>{option.label}</option>
              ))}
            </select>


            {fruit==='pineapple' ? ( //c'est la boucle if
                <select>
                    <option value="afghanistan">Afghanistan</option>
                    <option value="afrique-du-sud">Afrique du Sud</option>
                      <option value="albanie">Albanie</option>
                </select>
                
            ):(null)
            }
          </div>
        </div>
      );
    }
  
  export default App;