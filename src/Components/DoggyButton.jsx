import React, { useState } from 'react';

const DoggyButton = ({buttonText, functionOnClick}) => {

    const [isClicked, setIsClicked] = useState(false);

    const customButtonText = buttonText;

    const style = {
        button: {
            display: "flex",
            color: "white",
            width: "7em",
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
            overflow: "hidden",
            borderRadius: "10px",
            border: "1px solid black",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "#8a9ab9",
            boxShadow: "#8a9ab9 3px 3px 5px"
            
        },
        clickedButton: {
            display: "flex",
            color: "white",
            width: "7em",
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
            overflow: "hidden",
            borderRadius: "10px",
            border: "1px solid black",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "#8a9ab9",
            boxShadow: "#8a9ab9 0px 0px 5px",
            transform: "translateY(2px)"
            
        }
    }

    //The timeouts are used to create the visual effect of clicking a button
    //They do not affect any functionality
    function activeFunctionWithDelay(functionOnClick) {
        setTimeout(() => {
            setIsClicked(false);
        }, 100);
        setTimeout(() => {
            functionOnClick();
        }, 250);
    }

    return (
        <div onClick={() => {setIsClicked(true); activeFunctionWithDelay(functionOnClick)}} style={isClicked ? style.clickedButton : style.button}>
            {customButtonText}
        </div>
    )
}

export default DoggyButton;