import React from 'react';
import back_img from "../assets/images/avatar/7.jpeg";
import "./erreur.css";
import * as RemixIcons from "react-icons/ri";
import { Link } from 'react-router-dom';
const Erreur404 = () => {
    return (
        <div className="containe shadow">
            <div className="row  rounded align-items-center justify-content-center arrr around">
                <div className="col-md-6 text-center">
                    <RemixIcons.RiSignalWifiErrorFill className='mb-5 text-success iconn'/>
                    <h1 className="display-1 fw-bold shadow-lg text-success">404</h1>
                    <h1 className="mb-4 mt-4">Page introuvable</h1>
                    <p className="mb-4 text-danger">Nous sommes desole, la page que vous assayez d'acceder n'existe pas!
                        Cliquez sur *Retour au tableau de bord*  revenir a la page d'acceuil.</p>
                    <Link to="/" className="btn btn-success rounded-pill py-3 px-5" >Retour au tableau de bord</Link>
                </div>
            </div>
        </div>
    );
};

export default Erreur404;