import React from "react";

const Etext = (props) => {
    return (
        <div className={"form-group"}>
            <label for="test">Cuman test</label>
            <input type="text" className={"form-control"} id="test"></input>
            <small id="testHelp" className="form-text text-muted">ini hint</small>
        </div>
    )
}

export default Etext;