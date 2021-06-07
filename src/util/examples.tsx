import React from 'react';

import inline from './logic';

const ComponentOne = () => <h1>Case One</h1>;
const ComponentTwo = () => <h1>Case Two</h1>;

const user: any = {};

export default () => {

  console.log(
      inline.switch(
          1, 
          'Unknown', 
          1, 'Case One', 
          2, 'Case Two',
      )
    );
  // output: Case One

  // Since all function arguments must be evaluated before they are passed in,
  // you can wrap them in functions, which will only be evaluated if matched:

  console.log(
    inline.switch(
      1,
      'Unknown',
      1, () => 'Case One',
      2, () => 'Case Two',
    ),
  );
  // output: Case One


function stayCalm() {};
function doGood() {};
function breakBad() {};

inline.switch(
  'good',
  () => stayCalm(),
  'good', () => doGood(),
  'bad', () => breakBad(),
)

// ALSO YOU CAN DO THIS
inline.switch(
  'good',
  stayCalm,
  'good', doGood,
  'bad', breakBad,
)

// BUT NEVER DO THIS
inline.switch(
  'good',
  stayCalm(),
  'good', doGood(),
  'bad', breakBad(),
)

  return (
    <>

      {/* Which makes it useful inline with JSX: */}
      <h1>
        {inline.switch(
          1,
          'Unknown',
          1, () => 'Case One',
          2, () => 'Case Two',
        )}
      </h1>

      {/* You can render JSX elements too */}
      <div>
        {inline.switch(
          1,
          'Unknown',
          1, () => <h1>Case One</h1>,
          2, () => <h1>Case One</h1>,
        )}
      </div>

      {/* When passed like that, the function becomes a React component,  */}
      {/* which means you can also render parameterless components like so: */}
      <div>{inline.switch(1, 'Unknown', 1, ComponentOne, 2, ComponentTwo)}</div>

      {/* Match and return memoized components */}
      <div>
        {inline.switch(
          1,
          'Unknown',
          1, React.useMemo(() => <h1>Case One</h1>, []),
          2, React.useMemo(() => <h1>Case Two</h1>, []),
        )}
      </div>

      {/* Instead of value keys, you can use function predicates (rootKey) => boolean to match*/}
      <div>
        {inline.switch(
          1,
          'Unknown',
          (x: number) => x === 1, React.useMemo(() => <h1>Case One</h1>, []),
          (x: number) => x === 2, React.useMemo(() => <h1>Case Two</h1>, []),
        )}
      </div>

      {/* Unlike the switch statement which only works with primitives, 
      you can use objects as your rootKey with predicates to match on object properties*/}
      <div>
        {inline.switch(
          user,
          'Unknown',
          (usr: any) => usr.role === 'User', React.useMemo(() => <h1>Case One</h1>, []),
          (usr: any) => usr.role === 'Admin', React.useMemo(() => <h1>Case Two</h1>, []),
        )}
      </div>

      {/* You don't have to pass the rootKey to predicates if it is globally accessible */}
      <div>
        {inline.switch(
          null,
          'Unknown',
          () => user.role === 'User', React.useMemo(() => <h1>Case One</h1>, []),
          () => user.role === 'Admin', React.useMemo(() => <h1>Case Two</h1>, []),
        )}
      </div>


    </>
  );
}; 
