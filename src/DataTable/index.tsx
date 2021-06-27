import clsx from 'clsx';
import React from 'react';
import { PropsDirectives, useInlineStyle, useStyleDirectives } from '../directives';
import Element from '../Element';

import Header from './Header';
import TableRow from './TableRow';

type Props = { 
    cols: string[],
    items: any[],

};

const Table = (directives: Props & PropsDirectives) => {

    const { 
        cols, 
        items,
        ...other 
    } = directives;
    const { root, data, events } = useStyleDirectives<Props>(other, null);

    const baseStyle = useInlineStyle(() => ({
        root: {
            '& th': { 
                textAlign: 'left', 
                textTransform: 'capitalize',
                paddingLeft: 5,
                paddingRight: 5,
            },
            '& td': {
                borderTop: 'thin solid #80808080',
                paddingTop: 8,
                paddingLeft: 5,
                paddingRight: 5,
                paddingBottom: 0,
                lineHeight: 1,
                textAlign: 'center',
            },
            '& td.number': {
                textAlign: 'right',
            },
        }
    }), [])();

    if (!items) return null;

    return <table 
        cellPadding={0} 
        cellSpacing={0}
        className={clsx(baseStyle.root, root.className)} 
        {...data} 
        {...events}
    >
        {
            cols && 
            cols.length > 0 &&
            <Header cols={cols} />
        }
        <tbody>
            {
                items.map((item: any, itemIndex: number ) => (
                    <TableRow key={itemIndex} item={item} cols={cols} />
                ))
            }
        </tbody>
    </table>
}

export default Table;
