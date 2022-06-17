import React from "react";

const Ebutton = (props) => {
    function setColour(value) {
        var colour = "btn-primary";
        if(value != null) {
            switch(value.toLowerCase()){
                case "green":
                    colour = "btn-success";
                    break;
                case "red":
                    colour = "btn-danger";
                    break;
                default:
                    colour = "btn-primary";
                    break;
            }
        }
        return colour;
    }
    function setSize(value){
        var size = "btn-sm";
        if(value != null) {
            switch(value.toLowerCase()){
                case "large":
                    size = "btn-lg";
                    break;
                case "small":
                    size = "btn-sm";
                    break;
                default:
                    size = "btn-sm";
                    break;
            }
        }
        return size;
    }
    return <button type={"button"} onClick={props.event} className={"btn " + setColour(props.colour) + " " + setSize(props.size)}>{props.displayText}</button>
}


export default Ebutton;