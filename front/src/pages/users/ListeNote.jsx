/* eslint-disable no-undef */
import React from 'react';
import * as RemixIcons from "react-icons/ri";
import "./users.scss";
import "../../index.css";
import "../admin/CustomTable.scss";
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ListeNote = () => {
    const navigate = useNavigate();

    const tableauDeBord = () => {
      navigate('/');
    };
    const listeNote = () => {
      navigate('/users/note');
    };
    // modal
    const [showDetailNoteModal, setShowDetailNoteModal] = React.useState(false);
    function DetailNoteModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="modalTitle text-light">
                    <Modal.Title id="contained-modal-title-vcenter">
                      <h5>Detail de la note : service , mauvais ou bon?</h5>  
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="align-items-center justify-content-center ">
                        <table class="table table-hover table-bordered table-responsive table-striped">
                            <thead className="text-center">
                                <tr>
                                    <td className="">#</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td className="">Date</td>
                                    <td>23/09/2023</td>
                                </tr>
                                <tr>
                                    <td className="">Client</td>
                                    <td>DESTO</td>
                                </tr>
                                <tr>
                                    <td className="">Note</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td className="">Enquete</td>
                                    <td>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit...</td>
                                </tr>
                                <tr>
                                    <td className="">Suggestion</td>
                                    <td>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit...</td>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} className="BTN Danger"><FaTimes/>fermer</Button>
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
            name: 'Note',
            selector: row => row.note,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Client',
            selector: row => row.client,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Suggestion',
            selector: row => row.suggestion,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Enquete',
            selector: row => row.enquete,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div className="d-flex ">
                    <button className="btn btn-primary btn-sm voir" title="Voir plus" onClick={() => setShowDetailNoteModal(true)}>
                        <RemixIcons.RiEyeLine />
                    </button>
                    {/* <Link to='/admin/update' className="btn btn-warning btn-sm" title="Modifier">  <RemixIcons.RiEditLine /> </Link> */}
                </div>
            )
        },

    ];

    const data = [
        {
            id: 1,
            note: '5',
            client: 'Marley',
            suggestion: 'en fin que les données saisir dans la base soit conforme aux données attendus',
            enquete: 'Service',
        },
        {
            id: 2,
            note: '4',
            client: 'Fresnel',
            suggestion: 'en fin que les données saisir dans la base soit conforme aux données attendus',
            enquete: 'Service',
        },
        {
            id: 3,
            note: '2',
            client: 'Anaelle',
            suggestion: 'base soit conforme aux données attendus en fin que les données saisir dans la ',
            enquete: 'restauration',
        },
        {
            id: 5,
            note: '3',
            client: 'Kuete',
            suggestion: 'base soit conforme aux données attendus en fin que les données saisir dans la ',
            enquete: 'vente',
        },
        {
            id: 5,
            note: '4',
            client: 'desto',
            suggestion: 'base soit conforme aux données atten dusat tend usattendus en fin que les données saisir dans la ',
            enquete: 'vente', 
        },
        {
            id: 6,
            note: '2',
            client: 'Fabiola',
            suggestion: 'en fin que les données saisir dans la bax données attendus',
            enquete: 'Service',
        },
        {
            id: 7,
            note: '1',
            client: 'ehrweh',
            suggestion: 'en fin que les données saisir d base soit conforme aux données attendus',
            enquete: 'vente',
        },
        {
            id: 8,
            note: '5',
            client: 'NTM',
            suggestion: 'en fin que les données saisir dans   soit conforme aux données attendus',
            enquete: 'Appel',
        },
        {
            id: 9,
            note: '3',
            client: 'ergreg',
            suggestion: 'en fin que les  saisir dans la base soit conforme aux données attendus',
            enquete: 'Service',
        },
        {
            id: 10,
            note: '4',
            client: 'erghrehj',
            suggestion: 'en fin que les données saisir dans la base soit conforme aux données attendus',
            enquete: 'Prospection',
        },
        {
            id: 11,
            note: '2',
            client: 'gartial',
            suggestion: 'en fin que les  saisir dans la base soit conforme aux données attendus',
            enquete: 'Service',
        },
        {
            id: 12,
            note: '5',
            client: 'jubril',
            suggestion: 'les données saisir dans la base soit conforme aux données attendus',
            enquete: 'Service',
        },

    ]

    return (
        <div>
            <div className="align-items-center d-flex justify-content-between statut mb-2" >
                <p className="d-flex">Tableau de bord</p>
                <div className="breadcrumb d-flex">
                    <li className="breadcrumb-item lien1 "onClick={tableauDeBord}>Tableau de bord</li>
                    <li className="breadcrumb-item lien2 " onClick={listeNote}>Entreprise</li>
                    <li className="breadcrumb-item active">Liste des Notes</li>
                </div>
            </div>

            <div className="align-items-center d-flex justify-content-between">
                <h4 className="">Liste des notes</h4>
                <strong className="">Total : 70</strong>

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
                centered
                highlightOnHover
                expandableRowsComponent={ExpandedComponent}
            />
            <DetailNoteModal
                show={showDetailNoteModal}
                onHide={() => setShowDetailNoteModal(false)}
            />


        </div>
    );
};

export default ListeNote;