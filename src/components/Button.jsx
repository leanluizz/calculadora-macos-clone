import React from "react";
import '../styles/Button.css';

export default props => {

let classes =  `button
${props.operation ? 'operation' : ''}
${props.double ? 'double' : ''}
${props.triple ? 'triple': ''}
`

return(<button className={classes}
onClick = {() => props.click && props.click(props.label)}
>
{props.label}
</button>
)
}