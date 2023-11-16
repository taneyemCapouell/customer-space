import React from 'react'
import * as RemixIcons from "react-icons/ri"
import './profilAdmin.scss'
import Modal from 'react-bootstrap/Modal';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom'
 
const ProfilAdmin = ({profil}) => {
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
     const navigate = useNavigate();

     const adminProfil = () => {
       navigate('/admin/setting');
     };
   
    return (
        <div className={profil ? "Profil" : "Hidden"}>
            <span onClick={adminProfil}><RemixIcons.RiUserLine/> Mon profil</span>
            <span onClick={() => setShowExitModal(true)}><RemixIcons.RiLogoutBoxLine /> Se déconnecter</span>
             <ExitModal
                show={showExitModal}
                onHide={() => setShowExitModal(false)}
            />
        </div>
    )
}

export default ProfilAdmin;