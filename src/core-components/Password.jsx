export class Password extends React.Component {
    render () {
      return (
          <div  className='input'>
              <label for={ this.props.id }>{ this.props.content }: </label>
              <input type="password" id={ this.props.id } name={ this.props.id } minlength="8" required></input>
          </div>
      );
    }
  }
  