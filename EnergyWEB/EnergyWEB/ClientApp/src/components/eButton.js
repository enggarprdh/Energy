import React from "react";
import {Button} from "reactstrap";

const Ebutton = (props) => {
    function setColour(value) {
        var colour = "primary";
        if(value != null) {
            switch(value.toLowerCase()){
                case "green":
                    colour = "success";
                    break;
                case "red":
                    colour = "danger";
                    break;
                default:
                    colour = "primary";
                    break;
            }
        }
        return colour;
    }
    function setSize(value){
        var size = "sm";
        if(value != null) {
            switch(value.toLowerCase()){
                case "large":
                    size = "lg";
                    break;
                case "small":
                    size = "sm";
                    break;
                default:
                    size = "sm";
                    break;
            }
        }
        return size;
    }

    return (
            <div>
                <Button 
                block = {props.block}
                color={setColour(props.colour)} 
                onClick={props.event} 
                size={setSize(props.size)} 
                >{props.displayText}</Button>
            </div>
    )
}


export default Ebutton;