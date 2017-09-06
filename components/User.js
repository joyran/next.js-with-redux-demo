import { connect } from 'react-redux';
import { readUser } from '../reducers/user';

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.bio}</h3>
      <div>
        <button onClick={() => props.dispatch(readUser())}>Load</button>
      </div>
    </div>
  )
}

export default connect(state => state)(User);
