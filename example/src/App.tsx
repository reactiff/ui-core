import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import ui from '@reactiff/ui-core'

import './css/index.css'
import './css/orthogonal.css'
import './css/flex.css'

const badges = '[![NPM](https://img.shields.io/npm/v/@reactiff/ui-core.svg)](https://www.npmjs.com/package/@reactiff/ui-core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)';

const App = () => {

  const [state, setState] = useState<any>();

  // hooks 
  const winSize = ui.useWindowSize();

  useEffect(() => {
    const run = () => {
      const newState = { value: 0 };
      setState(newState);
      // setTimeout(run, 1000);
    }
    run();
  }, [setState]);
  

  const cardStyle = {
    border: '4px solid #ffffff',
    padding: '30px',
    '& > .value': { 
      fontSize: '3rem',
      margin: '0 0 15px 0',
    }
  };

  return (
  
    <ui.page.layout> 

      <ui.page.panel id="left_panel" minWidth={100} width="20%" noMobile>


        <ui.div css={{backgroundColor: '#ffffff11', padding: '15px'}} wide borderBox>
          <h1>@reactiff/ui-core</h1>
          <p>UI toolkit foundation</p>
          <ReactMarkdown children={badges} />
        </ui.div>
        
      </ui.page.panel>

      <ui.col alignCenter>
        
        <ui.div css={{color: 'yellowgreen'}}></ui.div>

        <ui.div className={`flex column align-center`} css={cardStyle} >
          <ui.text className="value">
            Nothing
          </ui.text>
        </ui.div>

        <ui.div className={`flex column align-center`} css={cardStyle} >
          <ui.text className="value">
            <span>Window: {winSize.width}x{winSize.height}</span>
          </ui.text>
        </ui.div>

        <p>
          <a href="https://www.npmjs.com/package/@reactiff/ui-core">npm</a> | <a href="https://github.com/reactiff/package-name">git</a> | MIT © <a href="https://github.com/reactiff">Rick Ellis</a>
        </p>
      </ui.col>

    </ui.page.layout>

    
  )
}

export default App
