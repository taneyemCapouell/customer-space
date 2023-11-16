import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import * as RemixIcons from "react-icons/ri"
import { ItemsAdmin } from '../../data/itemsNav'
import SubMenu from './SubMenu'
import './sidebar.scss'
import avatar from '../../assets/images/avatar/Marley.jpg'
import Modal from 'react-bootstrap/Modal';

const SidebarAdmin = ({ profil, setProfil, sidebarAdmin }) => {
    // modal
    const [showExitModal, setShowExitModal] = React.useState(false);
    function ExitModal(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                top
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vtop" className='text-warning'>
                        Deconnection
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        Cliquez sur se deconnecter pour mettre fin a votre session.
                </Modal.Body>
                <Modal.Footer>
                    <NavLink to={'/auth/login'} className="btn btn-secondary btn-sm">
                        <span>Se deconnecter</span>
                    </NavLink>
                    <button className='btn btn-danger btn-sm' onClick={props.onHide}>Annuler</button>
                </Modal.Footer>
            </Modal>
        );
    }

    const Navigate = useNavigate()
    const logout = (e) => {
        e.preventDefault()
        if (window.confirm("Attention, vous êtes sur le point de vous déconnecter !") === true) {
            //    account_service.logout()
            //    sessionStorage.removeItem("is-already-load", "yes")
            Navigate('/auth/login')
        }
    }

    return (
        <aside className={sidebarAdmin ? "SidebarMin" : "Sidebar"}>
            <div className="User" onClick={() => setProfil(!profil)}>
                <div className="Avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="InfoUser">
                    <span>Marley Apong</span>
                    <small>Admin</small>
                </div>
                {profil ? <RemixIcons.RiArrowDropDownLine className='IconText' /> : <RemixIcons.RiArrowDropRightLine className='IconText' />}
            </div>

            <div className="Navigation">
                {
                    ItemsAdmin.map((item, index) => {
                        return <SubMenu item={item} key={index} />
                    })
                }

                <a onClick={() => setShowExitModal(true)} className='btn'>
                    <i><RemixIcons.RiLogoutBoxLine /></i>
                    <span>Exit</span>
                </a>

            </div>

            <ExitModal
                show={showExitModal}
                onHide={() => setShowExitModal(false)}
            />

        </aside>
    )
}

export default SidebarAdmin