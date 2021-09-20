import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {ImTwitter} from 'react-icons/im'
import {FaFacebookF } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export const CustomerCardFooter = () => {
    return (
    <div className='contentfooter'>
        <div className='footerIcon'>
                    <div className='footericon1' ><AiOutlineInstagram /> </div>
                    <div className='footericon1' ><ImTwitter /> </div>
                    <div className='footericon1' ><FaFacebookF /> </div>
                    <div className='footericon1' ><FiMail /> </div>
        </div>
    </div>
    )
}
