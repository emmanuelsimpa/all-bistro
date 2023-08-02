import React, {
  useState,
  createContext,
  Children,
  useEffect,
  useContext,
} from "react";
import { restaurantApi, transformResponse } from "./RestuarantApi";
import { LocationContext } from "../services/locationContext";

export const RestuarantContext = createContext();

export const RestuarantProvider = ({ children }) => {
  const { location } = useContext(LocationContext);
  const [restuarants, setRestuarant] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveResturant = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantApi(data)
        // .then(transformResponse)
        .then((response) => {
          setIsLoading(false);

          // setRestuarant(response);
          setRestuarant(transformResponse(response.restaurant));
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      retrieveResturant(location);
    }
  }, [location]);

  return (
    <RestuarantContext.Provider value={{ restuarants, isLoading, error }}>
      {children}
    </RestuarantContext.Provider>
  );
};
