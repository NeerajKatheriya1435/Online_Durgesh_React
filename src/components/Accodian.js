import React, { useState } from 'react'

const Accodian = () => {
    const [style, setStyle] = useState({
        backgroundColor: 'white',
        color: 'black'
    });
    const [mode, setMode] = useState('Enable Dark Mode')

    const handleTheme = () => {
        if (style.color === 'black') {
            setStyle({
                backgroundColor: 'black',
                color: 'white'
            })
            setMode('Disable Dark Mode')
        }
        // else if (style.color === 'white') {
        //     setStyle({
        //         backgroundColor: 'green',
        //         color: 'red'
        //     })
        //     setMode('Disable123 Dark Mode')
        // }
        else {
            setStyle({
                backgroundColor: 'white',
                color: 'black'
            })
            setMode('Enable Dark Mode')
        }
    }
    return (
        <div className='container'>
            <h2 className="accodHeading text-center my-2 py-2" style={style}>This Is My Accodian</h2>
            <div className="accordion" id="accordionExample" >
                <div style={style} className="accordion-item">
                    <h2 style={style} className="accordion-header">
                        <button style={style} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={style} className="accordion-item">
                    <h2 style={style} className="accordion-header">
                        <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={style} className="accordion-item">
                    <h2 style={style} className="accordion-header">
                        <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleTheme} className="btn btn-success my-2">{mode}</button>
        </div>
    )
}

export default Accodian
