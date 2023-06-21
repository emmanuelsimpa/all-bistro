import camelize from "camelize";

export const restaurantApi = (location = "Hejjdllfjj") => {
  return new Promise((resolve, reject) => {
    const mock = location;
    if (!mock) {
      return reject("Couldn't find a location");
    }
    resolve(mock);
  });
};

export const transformResponse = ({ results = [] }) => {
  const mappedResults = results.map((item) => {
    item.photos = item.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * mockImages)];
    });

    return {
      ...item,
      isClosedTemporarily: item.business === "CLOSED_TEMPORARILY",
      isOpenNow: item.opening_hours && item.opening_hours.open_now,
    };
  });
  // return camelize(mappedResults);
  return mappedResults;
};

restaurantApi()
  .then(transformResponse)
  .then((result) => {
    console.log(camelize(result));
  })
  .catch((err) => {
    console.log(err);
  });
