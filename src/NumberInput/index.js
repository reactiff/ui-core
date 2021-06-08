import React, {useRef} from 'react';
import _ from 'lodash';

// import '../css/numberinput.css';
import { isNullOrUndefined, validation } from '../util/validation';
import Throttle from '../Throttle';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export default function NumberInput(props) {

    const throttleRef = useRef(new Throttle());
    const throttle = throttleRef.current;

    const inputRef = useRef(null);
    const [buffer, setBuffer] = React.useState(props.value);

    const constraints = {
        min: !isNullOrUndefined(props.min) ? props.min : -999,
        max: !isNullOrUndefined(props.max) ? props.max : 999,
        step: props.step || 1,
        precision: props.precision || 0,
    }

    if (constraints.step) {
        const parts = constraints.step.toString().split('.');
        if (parts.length>1) {
            constraints.precision = parts[1].length;
        }
    }

    if (props.unsigned && constraints.min < 0) constraints.min = 0;

    const handleChange = (value) => {

        let parsedValue = parseFloat(value);
        if (parsedValue < constraints.min) parsedValue = constraints.min;
        if (parsedValue > constraints.max) parsedValue = constraints.max;
        
        const newValue = lib.math.roundDecimal(parsedValue, constraints.precision);
        setBuffer(newValue);
    
        if (props.onChange) {
            throttle.invokeWithAnimationFrame(props.onChange, parsedValue);
        }
        
    };

    const handleFocus = (e) => { inputRef.current.select()};
    const handleBlur = (e) => { };
    
    const context = { 
        inputRef,
        handleChange, 
        handleFocus,
        handleBlur,
        props,
        value: buffer,
        ...constraints,
    };

    switch(props.variant) {
        case 'slider':
            return sliderInput(context);
        default:
            return inputWithUpDown(context);
    }
}

export function inputWithUpDown(context) {

    const { inputRef, handleChange, handleFocus, handleBlur, props, value, step, min, max } = context;

    return (
        <ui.Flex row tight className="numeric-input-container">
            <button className="numeric-spinner left" onClick={() => handleChange(value - step)}><span>-</span></button>
            <input 
                ref={inputRef}
                className="numeric-input"
                type="number"
                inputMode="number" 
                pattern="[0-9]*" 
                onChange={(e) => handleChange(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                required={props.required} 
                placeholder={props.placeholder}
                title={props.title}
            />
            <button className="numeric-spinner right" onClick={() => handleChange(value + step)}><span>+</span></button>
        </ui.Flex>
    );
}


export function sliderInput(context) {

    const { inputRef, handleChange, handleFocus, handleBlur, props, value, step, min, max } = context;

    const innerValue = value;
    
    return (
        <ui.Flex row tight alignItems="center" className="slider-input-container">
            <input 
                ref={inputRef}
                className="slider"
                type="range"
                onChange={(e) => handleChange(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                title={props.title}
                value={innerValue}
                min={min}
                max={max}
                step={step}
            />
            <ui.div small marginLeft={15}>
                {innerValue}
            </ui.div>
        </ui.Flex>
    );
}

export function NumericInputLabel(props) {
    return <ui.div className="numeric-input-label">{props.children}</ui.div>;
}

//export const MemoizedNumericInput = React.memo(NumberInput);