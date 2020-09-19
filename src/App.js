// https://www.youtube.com/watch?v=t2ypzz6gJm0
// useRef does not cause a component to update when state is changed 
// unlike useState - note, commented out version without useRef goes
// into infinite loop

import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)
  console.log(renderCount);


  useEffect(() => {
   renderCount.current = renderCount.current + 5;
  })
  console.log(renderCount);

  return (
    <>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name} </div>
    <div>I rendered {renderCount.current} time</div>
    </>
  );
}

export default App;

// ---------------------------------------------------------
// using useState as a counter will cause infinite loop

// import React, { useState, useEffect } from 'react'

// function App() {
//   console.log('App');
//   const [name, setName] = useState('test')
//   const [renderCount, setRenderCount] = useState(0)

//   console.log(name)
//   useEffect(() => {
//     console.log('useEffect');
//     // setRenderCount(prevRenderCount => prevRenderCount + 1)
//   })

//   return (
//     <>
//     <input value={name} onChange={e => setName(e.target.value)}/>
//     <div>My name is {name} </div>
//     {console.log('return')}
//     <div>I rendered {renderCount} time</div>
//     </>

    // <>
    // <input value={name} onChange={e => setName(e.target.value)}/>
    // <div>My name is {name} </div>
    // {console.log('return')}
    // <div>I rendered {renderCount} time</div>
    // </>
//   );
// }

// export default App;

// order of execution
// App.js:35 App
// App.js:39 test
// App.js:45 return
// App.js:35 App
// App.js:39 test
// App.js:45 return
// App.js:41 useEffect

