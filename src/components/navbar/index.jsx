import React, {useEffect, useState} from 'react'
import './style.css'

function Navbar() {

    const [selected, setSelected] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)
    const [showNav, setShowNav] = useState(false)

    const options = [
        {
            id: 0,
            name: 'ABOUT US',
            href: '#about-us'
        },
        {
            id: 1,
            name: 'SPONSORS',
            href: '#sponsors'
        },
        {
            id: 2,
            name: 'EVENTS',
            href: '#events'
        },
        {
            id: 3,
            name: 'COMMITTEE',
            href: '#committee'
        },
        {
            id: 4,
            name: 'CONTACT',
            href: '#contact'
        },
    ]

    function updateWidth() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth)
    })

    function getClassNames(currentId) {
        if (selected === currentId) {
            return 'navbar-option-selected navbar-option'
        }
        return 'navbar-option'
    }

    return (
        <div className={'navbar'}>
            <h4 className={'navbar-title'}>
                IC | ALGOTRADE
            </h4>
            <div className={'navbar-options'}>
                { width >= 768 ?
                    options.map((e) =>
                        <a
                            key={e.id}
                            onClick={() => {
                                setSelected(e.id)
                                return false
                            }}
                            className={getClassNames(e.id)}
                            href={e.href}
                        >
                            {e.name}
                        </a>
                    ) : <img src={process.env.PUBLIC_URL + '/img/menu.svg'} alt={'menu'}
                             onClick={() => setShowNav(!showNav)}/>
                }
            </div>
            {width < 768 && showNav && <div className={'navbar-mobile'}>
                <div className={'navbar-close-icon'}>
                    <img src={process.env.PUBLIC_URL + '/img/cross.svg'} alt={'cross'}
                         onClick={() => setShowNav(!showNav)}/>
                </div>
                <div className={'navbar-mobile-options'}>
                    {
                        options.map((e) =>
                            <a
                                key={e.id}
                                onClick={() => {
                                    setSelected(e.id)
                                    return false
                                }}
                                className={getClassNames(e.id)}
                                href={e.href}
                            >
                                {e.name}
                            </a>
                        )
                    }
                </div>
            </div>}

        </div>
    );

}

export default Navbar
