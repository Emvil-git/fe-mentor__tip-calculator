import { PersonFill, CurrencyDollar } from 'react-bootstrap-icons';

const NumInput = () => {
    return(
        <div className='input'>
            <label id='input__label'>Bill</label>
            <section className='input__grp'>
                <CurrencyDollar className='input__icon'/>
                <input placeholder='0' type="number" className='input__box'/>
            </section>
        </div>
    )
}

export default NumInput;