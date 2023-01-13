import React from "react";

const Title = (props) => {
    console.log(props);
    return (
        <h1>{props.saludo}
        </h1>
    );
}

export default Title;