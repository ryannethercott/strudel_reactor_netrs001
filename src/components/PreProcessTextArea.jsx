function PreProcessTextArea({ defaultValue, onChange, onClick }) {

    return (
        <>
            <button className="btn btn-primary m-1" type="button" onClick={onClick}>
                Edit text for preprocess
            </button>
            <div className="collapse m-1" id="collapseTarget">
                <textarea className="form-control" id="proc" onChange={onChange} style={{ height: "40vh" }}></textarea>
            </div>
        </>
    );
}

export default PreProcessTextArea;