import React from 'react'

import Header from './Header'

const App = () => (
<div className='app-container'>

    <Header />
    
    <p>The MobileNet model labeled this as
    <span id="result">...</span> with a confidence of
    <span id="probability">...</span></p>
    <img src="https://ml5js.org/docs/assets/img/bird.jpg"
     crossorigin="anonymous" id="image" width="400"/>


</div>
)

export default App