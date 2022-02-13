import { Headline } from './core-components/Headline.js';
import { Input } from './core-components/Input.js';
import { Password } from './core-components/Password.js';

export class Login extends React.Component {
  render () {
    const headline = this.props.headline;
    const text = this.props.text;

    return (
      <div>
        <Headline content={ this.props.headline } />
        <Input content={ this.props.user } id='username' />
        <Password content={ this.props.password } id='password' />
      </div>
    );
  }
}
