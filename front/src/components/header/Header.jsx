import React from 'react'
import * as RemixIcons from "react-icons/ri"
import './header.scss'
import logo from '../../assets/images/logo/cs-logo.png'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { FaPlus, FaTimes } from 'react-icons/fa'

const Header = ({ sidebar, setSidebar }) => {
    // modal
    const [showAddSurveyModal, setShowAddSurveyModal] = React.useState(false);

    function AddSurveyModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="modalTitle text-light">
                    <Modal.Title id="contained-modal-title-vcenter">
                       <h5>Ajouter une nouvelle enquete</h5> 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form">
                    <div className="row">
                            <div className="form-group">
                                <label htmlFor="nom_enquete">Nom de l'enquete<span className="text-danger label_size">*</span></label>
                                <input type="text" name="nom_enquete" id="nom_enquete" className="form-control no-focus-outline mt-2" />
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="question1" className="form-label mt-3">Question 1<span className="text-danger label_size">*</span></label>
                                    <input type="text" name="question1" id="question1" className="form-control no-focus-outline  mt-1" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="question3 " className="form-label mt-3">Question 3<span className="text-danger label_size">*</span></label>
                                    <input type="text" name="question3" id="question3" className="form-control no-focus-outline  mt-1" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="question2 " className="form-label mt-3">Question 2<span className="text-danger label_size">*</span></label>
                                    <input type="text" name="question2" id="question2" className="form-control no-focus-outline mt-1" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="question4 " className="form-label mt-3">Question 4<span className="text-danger label_size">*</span></label>
                                    <input type="text" name="question4" id="question4" className="form-control no-focus-outline  mt-1" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="question5 " className="form-label mt-3">Question 5<span className="text-danger label_size">*</span></label>
                                <input type="text" name="question5" id="question5" className="form-control no-focus-outline  mt-1" />
                            </div>
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="button d-flex">
                        <button onClick={props.onHide} className="BTN Danger fermer"><FaTimes/>Fermer</button>
                        <button onClick={props.onHide} className="BTN Primary"><FaPlus/> Enregistrer</button>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
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
                    <button className='Btn Success' onClick={() => setShowAddSurveyModal(true)}>
                        <RemixIcons.RiAddLine />
                        <small>Nouvelle Enquête</small>
                    </button>
                    <Link to='http://localhost:3000/customer-space' target='_blank' className="NotificationIcon">
                        <RemixIcons.RiGlobalLine />
                    </Link>
                    <div className="NotificationIcon">
                        <RemixIcons.RiSunLine />
                    </div>
                    <div className="NotificationIcon">
                        <RemixIcons.RiNotification3Line />
                    </div>
                </div>
                <div className="NotificationIcon" onClick={() => setSidebar(!sidebar)}>
                    <RemixIcons.RiMenu2Line />
                </div>
            </div>

            <AddSurveyModal
                show={showAddSurveyModal}
                onHide={() => setShowAddSurveyModal(false)}
            />
        </header>
    )
}

export default Header