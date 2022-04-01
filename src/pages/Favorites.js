import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import Layout from '../components/Layout';
import shareIcon from '../images/shareIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  // const history = useHistory();
  const [buttonShare, setButtonShare] = useState([]);
  const [buttonAll, setButtonAll] = useState(true);
  const getFavoritesLocal = () => JSON.parse(localStorage.getItem('favoriteRecipes'))
  || [];

  const allFavoritesRecipes = () => {
    setFavorites(getFavoritesLocal());
  };

  useEffect(() => {
    setFavorites(getFavoritesLocal());
  }, []);

  const shareButton = (id, type) => {
    if (type === 'food') {
      clipboardCopy(`http://localhost:3000/foods/${id}`);
    }
    clipboardCopy(`http://localhost:3000/drinks/${id}`);
    setButtonShare(id);
  };

  const favoritesFoods = () => {
    setButtonAll(false);
    const favoriteFood = getFavoritesLocal().filter((foodsFav) => (
      foodsFav.type === 'food'
    ));
    setFavorites(favoriteFood);
  };

  const favoritesDrinks = () => {
    setButtonAll(false);
    const favoriteDrink = getFavoritesLocal().filter((drinksFav) => (
      drinksFav.type === 'drink'
    ));
    setFavorites(favoriteDrink);
  };

  const favoriteButton = (id, type) => {
    // setFavoriteHeart(false);
    const deleteFav = getFavoritesLocal()
      .filter((favorite) => favorite.id !== id);
    localStorage.setItem('favoriteRecipes',
      JSON.stringify(deleteFav));
    if (buttonAll) setFavorites(getFavoritesLocal());
    if (type === 'food' && buttonAll === false) {
      return favoritesFoods();
    }
    if (type === 'drink' && buttonAll === false) return favoritesDrinks();
  };

  return (
    <Layout title="Favorite Recipes">
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ allFavoritesRecipes }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ favoritesFoods }
      >
        Foods
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ favoritesDrinks }
      >
        Drinks
      </button>
      {
        favorites.map((favorite, index) => (
          <div key={ favorite.id }>
            <Link to={ `/${favorite.type}s/${favorite.id}` }>
              {
                favorite.nationality !== '' ? (
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {`${favorite.nationality} - ${favorite.category}`}
                  </p>)
                  : (
                    <p data-testid={ `${index}-horizontal-top-text` }>
                      {favorite.alcoholicOrNot}
                    </p>)
              }
              <h1 data-testid={ `${index}-horizontal-name` }>{favorite.name}</h1>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ favorite.image }
                alt={ favorite.name }
                style={ {
                  height: '100px',
                  width: '100px',
                } }
              />
            </Link>
            <button
              type="button"
              onClick={ () => shareButton(favorite.id, favorite.type) }
            >
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                alt="icon-share"
              />
            </button>
            {
              buttonShare.includes(favorite.id) && <span>Link copied!</span>
            }
            <button
              type="button"
              onClick={ () => favoriteButton(favorite.id, favorite.type) }
            >
              <img
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeart }
                alt="icon-favorite"
              />
            </button>
          </div>
        ))
      }

    </Layout>
  );
};

export default Favorites;
