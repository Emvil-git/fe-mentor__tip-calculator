const Display = () => {
    return(
        <div className="display">
            <section className="display__wrap">
                <section className="display__labels">
                    <label className="display__label-amt">Tip Amount</label>
                    <label className="display__label-person">/ person</label>
                </section>
                <label className="display__value">$4.27</label>
            </section>
            <section className="display__wrap">
                <section className="display__labels">
                    <label className="display__label-amt">Total</label>
                    <label className="display__label-person">/ person</label>
                </section>
                <label className="display__value">$4.27</label>
            </section>
            <button>RESET</button>
        </div>
    )
}

export default Display;