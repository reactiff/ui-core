import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import ui from '@reactiff/ui-core'

const md = `
[![NPM](https://img.shields.io/npm/v/@reactiff/ui-core.svg)](https://www.npmjs.com/package/@reactiff/ui-core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
`;

const App = () => {

  const [state, setState] = useState<any>();

  useEffect(() => {
    const run = () => {
      const newState = { value: 0 };
      setState(newState);
      setTimeout(run, 1000);
    }
    run();
  }, [setState]);

  const styles = ui.useInlineStyle({
    root: { 
      border: '4px solid #ffffff',
      padding: 30,
      '& > .value': { 
        fontSize: '3rem',
        margin: '0 0 15px 0',
      }
    }
  }, [])();

  return (
    <div> 
      <ui.col alignCenter>
        <h1>
          @reactiff/ui-core
        </h1>
        <p>
          UI toolkit foundation
        </p>
        <ReactMarkdown>
          {md}
        </ReactMarkdown>
        <div className={`flex column align-center ${styles.root}`}>
          <h1 className="value">
            Nothing
          </h1>
        </div>
        <p>
          <a href="https://www.npmjs.com/package/@reactiff/ui-core">npm</a> | <a href="https://github.com/reactiff/package-name">git</a> | MIT © <a href="https://github.com/reactiff">Rick Ellis</a>
        </p>
      </ui.col>
    </div>
  )
}

export default App
