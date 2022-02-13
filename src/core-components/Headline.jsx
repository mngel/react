export class Headline extends React.Component {
  render () {
    const styles = {
      color: 'red'
    };

    return (
    <h1 className='headline'> { this.props.content } </h1>
    );
  }
}
