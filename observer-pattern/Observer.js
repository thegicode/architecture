const Observer = () => {
    const update = (state) => {
      console.log(`Subject's state has changed to ${state}`);
    };
  
    return {
      update,
    };
  };
  
  export default Observer;
  