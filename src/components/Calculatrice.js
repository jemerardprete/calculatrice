import { useState } from 'react';

function Calculatrice() {

    const [cpt, updateCpt] = useState("");

    function addbits(string) {
        var total = 0;
        string = string.match(/[-]*(\.\d+|\d+(\.\d+)?)/g) || [];

        while (string.length) {
            total += parseFloat(string.shift());
        }
        return total;
    }

    return (
        <div className="main" >
            <div className="screen">
                {cpt ? (
                    cpt
                ) : (
                    0
                )}
            </div>
            <div className="numbers">
                <input className="btn-nb" type="button" value="1" onClick={() => updateCpt(cpt + "1")} />
                <input className="btn-nb" type="button" value="2" onClick={() => updateCpt(cpt + "2")} />
                <input className="btn-nb" type="button" value="3" onClick={() => updateCpt(cpt + "3")} />
                <input className="btn-nb" type="button" value="4" onClick={() => updateCpt(cpt + "4")} />
                <input className="btn-nb" type="button" value="5" onClick={() => updateCpt(cpt + "5")} />
                <input className="btn-nb" type="button" value="6" onClick={() => updateCpt(cpt + "6")} />
                <input className="btn-nb" type="button" value="7" onClick={() => updateCpt(cpt + "7")} />
                <input className="btn-nb" type="button" value="8" onClick={() => updateCpt(cpt + "8")} />
                <input className="btn-nb" type="button" value="9" onClick={() => updateCpt(cpt + "9")} />
            </div>
            <div className="operation">
                <input className="btn-op" type="button" value="+" onClick={() => updateCpt(cpt + "+")} />
                <input className="btn-op" type="button" value="-" onClick={() => updateCpt(cpt + "-")} />
                <input className="btn-op" type="button" value="=" onClick={() => updateCpt(addbits(cpt))} />
            </div>
        </div>
    )

}
export default Calculatrice;