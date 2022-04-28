// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouterAndStore from './renderWithRouterAndStore';
// import App from '../App';

// const EXPLORE_FOODS_BUTTON_TEST_ID = 'explore-foods';
// const EXPLORE_DRINKS_BUTTON_TEST_ID = 'explore-drinks';
// const SEARCH_BUTTON_TEST_ID = 'search-top-btn';
// const EXPLORE_FOODS_INGREDIENTS_BTN_TEST_ID = 'explore-by-ingredient';
// const EXPLORE_FOODS_NACIONALITY_BTN_TEST_ID = 'explore-by-nationality';
// const EXPLORE_FOODS_SURPRISE_BTN_TEST_ID = 'explore-surprise';
// const ROUTE_EXPLORE_FOODS = '/explore/foods';
// const ROUTE_EXPLORE_DRINKS = '/explore/drinks';
// const endpointFoods = 'https://www.themealdb.com/api/json/v1/1/random.php';
// const endpointDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

// const apiResponse = Promise.resolve({
//   json: () => Promise.resolve(endpointFoods),
//   ok: true,
// });
// const mockedExchange = jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);
// // const randomDrinks = jest.spyOn(global, 'fetch')
// //   .mockImplementation(() => Promise.resolve({
// //     ok: true,
// //     json: async () => (endpointDrinks),
// //   }));

// console.log(global.fetch());

// // afterEach(() => jest.clearAllMocks());

// describe('Verificar a tela de explore', () => {
//   const { history } = renderWithRouterAndStore(<App />);
//   beforeEach(() => {
//     history.push('/explore');
//   });

//   test('Tem os data-testids explore-foods e explore-drinks', () => {
//     const titleExplore = screen.getByRole('heading', {
//       name: /Explore/i, level: 1,
//     });
//     expect(titleExplore).toBeInTheDocument();
//     expect(screen.getByTestId(EXPLORE_FOODS_BUTTON_TEST_ID)).toBeInTheDocument();
//     expect(screen.getByTestId(EXPLORE_DRINKS_BUTTON_TEST_ID)).toBeInTheDocument();
//   });

//   test('Verificar se os nomes nos botões são "Explore Foods" e "Explore Drinks"', () => {
//     console.log('location2', history.location.pathname);
//     expect(screen.getByRole('button', { name: /explore foods/i })).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /explore drinks/i })).toBeInTheDocument();
//   });

//   test(`Verificar se ao clicar no botão "Explore Foods" a pagina é
//   redirecionada para a pagina de explorar comidas`, () => {
//     const btnFoods = screen.getByTestId(EXPLORE_FOODS_BUTTON_TEST_ID);
//     userEvent.click(btnFoods);
//     expect(history.location.pathname).toBe('/explore/foods');
//   });

//   test(`Verificar se ao clicar no botão "Explore Drinks" a pagina é
//   redirecionada para a pagina de explorar drinks`, () => {
//     history.push('/explore');
//     const btnDrinks = screen.getByTestId(EXPLORE_DRINKS_BUTTON_TEST_ID);
//     userEvent.click(btnDrinks);
//     expect(history.location.pathname).toBe('/explore/drinks');
//   });
// });

// describe('Verificar a tela de explorar comidas', () => {
//   const { history } = renderWithRouterAndStore(<App />);
//   beforeEach(() => {
//     history.push(ROUTE_EXPLORE_FOODS);
//   });

//   test('Tem os data-testids', () => {
//     const titleExplore = screen.getByRole('heading', {
//       name: /Explore foods/i, level: 1,
//     });
//     expect(titleExplore).toBeInTheDocument();
//     expect(screen.getByTestId(SEARCH_BUTTON_TEST_ID)).not.toBeInTheDocument();

//     expect(screen.getByTestId(EXPLORE_FOODS_INGREDIENTS_BTN_TEST_ID)).toBeInTheDocument();
//     expect(screen.getByTestId(EXPLORE_FOODS_NACIONALITY_BTN_TEST_ID)).toBeInTheDocument();
//     expect(screen.getByTestId(EXPLORE_FOODS_SURPRISE_BTN_TEST_ID)).toBeInTheDocument();
//   });

