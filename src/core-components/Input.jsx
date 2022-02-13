export function Input (props) {
    return (
        <div className='input'>
            <label for={ props.id }>{ props.content }: </label>
            <input type="text" id={ props.id } name={ props.id } minlength="8" required></input>
        </div>
    );
}
  