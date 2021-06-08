import React, { ReactNode } from 'react';
import { PropsDirectives, useStyleDirectives } from '../directives';
import * as ui from '../Layout';
import { fnOrValue } from '../util/logic';

export class PanelProps { 
    sticky?:    boolean = false;
    stickyTop?: number  = 0;
    children?:  ReactNode;
}

const _ownProps = new PanelProps();

export const Panel = (directives: PanelProps & PropsDirectives) => {
    const { ...other }                = directives;
    const { root, props, attr, data } = useStyleDirectives<PanelProps>(other, _ownProps, undefined,'page-panel');
    return (
        <ui.col className={root.className} {...data} alignSelfStretch> 
            <ui.div 
                relative 
                alignSelfStart
                sticky={props.sticky} 
                top={props.sticky ? props.stickyTop : undefined} 
            >
                {fnOrValue(props.children)}
            </ui.div>
        </ui.col>
    )
};


export default Panel;