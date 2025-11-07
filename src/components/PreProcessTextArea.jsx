import { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';
function PreProcessTextArea({ defaultValue, onChange }) {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        var myCollapse = document.getElementById('collapseTarget')
        var bsCollapse = new Collapse(myCollapse, { toggle: false })
        open ? bsCollapse.show() : bsCollapse.hide()
    })

    return (
        <>
            <button className="btn btn-primary m-1" type="button" onClick={() => setOpen(open => !open)}>
                Edit text for preprocess
            </button>
            <div className="collapse m-1" id="collapseTarget">
                <textarea className="form-control" id="proc" defaultValue={defaultValue} onChange={onChange} style={{ height: "40vh" }}></textarea>
            </div>
        </>
    );
}

export default PreProcessTextArea;