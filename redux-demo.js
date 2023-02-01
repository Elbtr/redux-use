const redux = require("redux");

const counterNumber = (state = { counter: 0 }, action) => {
  if (action.type === "increament") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "dicreament") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = redux.createStore(counterNumber);

const counterSubscriber = () => {
  const lateState = store.getState();
  console.log(lateState);
};
store.subscribe(counterSubscriber);

store.dispatch({ type: "increament" });
store.dispatch({ type: "dicreament" });
