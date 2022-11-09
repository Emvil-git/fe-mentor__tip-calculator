import { useState } from 'react';
import { PersonFill, CurrencyDollar } from 'react-bootstrap-icons';

const NumInput = ({type, sVar, setSVar}) => {

    const [isInvalid, setIsInvalid] = useState(false);

    const handleLabel = () => {
        switch(type) {
            case 'bill':
                return "Bill";
            case 'people':
                return "Number of People"
        }
    }

    const handleId = () =>{
        switch(type) {
            case 'bill':
                return "bill-input";
            case 'people':
                return "diners-input"
        }
    }

    const handleValidity = () => {
        const input = document.querySelector('#diners-input')
        if (type === 'people' && input.value == 0) {
            input.setCustomValidity("no diners")
            setIsInvalid(true)
        } else {
            input.setCustomValidity("");
            setIsInvalid(false)
        }
    }

    const handleIcon = () => {
        switch(type) {
            case 'bill':
                return <CurrencyDollar className='input__icon'/>
            case 'people':
                return <PersonFill className='input__icon'/>
        }
    }

    const handleVal = () => {
        if(sVar === undefined) return ''
        return sVar
    }

    return(
        <div className='input'>
            <section id='input__labels'>
                <label id='input__label'>{handleLabel()}</label>
                {isInvalid && <label id='input__error'>Can't be Zero</label>}
            </section>
            <section className='input__grp'>
                {handleIcon()}
                {/* <CurrencyDollar className='input__icon'/> */}
                <input
                placeholder='0'
                type="number"
                value={handleVal()}
                onChange={ev => setSVar(parseFloat(ev.target.value))}
                onInput={() => handleValidity()}
                id={handleId()}/>
            </section>
        </div>
    )
}

export default NumInput;