const Subject = () => {
    let observers = [];
  
    const addObserver = (observer) => {
      observers.push(observer);
    };
  
    const removeObserver = (observer) => {
      observers = observers.filter(obs => obs !== observer);
    };
  
    const notifyObservers = () => {
      observers.forEach(observer => observer.update(state));
    };
  
    let state = 0;
  
    const setState = (newState) => {
      state = newState;
      notifyObservers();
    };
  
    return {
      addObserver,
      removeObserver,
      setState,
    };
  };
  
  export default Subject;
  