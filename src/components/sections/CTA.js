import React from 'react'

const CTA = ({ tageLineSection }) => {
    return (
        <div className='container'>
            <div className='col-12 d-flex justify-content-center py-5'>
                <h5 className='text-center cta-text'>{tageLineSection.tag_line}</h5>
            </div>
        </div>
    )
}
export default CTA;