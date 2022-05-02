import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { incAction, decAction } from '../actions/actions';

const InputElement = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="decrement btn btn-danger mx-2 text-white"
        onClick={() => dispatch(decAction())}
      >
        <span> - </span>
      </button>
      <input
        className="text-center"
        type="text"
        name="quantity"
        value={props.counter}
        readOnly
      />
      <button
        className="increment btn btn-success mx-2 text-white"
        onClick={() => dispatch(incAction(5))}
      >
        <span> + </span>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { counter: state.changeTheNumber };
};

export default connect(mapStateToProps)(InputElement);
