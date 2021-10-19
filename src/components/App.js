import { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'


import '../index.css'
import { _getPhones } from '../utils/_Data'
import { receivePhones } from '../actions/phone'
import Container from './container'

function App() {


  useEffect(_getPhones().then((phones)=>{
    this.props.dispatch(receivePhones(phones))
  }))


  return (
    <div>
      <Container/>
    </div>
  );
}

export default connect()(App);
