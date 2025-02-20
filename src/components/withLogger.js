import React, { useEffect, useState } from 'react';

const withLogger = (WrappedComponent) => {
  const HOC = (props) => {
    
    const [state, setState] = useState('');

    
    useEffect(() => {
      console.log('withLogger => State updated in component:', WrappedComponent.name);
      console.log('withLogger => Current state:', state);
    },[state] ); // to log state changes

    
    useEffect(() => {
      console.log('withLogger => Props passed to component:', WrappedComponent.name);
      console.log(props);
    }, [props]); //to log props

   
    return (
      <WrappedComponent
        {...props}
        {...state}
        state={state}
        setState={setState}  
      />
    );
  };

  return HOC;
};

export default withLogger;
