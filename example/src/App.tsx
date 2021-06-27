import React from 'react'
import ReactMarkdown from 'react-markdown'
import ui, { useWindowSize } from '@reactiff/ui-core'
import * as demos from './demos';

import './css/index.css'
import './css/orthogonal.css'
import './css/flex.css'

const badges = '[![NPM](https://img.shields.io/npm/v/@reactiff/ui-core.svg)](https://www.npmjs.com/package/@reactiff/ui-core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)';

const App = () => {
  
  
  // hooks 
  const winSize = useWindowSize();

  const cardStyle = {
    border: '4px solid #ffffff',
    padding: '30px',
    '& > .value': { 
      fontSize: '3rem',
      margin: '0 0 15px 0',
    }
  };

  const gridStyle = {
    '& > .flex.column': cardStyle,
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

      <ui.row alignCenter css={gridStyle}>
        
        <ui.div css={{color: 'yellowgreen'}}></ui.div>

        <ui.div className={`flex column align-center`} >
          <ui.text className="value">
            Nothing
          </ui.text>
        </ui.div>

        <ui.div className={`flex column align-center`}>
          <ui.text className="value">
            <span>Window: {winSize.width}x{winSize.height}</span>
          </ui.text>
        </ui.div>

        {
          Object.entries(demos).map(([key, value]) => {
            return <ui.div key={key} className={`flex column align-center`}>
              {value()}
            </ui.div>
          })
        }

        <p>
          <a href="https://www.npmjs.com/package/@reactiff/ui-core">npm</a> | <a href="https://github.com/reactiff/package-name">git</a> | MIT © <a href="https://github.com/reactiff">Rick Ellis</a>
        </p>
      </ui.row>

    </ui.page.layout>

    
  )
}

export default App
