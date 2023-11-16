/* eslint-disable no-undef */
import React from 'react';
import * as RemixIcons from "react-icons/ri";
import "./users.scss";
import "../../index.css"
import "../admin/CustomTable.scss"
import DataTable from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const ListeEnquete = () => {
    const navigate = useNavigate();

    const tableauDeBord = () => {
      navigate('/');
    };
    const listeEnquete = () => {
      navigate('/users/survey');
    };

    // const [record, setRecord] = useState();
    const handleFilter = (e) => {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRecord(newData)
    }
    // modal
    const [showDetailSurveyModal, setShowDetailSurveyModal] = React.useState(false);
    const [showUpdateSurveyModal, setShowUpdateSurveyModal] = React.useState(false);

    function DetailSurveyModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="modalTitle text-light">
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5>Detail de l'entreprise : All Heights</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <table className="table text-center table-bordered">
                            <tbody>
                                <tr>
                                    <td>Enquete</td>
                                    <td>informatique est utilisé pour exploiter les bases de données.</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table text-center table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan="2">Question</th>
                                </tr>
                                <tr>
                                    <th>Libelle</th>
                                    <th>Valeur</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Question 1</td>
                                    <td>le langage SQL(structured query language) est le langage de gestion de base de données le plus populaire </td>
                                </tr>
                                <tr>
                                    <td>Question 2</td>
                                    <td>Il permet de définir ,manipuler et protéger les données de manière simple et schématique </td>
                                </tr>
                                <tr>
                                    <td>Question 3</td>
                                    <td>Ce langage informatique est utilisé pour exploiter les bases de données.il permet aussi de façon générale la définition,</td>
                                </tr>
                                <tr>
                                    <td>Question 4</td>
                                    <td>la manipulation et le contrôle de sécurité de données .c’est ainsi que nous parlerons de ses caractéristiques </td>
                                </tr>
                                <tr>
                                    <td>Question 5</td>
                                    <td>la définition des données, du type de données ,de la définition des clés ,des contraintes d’intégrités et la </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="button d-flex">
                        <button onClick={props.onHide} className="BTN Danger fermer"><FaTimes/>Fermer</button>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
    function UpdateSurveyModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="modalTitle text-light">
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5>Modifier l'enquete n_° : All Heights</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form">

                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="nom_enquete">Nom de l'enquete<span className="text-danger ">*</span></label>
                                <input type="text" name="nom_enquete" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." id="nom_enquete" required className="form-control no-focus-outline  mt-2" />
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="question1" className="form-label mt-3">Question 1<span className="text-danger ">*</span></label>
                                    <input type="text" name="question1" value="Morbi bibendum molestie magna vitae luctus." id="question1" required className="form-control no-focus-outline  mt-1" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="question3 " className="form-label mt-3">Question 3<span className="text-danger ">*</span></label>
                                    <input type="text" name="question3" value="Proin congue mollis lacus, dapibus" id="question3" required className="form-control mt-1 no-focus-outline " />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="question2 " className="form-label mt-3">Question 2<span className="text-danger ">*</span></label>
                                    <input type="text" name="question2" value="Vivamus dignissim egestas nunc sed consequat." id="question2" required className="form-control no-focus-outline mt-1" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="question4 " className="form-label mt-3">Question 4<span className="text-danger ">*</span></label>
                                    <input type="text" name="question4" value="Etiam tincidunt interdum diam, nec placerat nisl viverra a." id="question4" required className="form-control no-focus-outline mt-1 " />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="question5 " className="form-label mt-3">Question 5<span className="text-danger  mt-3">*</span></label>
                                <input type="text" name="question5" value="Nam nec quam quis nibh finibus dictum. " id="question5" required className="form-control no-focus-outline  mt-1" />
                            </div>
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={props.onHide} className="BTN Danger fermer"><FaTimes/>fermer</button>
                    <button onClick={props.onHide} type="submit" className="BTN Warning"><FaEdit/>Modifier</button>
                </Modal.Footer>
            </Modal>
        );
    }

    // table
    // const customStyles = {
    //     headRow: {
    //         style: {
    //             backgroundColor: 'black',
    //             fontWeight: 'bold',
    //             color: "#fff",
    //         },
    //     },
    //     rows: {
    //         style: {
    //             minHeight: '50px', // override the row height
    //         },
    //     },
    //     headCells: {
    //         style: {
    //             paddingLeft: '2px', // override the cell padding for head cells
    //             paddingRight: '2px',
    //             textTransform: "uppercase",
    //             fontWeight: "600",
    //             fontSize: "11px",
    //         },
    //     },
    //     cells: {
    //         style: {
    //             paddingLeft: '2px', // override the cell padding for data cells
    //             paddingRight: '2px',
    //         },
    //     },
    // };

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
            name: 'Date',
            selector: row => row.date,
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
                    <button className="btn btn-primary btn-sm voir" title="Voir plus" onClick={() => setShowDetailSurveyModal(true)}>
                        <RemixIcons.RiEyeLine />
                    </button>
                    <button className="btn btn-warning btn-sm" title="Modifier" onClick={() => setShowUpdateSurveyModal(true)}>
                        <RemixIcons.RiEditLine />
                    </button>
                </div>
            )
        },

    ];

    const data = [
        {
            id: 1,
            nom: 'GSC',
            date: '12/10/2023',
            status: 'En cour..',
        },
        {
            id: 2,
            nom: 'ALL HEIGHTS',
            date: '12/03/2023',
            status: 'En cour..',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },
        {
            id: 3,
            nom: 'BEKATAL',
            date: '12/11/2023',
            status: 'Terminer',
        },

    ]

    return (
        <div>
            <div className="align-items-center d-flex justify-content-between statut mb-2" >
                <p className="d-flex">Tableau de bord</p>
                <div className="breadcrumb d-flex">
                    <li className="breadcrumb-item lien1" onClick={tableauDeBord}>Tableau de bord</li>
                    <li className="breadcrumb-item lien2" onClick={listeEnquete}>Enquete</li>
                    <li className="breadcrumb-item active">Liste des enquêtes</li>
                </div>
            </div>

            <div className="align-items-center d-flex justify-content-between">
                <h4 className="">Liste des enquêtes</h4>
                <strong className="">Total : 70</strong>
                {/* <button className="btn btn-primary btn-sm mb-2" onClick={() => setShowAddSurveyModal(true)}>
                    <RemixIcons.RiAddLine /> Ajouter
                </button> */}
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
                    Status..
                    <select className="input ml-2" name="">
                        <option value="croisant">En cours...</option>
                        <option value="Terminé">Terminé</option>
                    </select>
                </div>

                <div>
                    <input
                        className="input search"
                        type="text"
                        placeholder="Taper ici.."
                        onChange={handleFilter}
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
                fixedHeader
                highlightOnHover
                expandableRowsComponent={ExpandedComponent}
            />


            <DetailSurveyModal
                show={showDetailSurveyModal}
                onHide={() => setShowDetailSurveyModal(false)}
            />
            <UpdateSurveyModal
                show={showUpdateSurveyModal}
                onHide={() => setShowUpdateSurveyModal(false)}
            />

        </div>
    );
};

export default ListeEnquete;
