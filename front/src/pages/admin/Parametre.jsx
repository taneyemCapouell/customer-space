import React, { useState } from "react";
import "../../index.css"
import logo from "../../assets/images/logo/img-profil.png"
import user from "../../assets/images/logo/capo.jpg"
import * as RemixIcons from "react-icons/ri";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import CustomSelect from "../../components/CustomSelect";
import { FaEdit, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Parametre = () => {
    const navigate = useNavigate();

    const tableauDeBord = () => {
      navigate('/');
    };
    const admin = () => {
      navigate('/admin/setting');
    };
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('password');

    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [newPassword, setNewPassword] = useState('newPassword');

    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('confirmPassword');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleNewPasswordVisibility = () => {
        setNewPasswordVisible(!newPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (

        <div className="">
            <div className="align-items-center d-flex justify-content-between statut ">
                <p className="d-flex">Tableau de bord</p>
                <div className="breadcrumb d-flex mb-4">
                    <li className="breadcrumb-item lien1" onClick={tableauDeBord}>Tableau de bord</li>
                    <li className="breadcrumb-item lien2" onClick={admin}>Administrateur</li>
                    <li className="breadcrumb-item active">Parametre</li>
                </div>
            </div>

            <div className="text-center d-flex justify-content-between">
                <h4 className="update_profil mt-1">Modifier votre profil</h4>
                <div className="d-flex">
                    <CustomSelect />
                </div>

            </div>

            <form className="form mt-2 monprofil">
                <div className="">
                    <p className="title_profil">Informations personnelles</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="align-items-center d-flex">
                            <img className="image" src={logo} alt="profilEn" width="130px" height="130px" />
                            <p className="nomEntreprise">
                                <p className="fs-5 ">All Heights <br />
                                    <p className="email_en text-success">allheights@gmail.com</p>
                                </p>
                                <div className="imgg">
                                    <label for="profil_img" class="custom-file-upload">
                                        <RemixIcons.RiUploadCloudFill className="text-center upload" /> <br />
                                        Importer une image
                                    </label>
                                    <input type="file" id="profil_img" class="input-file no-focus-outline" />
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="align-items-center d-flex">
                            <img className="image" src={user} alt="profilUs" width="130px" height="130px" />
                            <p className="nomEntreprise">
                                <p className="fs-5 ">Taneyem Capouell<br />
                                    <p className="email_en text-success">taneyemcapouell@gmail.com</p>
                                </p>
                                <div className="imgg">
                                    <label for="profil_img" class="custom-file-upload">
                                        <RemixIcons.RiUploadCloudFill className="text-center upload" /> <br />
                                        Importer une image
                                    </label>
                                    <input type="file" id="profil_img" class="input-file no-focus-outline" />
                                </div>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="nom" className="mb-1 ">Raison social</label>
                            <input type="text" name="nom" id="nom" value="All Heights" className="form-control form-control-sm mb-2 no-focus-outline" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="siteWeb" className="mb-2 ">Site web</label>
                            <input type="text" name="siteWeb" id="siteWeb" value="www.Aallcorp.com" className="form-control form-control-sm mb-2 no-focus-outline" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="num_identif" className="mb-2 ">Numero d'identification</label>
                            <input type="number" name="num_identif" id="num_identif" value="123456789" className="form-control form-control-sm mb-2 no-focus-outline" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email" className="mb-2 ">Email</label>
                                    <input type="email" name="email" id="email" value="Allheight@gmail.com" className="form-control form-control-sm mb-2 no-focus-outline" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="telephone" className="mb-2 ">Telephone</label>
                                    <input type="number" name="telephone" id="telephone" value="676403745" className="form-control form-control-sm mb-2 no-focus-outline" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="siteWeb" className="mb-2 ">Numero d'immatriculation</label>
                            <input type="text" name="num-imma" id="siteWeb" value="CADLALL123b" className="form-control form-control-sm mb-2 no-focus-outline" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="ville" className="mb-2 ">Ville</label>
                                    <input type="text" name="ville" id="ville" value="Douala" className="form-control form-control-sm mb-2 no-focus-outline" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="quartier" className="mb-2 ">Quartier</label>
                                    <input type="text" name="quartier" id="quartier" value="Akwa , MTN Dubai" className="form-control form-control-sm mb-2 no-focus-outline" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <textarea name="description" id="" className="form-control texaria mb-3 mt-2"></textarea>
                <div className="bouton">
                    <button className="BTN Danger annuler"><FaTimes />Annuler</button>
                    <button className="BTN Warning"><FaEdit />Modifier</button>
                </div>
            </form>

            <form className="form monprofil">
                <div className="">
                    <p className="title_profil">Modifier votre mot de passe</p>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="pass" className="mb-1 ">Ancient mot de passe</label>
                        <input type={passwordVisible ? 'text' : 'password'} name="pass" id="pass" value={password} className="form-control form-control-sm password-input no-focus-outline"
                            onChange={(e) => setPassword(e.target.value)} />
                        <div className="password-icon1" onClick={togglePasswordVisibility}>
                            {passwordVisible ? <RiEyeOffLine /> : <RiEyeLine />}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="new_new" className="mb-1 ">Nouveau mot de passe</label>
                            <input type={newPasswordVisible ? 'text' : 'password'} name="new_pass" id="pass" value={newPassword} className="form-control form-control-sm password-input no-focus-outline"
                                onChange={(e) => setNewPassword(e.target.value)} />
                            <div className="password-icon1" onClick={toggleNewPasswordVisibility}>
                                {newPasswordVisible ? <RiEyeOffLine /> : <RiEyeLine />}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="confirm" className="mb-1 ">Confirmer le mot de passe</label>
                            <input type={confirmPasswordVisible ? 'text' : 'password'} name="confirm" id="confirm" value={confirmPassword} className="form-control form-control-sm password-input no-focus-outline"
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            <div className="password-confirm1" onClick={toggleConfirmPasswordVisibility}>
                                {confirmPasswordVisible ? <RiEyeOffLine /> : <RiEyeLine />}
                            </div>
                        </div>
                    </div>


                </div>

                <div className="bouton">
                    <button className="BTN Danger annuler"><FaTimes />Annuler</button>
                    <button className="BTN Warning"><FaEdit />Modifier</button>
                </div>
            </form>

        </div>
    );
};

export default Parametre;
