import React from 'react';
import { PropsDirectives, useInlineStyle, useStyleDirectives } from '../directives';
import Panel from './Panel';

// import './page.css'
import * as divRowCol from '../Layout';
import * as hooks from '../hooks';
import { fnOrValue } from '../util/lang';

const ui = {
    ...divRowCol,
    ...hooks,
}

export class PageProps { 
    header?:    any;
    children?:  any;
}

const _ownProps = new PageProps();

export const Layout = (directives: PageProps & PropsDirectives) => {
    const { ...other }                = directives;
    const { root, props, data } = useStyleDirectives<PageProps>(other, _ownProps);

    const style = useInlineStyle({
        root: {
            minHeight: '100vh;',
            // border="thin dotted red",

            '& > .column': {
                // border="thin dotted red",

                '& > .row': {
                    // border="thin dotted red",
                    height: '100vh;',

                    '& > .page-panel': {
                        backgroundColor: '#80808011',
                    },
                }
            }
        }
    }, [])();

    return (
        <ui.row className={`page-layout ${root.className} ${style.root}`} {...data} tight >
            <ui.col wide>
                {
                    props.header &&
                    fnOrValue(props.header)
                }
                <ui.row>
                    { props.children }
                </ui.row>
            </ui.col>
        </ui.row>
    )
};


export default {
    layout: Layout,
    panel: Panel,
};
