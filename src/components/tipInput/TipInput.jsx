const TipInput = () => {
    return(
        <div className="tip">
            <label  className="tip__label">Select Tip %</label>
            <section className="tip__options">
                <option className="tip__option">5%</option>
                <option className="tip__option">10%</option>
                <option className="tip__option">15%</option>
                <option className="tip__option">25%</option>
                <option className="tip__option">50%</option>
                <input className="tip__option tip__option--custom" type="number" placeholder="Custom"/>
            </section>
        </div>
    )
}

export default TipInput;