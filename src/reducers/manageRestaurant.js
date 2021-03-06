
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch(action.type){
  	case 'ADD_RESTAURANT':
  	  const restaurant = Object.assign({}, action.restaurant, {id: cuidFn()});
      return { restaurants: state.restaurants.concat(restaurant) };
  	case 'DELETE_RESTAURANT':
  	  const restaurants = state.restaurants.filter(i=> i.id !== action.id)
  		return {restaurants}
  	case 'ADD_REVIEW':
  	  const review = Object.assign({}, action.review, {id: cuidFn()});
      return { restaurants: state.restaurants, reviews: state.reviews.concat(review) };
  	case 'DELETE_REVIEW':
  	  const reviews = state.reviews.filter(i=> i.id !== action.id)
  		return {reviews}
  	default:
  	  return state;
  }
}