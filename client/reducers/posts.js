// a reducer takes in 2 things
// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  // take a copy with an object spread for future js
  // var pic = {...picture};
  // let pic = Object.assign({}, state);
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const i = action.index;
      return [
        ...state.slice(0,i), //take everything before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), //take everything after the one we are updating
      ]
    default:
      return state;
  }

}

export default posts;
