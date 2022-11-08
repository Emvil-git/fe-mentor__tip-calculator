import { PersonFill, CurrencyDollar } from 'react-bootstrap-icons';

const NumInput = ({type}) => {

    const handleLabel = () => {
        switch(type) {
            case 'bill':
                return "Bill";
            case 'people':
                return "No. of People"
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

    return(
        <div className='input'>
            <label id='input__label'>{handleLabel()}</label>
            <section className='input__grp'>
                {handleIcon()}
                {/* <CurrencyDollar className='input__icon'/> */}
                <input placeholder='0' type="number" className='input__box'/>
            </section>
        </div>
    )
}

export default NumInput;