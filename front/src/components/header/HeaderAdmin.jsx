/* eslint-disable react/jsx-no-undef */
import React from 'react'
import * as RemixIcons from "react-icons/ri"
import './header.scss'
import logo from '../../assets/images/logo/cs-logo.png'
import { Link } from 'react-router-dom'

const HeaderAdmin = ({ sidebarAdmin, setSidebarAdmin }) => {
    return (
        <header>
            <div className="Left">
                <div className="Company">
                    <img src={logo} alt="" />
                    <span>All HIGHT Corp</span>
                </div>
                <div className="Date">[]
                    <RemixIcons.RiTimeLine />
                    <span>Wed, 04 Oct 2023 </span>
                </div>
            </div>
            <div className="Middle">
                <input type="text" name="" id="" placeholder='Rechercher...' />
                <RemixIcons.RiSearch2Line className='Icon' />
            </div>
            <div className="Right">
                <div className="Not-SM">
                    <button className='Btn Success'>
                        <RemixIcons.RiAddLine />
                        <Link to="/admin/company/new" className='Link'>Nouvelle Entreprise</Link>
                    </button>
                    <div className="NotificationIcon">
                        <RemixIcons.RiSunLine />
                    </div>
                    <div className="NotificationIcon">
                        <RemixIcons.RiNotification3Line />
                    </div>
                </div>
                <div className="NotificationIcon" onClick={() => setSidebarAdmin(!sidebarAdmin)}>
                    <RemixIcons.RiMenu2Line />
                </div>
            </div>
        </header>
    )
}

export default HeaderAdmin