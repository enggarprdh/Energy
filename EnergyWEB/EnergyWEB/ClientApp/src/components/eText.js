import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const Etext = (props) => {

    function setData(value, type){
        var res = "";
        if(type.toLowerCase() == "number"){
            res = 0;
        }
        if (value != null){
            res = value;      
        }
        return res;
    }

    function setType(value){
        var res = "text";
        if(value.toLowerCase() == "number"){
            res = "number";
        }
        return res;
    }

    
    return (
        <div>
            <FormGroup>
                <Label for={props.id}>{props.label}</Label>
                <Input type={props.type} onChange={props.onChange} placeholder={props.placeholder} name={props.name}/>
            </FormGroup>
        </div>
        // <div className={"form-group"}>
        //     <label htmlFor={props.id}>{props.label}</label>
        //     <input type={setType(props.type)} onChange={props.onChange} className={"form-control"} id={props.id} value={setData(props.value,props.type)}></input>
        //     {props.hintMessage != "" ? <small id={props.id + "Help"} className="form-text text-muted">{props.hintMessage}</small>:""}
        // </div>
    )
}

export default Etext;