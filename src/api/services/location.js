import camelize from "camelize";
import { location } from "./mock/data";

// const IgnoreCase = (array, query) => {
//   console.log("ln 5", array);
//   const lowercaseArray = array.map((element) => element.toLowerCase());
//   const lowercaseQuery = query.toLowerCase().includes(lowercaseQuery);
//   return lowercaseArray;
// };

export const locationRequest = (data) => {
  return new Promise((resolve, reject) => {
    const locationMock = location[data];
    // const locationData = Object.values(location).map((item) => item.state);
    // let h = IgnoreCase(locationData, data);
    // console.log("location", h);
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  //   const { geometry = {} } = formattedResponse.result[0];
  //   const { lat, lng } = geometry.location;
  return ({ geometry, state } = formattedResponse);
};
