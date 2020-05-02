import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext("DefaultValue");

const Child = React.memo(function Child() {
  const text = useContext(MyContext);
  return (
    <div>
      저는 Child Component 입니다. 
      <br />
      저의 text props는 [{text}] 입니다.
    </div>
  );
});

const Parent = React.memo(function Parent() {
  return <Child />;
});

const GrandParent = React.memo(function GrandParent() {
  return <Parent />;
});

function ContextSample () {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value ? "TRUE" : "FALSE"}>
      <GrandParent />
      <button onClick={() => setValue(prevValue => !prevValue)}>CHANGE</button>
    </MyContext.Provider>
  );
}

export default React.memo(ContextSample);