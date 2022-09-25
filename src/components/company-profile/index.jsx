import React, {useState} from 'react'
import './style.css'

function CompanyProfile(props) {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className={'company-container'}>
            <img className={'company-image'} src={props.src} alt={props.name} onClick={() => setModalOpen(true)}/>
            <p className={'company-name'}>
                {props.name}
            </p>
            {/*{modalOpen && <div className={'company-modal'}>*/}
            {/*    <div className={'modal-header'}>*/}
            {/*        <div className={'modal-title-container'}>*/}
            {/*            <div className={'modal-title'}>*/}
            {/*                {props.name}*/}
            {/*                <hr className={'title-underscore'}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <img className={'modal-close'} src={process.env.PUBLIC_URL + '/img/cross.svg'} alt={'cross'}*/}
            {/*             onClick={() => setModalOpen(false)}/>*/}
            {/*    </div>*/}
            {/*    <div className={'modal-body'}>*/}
            {/*        INFO HERE*/}
            {/*    </div>*/}
            {/*    <div>*/}

            {/*    </div>*/}
            {/*</div>}*/}
        </div>
    )

}

export default CompanyProfile
