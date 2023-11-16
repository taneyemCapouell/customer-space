import React from 'react';
import DataTable from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';
import * as RemixIcons from "react-icons/ri";
import "./users.scss";
import "../../index.css";
import "../admin/CustomTable.scss"
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const ListeClient = () => {
    const navigate = useNavigate();

    const tableauDeBord = () => {
      navigate('/');
    };
    const listeClient = () => {
      navigate('/users/customer');
    };
    // modal
    const [showDetailClientModal, setShowDetailClientModal] = React.useState(false);

    function DetailClientModal(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5> Detail du client : Capouell</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="d-flex justify-content-between  align-items-center">
                                <p>
                                    Nom :
                                </p>

                                <p>
                                    capouell
                                </p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                                <p>
                                    Email :
                                </p>
                                <p>
                                    capouell@gmail.com
                                </p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                                <p>
                                    Status :
                                </p>
                                <p>
                                    Actif
                                </p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                                <p>
                                    Date d'abonnement :
                                </p>
                                <p>
                                    10/11/2023
                                </p>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="button d-flex">
                        <button onClick={props.onHide} className="BTN Danger"><FaTimes/> Fermer</button>
                    </div>
                </Modal.Footer>
            </Modal>
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
            name: 'Nom du client',
            selector: row => row.nom,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Date',
            selector: row => row.date,
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
            name: 'Status',
            selector: row => row.status,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div className="d-flex ">
                    <button className="btn btn-primary btn-sm voir" title="Voir plus" onClick={() => setShowDetailClientModal(true)}>
                        <RemixIcons.RiEyeLine />
                    </button>
                </div>
            )
        },

    ];

    const data = [
        {
            id: 1,
            nom: 'capouell',
            date: '12/10/2023',
            email: 'capouel@gmail.com',
            status: 'Inactif',
        },
        {
            id: 2,
            nom: 'capouell',
            date: '12/10/2023',
            email: 'capouel@gmail.com',
            status: 'Actif',
        },
        {
            id: 3,
            nom: 'desto',
            date: '12/10/2023',
            email: 'desto@gmail.com',
            status: 'Inactif',
        },
        {
            id: 4,
            nom: 'capouell',
            date: '12/10/2023',
            email: 'capouel@gmail.com',
            status: 'Actif',
        },
        {
            id: 5,
            nom: 'marley',
            date: '12/10/2023',
            email: 'marley@gmail.com',
            status: 'Inactif',
        },
        {
            id: 1,
            nom: 'capouell',
            date: '12/10/2023',
            email: 'capouel@gmail.com',
            status: 'Actif',
        },


    ]
    return (
        <div>
            <div className="d-flex justify-content-between statut mb-2">
                <p className="d-flex">Tableau de bord</p>
                <div className="breadcrumb d-flex">
                    <li className="breadcrumb-item lien1" onClick={tableauDeBord}>Tableau de bord</li>
                    <li className="breadcrumb-item lien2" onClick={listeClient}>Clients</li>
                    <li className="breadcrumb-item active">Liste des clients</li>
                </div>
            </div>

            <div className="align-items-center d-flex justify-content-between">
                <h4 className="">Liste des clients</h4>
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
                        <option value="decroisant">Date</option>
                        <option value="decroisant">Email</option>
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
                highlightOnHover
                expandableRowsComponent={ExpandedComponent}
            />

            {/* <!-- Logout Modal--> */}


            <DetailClientModal
                show={showDetailClientModal}
                onHide={() => setShowDetailClientModal(false)}
            />
        </div>
    );
};
export default ListeClient;