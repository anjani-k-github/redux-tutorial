const dataSubmitted = (state = "", action) => {
  
  console.log("data on reducer",action.payload)
  switch (action.type) {
    case "SUBMITTED":
      return [...state,
                 action.payload
      ];

    default:
      return state;
  }
};

export default dataSubmitted;
