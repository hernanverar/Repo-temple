export default class menuService {
  static getMenu(drinkID) {
    return fetch (`https://thecocktaildb.com/api/json/v1/1/search.php?i=${drinkID}`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}

