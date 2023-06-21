import React, { useState, createContext, Children, useEffect } from "react";
import { restaurantApi, transformResponse } from "./RestuarantApi";

export const RestuarantContext = createContext();

export const RestuarantProvider = ({ children }) => {
  const [restuarants, setRestuarant] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveResturant = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantApi()
        .then(transformResponse)
        .then((response) => {
          setIsLoading(false);
          setRestuarant(response);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveResturant();
  }, []);
  return (
    <RestuarantContext.Provider value={{ restuarants, isLoading, error }}>
      {children}
    </RestuarantContext.Provider>
  );
};
