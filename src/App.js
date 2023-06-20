import {useSelector,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import {actioncreator} from './Action-creator'
import './App.css';

function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const {depositMoney,withdrawMoney,resetAccount} = bindActionCreators(actioncreator,dispatch)
  return (
    <div className="App">
      <h2>{account}</h2>
      <button onClick={ ()=> depositMoney(100) }>DEPOSIT</button>
      <button onClick={() => withdrawMoney(50)}>WITHDRAW</button>
      <button onClick={() => resetAccount()}>RESET</button>

    </div>
  );
}

export default App;