//   test(`Verificar se os nomes nos botões são "By Ingredients", "By Nationality",
//   "Surprise Me!"`, () => {
//     const byIngredientsBtn = screen.getByRole('button', {
//       name: /By Ingredients/i,
//     });
//     const byNationalityBtn = screen.getByRole('button', {
//       name: /By Nationality/i,
//     });
//     const surpriseMeBtn = screen.getByRole('button', {
//       name: /Surprise Me!/i,
//     });
//     expect(byIngredientsBtn).toBeInTheDocument();
//     expect(byNationalityBtn).toBeInTheDocument();
//     expect(surpriseMeBtn).toBeInTheDocument();
//   });

//   test('Verificar se ao clicar no botao "By Ingredient" a pagina é redirecionada', () => {
//     const btnIngredients = screen.getByTestId(EXPLORE_FOODS_INGREDIENTS_BTN_TEST_ID);
//     userEvent.click(btnIngredients);
//     expect(history.location.pathname).toBe('/explore/foods/ingredients');
//   });

//   test(`Verificar se ao clicar no botao "By Nacionality" a pagina é
//   redirecionada`, () => {
//     const btnNacionality = screen.getByTestId(EXPLORE_FOODS_NACIONALITY_BTN_TEST_ID);
//     userEvent.click(btnNacionality);
//     expect(history.location.pathname).toBe('/explore/foods/nationalities');
//   });

//   test(`Verificar se ao clicar no botao "Surprise Me!" a pagina é
//   redirecionada`, () => {
//     const btnSurprise = screen.getByTestId(EXPLORE_FOODS_SURPRISE_BTN_TEST_ID);
//     userEvent.click(btnSurprise);
//     expect(history.location.pathname).toBe(`/foods/${randomFood.idMeal}`);
//   });
// });

// describe('Verificar a tela de explorar drinks', () => {
//   const { history } = renderWithRouterAndStore(<App />);
//   beforeEach(() => {
//     history.push(ROUTE_EXPLORE_DRINKS);
//   });

//   test('Tem os data-testids', () => {
//     const titleExplore = screen.getByRole('heading', {
//       name: /Explore drinks/i, level: 1,
//     });
//     expect(titleExplore).toBeInTheDocument();
//     expect(screen.getByTestId(SEARCH_BUTTON_TEST_ID)).not.toBeInTheDocument();

//     expect(screen.getByTestId(EXPLORE_FOODS_INGREDIENTS_BTN_TEST_ID)).toBeInTheDocument();
//     expect(screen.getByTestId(EXPLORE_FOODS_NACIONALITY_BTN_TEST_ID))
//       .not.toBeInTheDocument();
//     expect(screen.getByTestId(EXPLORE_FOODS_SURPRISE_BTN_TEST_ID)).toBeInTheDocument();
//   });

//   test(`Verificar se os nomes nos botões são "By Ingredients",
//     "Surprise Me!"`, () => {
//     const byIngredientsBtn = screen.getByRole('button', {
//       name: /By Ingredients/i,
//     });
//     const surpriseMeBtn = screen.getByRole('button', {
//       name: /Surprise Me!/i,
//     });
//     expect(byIngredientsBtn).toBeInTheDocument();
//     expect(surpriseMeBtn).toBeInTheDocument();
//   });

//   test('Verificar se ao clicar no botao "By Ingredient" a pagina é redirecionada',
//     async () => {
//       const btnIngredients = screen.getByTestId(EXPLORE_FOODS_INGREDIENTS_BTN_TEST_ID);
//       userEvent.click(btnIngredients);
//       expect(history.location.pathname).toBe('/explore/drinks/ingredients');
//     });

//   test(`Verificar se ao clicar no botao "Surprise Me!" a pagina é
//     redirecionada`, async () => {
//     const btnSurprise = screen.getByTestId(EXPLORE_FOODS_SURPRISE_BTN_TEST_ID);
//     userEvent.click(btnSurprise);
//     expect(history.location.pathname).toBe(`/drinks/${randomDrinks.idDrink}`);
//   });
// });
