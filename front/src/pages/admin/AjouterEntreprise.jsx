import React from "react";
// import * as RemixIcons from "react-icons/ri";
// import { Link } from "react-router-dom";
import { FaPlus, FaTimes } from 'react-icons/fa';
import "./admin.scss";
import "../../index.css"
import { useNavigate } from "react-router-dom";
const AjouterEntreprise = () => {
  const navigate = useNavigate();

  const tableauDeBord = () => {
    navigate('/');
  };
  const AjouterEntr = () => {
    navigate('/admin/company/new');
  };

  return (
    <div>
      <div className="align-items-center d-flex justify-content-between statut" >
        <p className="d-flex">Tableau de bord</p>
        <div className="breadcrumb d-flex">
          <li className="breadcrumb-item lien1" onClick={tableauDeBord}>Tableau de bord</li>
          <li className="breadcrumb-item lien2" onClick={AjouterEntr}>Entreprise</li>
          <li className="breadcrumb-item active">Nouvelle entreprise</li>
        </div>
      </div>
      <div className="card">
        <div className="card-header d-flex justify-content-between text-center" style={{ backgroundColor: "var(--color-primary)" }}>
          <h5 className="text-white">Ajouter une entreprise</h5>
          <p className="text-white">
            ( <span className="text-danger fs-4">*</span>  :  Champ obligatoire )
          </p>
        </div>
        <div className="card-body">
          <h5>Entrez les informations concernant votre entreprise.</h5>
          <blockquote className="blockquote mb-0">
            <form className="row g-2 form">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Raison social
                  <span className="text-danger taille_etoile">*</span>
                </label>
                <input
                  type="text"
                  name="raison_social"
                  className="form-control no-focus-outline"
                  id="raison_social" required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                  <span className="text-danger taille_etoile">*</span>
                </label>
                <input
                  type="email"
                  className="form-control no-focus-outline"
                  id="email"
                  name="email" required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="num_imma" className="form-label">
                  Numero d'immatriculation
                  <span className="text-danger taille_etoile">*</span>
                </label>
                <input
                  type="text"
                  name="num_imma"
                  className="form-control no-focus-outline"
                  id="num_imma" required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="num_identif" className="form-label">
                  Numero d'identification
                  <span className="text-danger taille_etoile">*</span>
                </label>
                <input
                  type="text"
                  className="form-control no-focus-outline"
                  id="num_identif"
                  name="num_identif" required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="secteur_ac" className="form-label">
                  Secteur d'activite
                  <span className="text-danger fs-5">*</span>
                </label>
                <input
                  type="text"
                  name="secteur_ac"
                  className="form-control no-focus-outline"
                  id="secteur_ac" required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="telephone" className="form-label">
                  Telephone
                  <span className="text-danger taille_etoile">*</span>
                </label>
                <input
                  type="number"
                  className="form-control no-focus-outline"
                  id="telephone"
                  name="telephone" required
                />
              </div>
              <div className="col-md-3 ">
                <label htmlFor="logo" className="form-label">
                  Logo
                  <span className="text-danger taille_etoile">*</span>
                </label>
                <input
                  type="file"
                  className="form-control no-focus-outline"
                  id="logo"
                  name="logo" required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="site" className="form-label">
                  Site web
                  <span className="text-danger taille_etoile">*</span>
                </label>
                <input
                  type="text"
                  className="form-control no-focus-outline"
                  id="site"
                  name="site" required
                />
              </div>

              <div className="col-md-3">
                <label htmlFor="ville" className="form-label">
                  Ville
                  <span className="text-danger taille_etoile">*</span>
                </label>
                <input
                  type="text"
                  className="form-control no-focus-outline"
                  id="ville"
                  name="ville" required
                />
              </div>

              <div className="col-md-3 ">
                <label htmlFor="quartier" className="form-label">
                  Quartier
                  <span className="text-danger taille_etoile">*</span>
                </label>
                <input
                  type="text"
                  className="form-control no-focus-outline"
                  id="quartier"
                  name="quartier" required
                />
              </div>
              <div className="description">
                <label htmlFor="quartier" className="form-label">
                  Description de l'entreprise
                  <span className="text-danger taille_etoile">*</span>
                </label>
                <textarea
                  className="form-control no-focus-outline texaria"
                  id="description"
                  name="quartier" required placeholder="Description de votre entreprise"
                ></textarea>
              </div>

              <div className="col">
                <button type="submit" className="BTN Primary">
                  <FaPlus className="mx-1 fs-18" />
                  Enregistrer
                </button>
                <button type="reset" className="BTN Danger">
                  <FaTimes className="mx-1 fs-18" />
                  Annuler
                </button>
                {/* <Link to="/admin/company" className="btn btn-success retour">
                  Retour
                </Link> */}
              </div>
            </form>
          </blockquote>
        </div>
      </div>
    </div>
  );
};



export default AjouterEntreprise;
