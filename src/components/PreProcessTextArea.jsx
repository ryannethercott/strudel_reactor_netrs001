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
            <button className="btn btn-primary" type="button" onClick={() => setOpen(open => !open)}>
                Text for preprocess v
            </button>
            <div className="collapse m-1" id="collapseTarget">
                <textarea className="form-control" id="proc" defaultValue={defaultValue} onChange={onChange} style={{ height: "40vh" }}></textarea>
            </div>
        </>
    );
}

export default PreProcessTextArea;