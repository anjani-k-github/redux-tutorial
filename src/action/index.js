const submittedData=(data)=>{
    console.log("data on the action ", data)
    return{
        type:"SUBMITTED",
        payload: data
    };
}

export default submittedData;