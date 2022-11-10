const TipInput = ({tip, setTip, customTip, setCustomTip}) => {

    const selectTip = val => {
        console.log(typeof tip)
        if(val === tip) return "tip__option tip__option--selected"
        return "tip__option" 
    }

    const handleClick = val => {
        if (val === tip) {
            setTip()
        }else {
            setTip(val)
        }
    }

    const handleCustom = (val) => {
        if (!isNaN(val) && val <= 100) {
            setCustomTip(val/100)
            setTip(val/100)
        } else {
            setCustomTip()
            setTip()
        }
    }

    return(
        <div className="tip">
            <label  className="tip__label">Select Tip %</label>
            <section className="tip__options">
                <option className={selectTip(.05)} value={.05} onClick={ev => handleClick(parseFloat(ev.target.value))}>5%</option>
                <option className={selectTip(.1)} value={.10} onClick={ev => handleClick(parseFloat(ev.target.value))}>10%</option>
                <option className={selectTip(.15)} value={.15} onClick={ev => handleClick(parseFloat(ev.target.value))}>15%</option>
                <option className={selectTip(.25)} value={.25} onClick={ev => handleClick(parseFloat(ev.target.value))}>25%</option>
                <option className={selectTip(.5)} value={.5} onClick={ev => handleClick(parseFloat(ev.target.value))}>50%</option>
                <input className="tip__option tip__option--custom" value={customTip*100} onChange={ev => handleCustom(parseInt(ev.target.value))} type="number" placeholder="Custom"/>
            </section>
        </div>
    )
}

export default TipInput;