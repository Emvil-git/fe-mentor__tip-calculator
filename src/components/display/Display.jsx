import { HandIndexFill } from "react-bootstrap-icons"

const Display = ({bill, setBill, tip, setTip, diners, setDiners}) => {

    const reset = () => {
        setBill()
        setTip()
        setDiners()
    }

    const handleTip = () => {
        if (!isNaN(bill) && !isNaN(diners) && diners !== 0) {
            if (tip === undefined) {
                return '$0'
            }
            const indivTip = (bill * tip)/diners
            return `$${indivTip.toFixed(2)}`
        }
        return '--'
    }

    const handleTotal = () => {
        if (!isNaN(bill) && !isNaN(diners) && diners !== 0) {
            if (tip === undefined) {
                const indivTotal = bill/diners
                return `$${indivTotal.toFixed(2)}`
            }
            const indivTotal = (bill + (bill * tip))/diners
            return `$${indivTotal.toFixed(2)}`
        }
        return '--'
    }

    return(
        <div className="display">
            <section>
                <section className="display__wrap">
                    <section className="display__labels">
                        <label className="display__label-amt">Tip Amount</label>
                        <label className="display__label-person">/ person</label>
                    </section>
                    <label className="display__value">{handleTip()}</label>
                </section>
                <section className="display__wrap">
                    <section className="display__labels">
                        <label className="display__label-amt">Total</label>
                        <label className="display__label-person">/ person</label>
                    </section>
                    <label className="display__value">{handleTotal()}</label>
                </section>
            </section>
            <button onClick={() => reset()} className="display__reset">RESET</button>
        </div>
    )
}

export default Display;