import React, { createContext, useState, useContext } from 'react';

// Create the context
const EmailContext = createContext();

// Create a provider component
export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState(null);

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

// Custom hook to use the email context
export const useEmail = () => useContext(EmailContext);
