import React, { useRef} from "react";
import {useDispatch} from 'react-redux';
import submittedData from './action/index.js' 

const Formcomp = () => {
  const nameRef = useRef();
  const modelRef = useRef();
  const dispatch = useDispatch()

  const dataSubmitted = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const model = modelRef.current.value;

    const data = { name, model };
     
    dispatch(submittedData(data))
   console.log("data on the form component",data)
  };

  

  return (
    <div>
      <form onSubmit={dataSubmitted}>
          Name:
        <input type="text" id="name" name="name" ref={nameRef} />
        Model:
        <input type="text" id="model" name="model" ref={modelRef} />
        <button type="submit" > Submit
                  </button>
      </form>
    </div>
  );
};

export default Formcomp ;

