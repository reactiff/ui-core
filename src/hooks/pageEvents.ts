import {useState, useEffect, useRef} from 'react'; 
const isClient = typeof window === 'object'; 
const gridSizeValues: any = { 
    xs: 1, 
    sm: 2, 
    md: 3, 
    lg: 4, 
    xl: 5, 
    xxl: 6, 
    xxxl: 7, 
}; 
const breakpointSystem = {
    bootstrap: [ 
        [1600, 'xxxl'], 
        [1400, 'xxl'], 
        [1200, 'xl'], 
        [992, 'lg'], 
        [768, 'md'], 
        [576, 'sm'] 
    ],
    material: [ 
        [1920, 'xl'], 
        [1280, 'lg'], 
        [960, 'md'], 
        [600, 'sm'] 
    ],
}
const getGridSize = (system: 'material' | 'bootstrap') => { 
    if(!isClient) return 'xs'; 
    const breaks = breakpointSystem[system];
    for(let x of breaks) { 
        if(window.innerWidth >= x[0]) { 
            return x[1] as string; 
        } 
    } 
    return 'xs'; 
} 

const makeGridSizeResult = (code: string) => ({ code, value: gridSizeValues[code] });
export const useGridSize = (system: 'material' | 'bootstrap') => {                          // useGridSize
    const ref = useRef({ value: 'xs', ticking: false }).current;
    const [state, setState] = useState(() => makeGridSizeResult(getGridSize(system))); 
    useEffect(
        () => windowEventHandler(
            ref, 
            (gridSize: any) => setState(makeGridSizeResult(gridSize)), 
            'resize', 
            () => getGridSize(system)
        )
    , []); 

    return state; 
} 

function getWindowHeight() { return window.innerHeight }
export const useWindowHeight = () => {                                                      // useWindowHeight
    const ref = useRef({ value: 0, ticking: false }).current;
    const [state, setState] = useState(() => !isClient ? 0 : getWindowHeight()); 
    useEffect(
        () => windowEventHandler(ref, setState, 'resize', getWindowHeight)
    , [ref]) ;
    return state;
} 


function getWindowWidth() { return window.innerWidth }
export const useWindowWidth = () => {                                                       // useWindowWidth
    const ref = useRef({ value: 0, ticking: false }).current;
    const [state, setState] = useState(() => !isClient ? 0 : getWindowWidth()); 
    useEffect(
        () => windowEventHandler(ref, setState, 'resize', getWindowWidth)
    , [ref]);
    return state;
} 

const getScrollPosition = () => document.body.scrollTop || document.documentElement.scrollTop; 
export const useScrollPosition = () => {
    const ref = useRef({ value: 0, ticking: false }).current;
    const [state, setState] = useState(() => !isClient ? 0 : getScrollPosition()); 
    useEffect(
        () => windowEventHandler(ref, setState, 'scroll', getScrollPosition)
    , [ref]); 
    return state; 
} 

function windowEventHandler(ref: any, setState: Function, event: string, readValue: Function, compare?: Function) {
    if (!isClient) return; 
    const handleEvent = () => { 
        const value = readValue();
        const compareValues = compare || ((a: any , b: any) => a === b);
        if (compareValues(ref.value, value)) return;
        ref.value = value;
        if (!ref.ticking) { 
            window.requestAnimationFrame(() => { 
                setState(ref.value); 
                ref.ticking = false; 
            }); 
            ref.ticking = true; 
        } 
    }; 
    window.addEventListener(event, handleEvent); 
    return () => window.removeEventListener(event, handleEvent); 
}