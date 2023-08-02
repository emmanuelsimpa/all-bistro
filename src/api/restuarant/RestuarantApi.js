import camelize from "camelize";
import { MockImages, RestuarantData } from "./mock/data";

export const restaurantApi = (location) => {
  return new Promise((resolve, reject) => {
    const mock = RestuarantData.search(location.state);
    if (!mock) {
      return reject("Couldn't find a location");
    }
    resolve(mock);
  });
};

export const transformResponse = (results) => {
  const mappedResults = results.map((item) => {
    item.image = MockImages[Math.floor(Math.random() * 11) + 1];
    item.rating = Math.floor(Math.random() * 5) + 1;
    return {
      ...item,
      isClosedTemporarily: item.business === "CLOSED_TEMPORARILY",
      isOpenNow: item.opening_hours && item.opening_hours.open_now,
    };
  });
  // return camelize(mappedResults);
  return mappedResults;
};

// restaurantApi()
//   .then(transformResponse)
//   .then((result) => {
//     console.log("ln 33", camelize(result));
//   })
//   .catch((err) => {
//     console.log(err);
//   });
