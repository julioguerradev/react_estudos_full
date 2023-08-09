import React from 'react'

const App = () => {
    const video = React.useRef();

    
    console.log(video.current)

  return (
    <div ref={video}>App</div>
  )
}

export default App