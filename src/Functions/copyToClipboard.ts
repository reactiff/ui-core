import { fnOrValue } from "../util/lang";

export const copyToClipboard = (inputOrText?: HTMLInputElement | HTMLElement | string | Function | null) => {
    if (!inputOrText) return;
    let input = fnOrValue(inputOrText);
    if (typeof input === 'string') {
        const value = input;
        input = document.getElementById('copyToClipboardVirtualInput')
        if (!input) {
            // create virtual Input
            input = document.createElement('input');
            input.style = 'position: absolute; top: 0; left: 0; height: 1px; width: 1px; padding: 0; border: 0; opacity: 0;';
            input.setAttribute("type", "text");
            input.setAttribute("id", "copyToClipboardVirtualInput");
            document.body.appendChild(input);
        }
        input.setAttribute("value", value);
    }
    input.select();
    input.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
}

export default {
    copyToClipboard,
}