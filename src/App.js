import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incAction, decAction } from './actions/index';

function App() {
  const myState = useSelector(state => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
        <div className=" mt-5 p-3 container text-center">
          <h2> Welcome to React Redux</h2>
          <h3>Increment & Decrement Counter</h3>
          <div>
            <button className="decrement btn btn-danger mx-2 text-white" onClick={() => dispatch(decAction())}><span> - </span></button>
            <input className="text-center" type="text" name="quantity" value={myState} readOnly/>
            <button className="increment btn btn-success mx-2 text-white" onClick={() => dispatch(incAction(5))} ><span> + </span></button>
          </div>
        </div>
    </>
  );
}

export default App;
