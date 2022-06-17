import React from "react";

const EtextArea = (props) => {
    return (
        <div className={"form-group"}>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea className={"form-control"} id={props.id} rows={props.row}></textarea>
        </div>
    )
}

export default EtextArea;