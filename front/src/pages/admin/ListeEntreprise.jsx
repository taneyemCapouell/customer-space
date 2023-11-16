/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as RemixIcons from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import "./admin.scss";
import "../../index.css"
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from "../../assets/images/logo/cs-logo-red.png"
import { AiOutlinePhone, AiOutlineMail, AiOutlineFieldNumber } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';
import './CustomTable.scss';

const ListeEntreprise = () => {
    const navigate = useNavigate();

    const tableauDeBord = () => {
      navigate('/');
    };
    const listeEntreprise = () => {
      navigate('/admin/company');
    };
    // modal
    const [showDetailCompanyModal, setshowDetailCompanyModal] = React.useState(false);
    function DetailCompanyModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="bg-success">
                    <Modal.Title id="contained-modal-title-vcenter" className=" text-light">
                        <h5>Detail de l'entreprise : All Heights</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h4>Centered Modal</h4> */}
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6 shadow align-items-center justify-content-center">
                                <div className="logo text-center  px-2 py-2">
                                    <img src={logo} alt="logo_En" width="200px" height="200px" />
                                    <p>All heights</p>
                                </div>

                            </div>
                            <div className="col-md-6 infoDetail ml-4 ">
                                {/* <div className="texte ">Bonjours tous le monda , c'est</div> */}
                                <div className="nomEntr fw-bold fs-2">All Heigths</div>

                                <div className="secteurAc mb-2 fw-bold">Services informatiques</div>

                                <div className="secteurAc mb-4">
                                    Fourniture de services de développement de logiciels, de maintenance informatique et de consultation en technologie de l'information.
                                </div>

                                <div className="NumIden mb-3"><AiOutlineFieldNumber className="icon" size={18} /> 123456789</div>

                                <div className="immatriculation mb-3"><RemixIcons.RiCalendar2Line className="icon" /> 15 septembre 2023</div>

                                <div className="email mb-3"><AiOutlineMail className="icon" /> allheight@gmail.com</div>

                                <div className="telephone mb-3"><AiOutlinePhone className="icon" /> (+237) 674893456 </div>

                                <div className="ville mb-3"><FaCity className="icon" /> Douala , Akwa MTN Dubai</div>

                                <div className="site">
                                    <RemixIcons.RiGlobalLine className="icon" />
                                    <a href="https://www.allhcorp.com" target="_blank" rel="noopener noreferrer">
                                        www.allhcorp.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} className="btn btn-danger btn-sm">Close</Button>
                </Modal.Footer>
            </Modal >
        );
    }

    // table

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const columns = [
        {
            name: '#',
            selector: row => row.id,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Nom',
            selector: row => row.nom,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Num Imma.',
            selector: row => row.num_imma,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Num. Identif.',
            selector: row => row.num_identif,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Quartier',
            selector: row => row.quartier,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Secteur',
            selector: row => row.secteur,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div className="d-flex ">
                    <button className="btn btn-primary btn-sm voir" title="Voir plus" onClick={() => setshowDetailCompanyModal(true)}>
                        <RemixIcons.RiEyeLine />
                    </button>
                    <Link to='/admin/company/update' className="btn btn-warning btn-sm" title="Modifier">  <RemixIcons.RiEditLine /> </Link>
                </div>
            )
        },

    ];

    const data = [
        {
            id: 1,
            nom: 'All heigths',
            email: 'AllHeil@gmail.com',
            num_imma: 'erg56yu86',
            num_identif: 'erg56yu86',
            quartier: 'Douala',
            secteur: 'Informatique',
            status: 'Actif',
        },
        {
            id: 2,
            nom: 'MTN',
            email: 'MTN@gmail.com',
            num_imma: 'w34trtyh',
            num_identif: 'w34trtyh',
            quartier: 'Missoke',
            secteur: 'Assurance',
            status: 'Inactif',
        },
        {
            id: 3,
            nom: 'Gsc',
            email: 'Gsc@gmail.com',
            num_imma: '757654675467',
            num_identif: '757654675467',
            quartier: 'tokoua',
            secteur: 'Securite',
            status: 'actif',
        },
        {
            id: 4,
            nom: 'Orangr',
            email: 'Orangr@gmail.com',
            num_imma: '334523543',
            num_identif: '334523543',
            quartier: 'bepanda',
            secteur: 'Menage',
            status: 'Inactif',
        },
        {
            id: 5,
            nom: 'Orangr',
            email: 'Orangr@gmail.com',
            num_imma: '334523543',
            num_identif: '334523543',
            quartier: 'bepanda',
            secteur: 'Menage',
            status: 'Inactif',
        },
        {
            id: 6,
            nom: 'Orangr',
            email: 'Orangr@gmail.com',
            num_imma: '334523543',
            num_identif: '334523543',
            quartier: 'bepanda',
            secteur: 'Menage',
            status: 'Inactif',
        },
        {
            id: 8,
            nom: 'Orangr',
            email: 'Orangr@gmail.com',
            num_imma: '334523543',
            num_identif: '334523543',
            quartier: 'bepanda',
            secteur: 'Menage',
            status: 'Inactif',
        },

    ]

    return (
        <div>
            <div className="d-flex justify-content-between statut mb-2">
                <p className="d-flex">Tableau de bord</p>
                <div className="breadcrumb d-flex">
                    <li className="breadcrumb-item lien1" onClick={tableauDeBord}>Tableau de bord</li>
                    <li className="breadcrumb-item lien2" onClick={listeEntreprise}>Entreprise</li>
                    <li className="breadcrumb-item active">Liste des entreprises</li>
                </div>
            </div>

            <div className="align-items-center d-flex justify-content-between">
                <h4 className="">Liste des entreprises</h4>
                <strong className="">Total : 90</strong>
                {/* <Link to="/admin/company/new" className="btn btn-primary btn-sm">
                    <RemixIcons.RiAddLine /> Ajouter
                </Link> */}
            </div>

            <form className="form filtre align-items-center d-flex justify-content-between ">
                <div>
                    Trier par..
                    <select className="input ml-2" name="">
                        <option value="croisant">Ordre croisant</option>
                        <option value="decroisant">Ordre decroisant</option>
                    </select>
                </div>

                <div>
                    Filtrer par..
                    <select className="input ml-2" name="">
                        <option value="croisant">Nom</option>
                        <option value="decroisant">Ville</option>
                        <option value="decroisant">Email</option>
                        <option value="decroisant">secteur</option>
                        <option value="te">Telephone</option>
                    </select>
                </div>

                <div>
                    Status..
                    <select className="input ml-2" name="">
                        <option value="croisant">Activer</option>
                        <option value="decroisant">Desactiver</option>
                    </select>
                </div>

                <div>
                    <input
                        className="input search"
                        type="search"
                        placeholder="Taper ici.."
                        aria-label="Search"
                    />
                </div>
            </form>

            <DataTable
                className="custom-table"
                columns={columns}
                data={data}
                responsive
                pagination
                striped
                bordered
                highlightOnHover
                expandableRowsComponent={ExpandedComponent}
            />
            {/* <!-- Logout Modal--> */}
            <DetailCompanyModal
                show={showDetailCompanyModal}
                onHide={() => setshowDetailCompanyModal(false)}
            />
        </div>
    );
};

export default ListeEntreprise;
