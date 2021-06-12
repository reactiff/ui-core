import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import ui from '@reactiff/ui-core'



import '@reactiff/ui-core/dist/style.css'

// import './css/index.css'
// import './css/orthogonal.css'
// import './css/flex.css'



const badges = '[![NPM](https://img.shields.io/npm/v/@reactiff/ui-core.svg)](https://www.npmjs.com/package/@reactiff/ui-core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)';

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
  
    <ui.page.layout> 

      <ui.page.panel id="left_panel" minWidth={100} width="20%" noMobile>

        <h1>@reactiff/ui-core</h1>
        <p>UI toolkit foundation</p>
        <ReactMarkdown children={badges} />
      </ui.page.panel>

      <ui.col alignCenter>
        
        
        <div className={`flex column align-center ${styles.root}`}>
          <h1 className="value">
            Nothing
          </h1>
        </div>
        <p>
          <a href="https://www.npmjs.com/package/@reactiff/ui-core">npm</a> | <a href="https://github.com/reactiff/package-name">git</a> | MIT © <a href="https://github.com/reactiff">Rick Ellis</a>
        </p>
      </ui.col>

    </ui.page.layout>

    
  )
}

export default App
