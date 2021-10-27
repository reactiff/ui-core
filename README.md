# @reactiff/ui-core

UI toolkit foundation

[![NPM](https://img.shields.io/npm/v/@reactiff/ui-core.svg)](https://www.npmjs.com/package/@reactiff/ui-core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


```bash
yarn add @reactiff/ui-core
```

## Usage

```tsx
import * as ui from '@reactiff/ui-core'

return <ui.div>HELLO</ui.div>;

```

## useGridSize()
```tsx

const { code, value } = ui.useGridSize();

```

| Code | Value | Screen Width      |
| ---- | ----- | -------------     |
| xs   | 1     | (less than small) |
| sm   | 2     | > 576         |
| md   | 3     | > 768         | 
| lg   | 4     | > 992         |
| xl   | 5     | > 1200        |
| xxl  | 6     | > 1400        | 
| xxxl | 7     | > 1600        | 

---

## License

MIT © [Rick Ellis](https://github.com/reactiff)
