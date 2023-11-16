import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { PulseLoader } from 'react-spinners'
import * as RemixIcons from "react-icons/ri"
import './login.scss'
import logo from '../../assets/images/logo/cs-logo-red.png'
// import { authentification } from '../../services/authentification'
// import { account_service } from '../../services/account_service'

const Login = () => {
    const Navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [wait, setWait] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault()
        if (login === "" || password === "") {
            toast.error("Veuillez remplir tous les champs !")
        }
        else {
            setWait(false)
            if (login === "marlexapong90@gmail.com" && password === "12345") {
                Navigate("/admin/")
            }
            else if (login === "user@gmail.com" && password === "1234") {
                Navigate("/")
            }
            else {
                toast.error("Email ou mot de passe incorrect !")
                setWait(true)
            }

            // if (res.data.roles.join("") === "ROLE_SUPERADMIN") {
            //     const verif = [
            //         { "rol7qas": "3esftysaqerchu", "kenkihhgczasxmnv": res.data.refreshToken, "firstName": res.data.user.firstName, "lastName": res.data.user.lastName }
            //     ]
            //     account_service.saveToken(JSON.stringify(verif))
            //     Navigate("/admin/")
            // }
            // else {
            //     const verif = [
            //         { "rol7su": "hytyimbfdlpo", "kenkihhgczasxmnv": res.data.refreshToken, "firstName": res.data.user.firstName, "lastName": res.data.user.lastName }
            //     ]
            //     account_service.saveToken(JSON.stringify(verif))
            //     Navigate("/")
            // }

            // .catch((err) => {
            //     setWait(true)
            //     if (err.response.status === 400) {
            //         toast.error("Mauvaise requête !")
            //     }
            //     else if (err.response.data.status === "UNAUTHORIZED") {
            //         toast.error("Vous avez été bloqué par votre administrateur !", {
            //             style: {
            //                 textAlign: 'center'
            //             }
            //         }
            //         )
            //     }
            //     else if (err.response.data.status === 401) {
            //         toast.error("Email ou mot de passe incorrect !")
            //     }
            //     else {
            //         toast.error("Erreur interne du serveur")
            //     }
            // })
        }
    }

    return (
        <div className="Login">
            <div className="Container">
                <div className="Left">
                    <h1>Bienvenue sur customer space</h1>
                    <p>Connectez-vous pour continuer</p>
                    <span>Copyright &#xa9;customer-space 2023 | <a target='_blank' href="https://www.allhcorp.com" rel="noreferrer">made by allhcorp</a> </span>
                </div>
                <div className="Right">
                    <form onSubmit={handleLogin} method='post' className="Form">
                        <div className="Logo">
                            <img src={logo} alt="" />
                            <span>customer <strong>space</strong></span>
                        </div>
                        <h2>Connexion</h2>
                        <div className="InputBox">
                            <div className="Icon">
                                <RemixIcons.RiMailLine />
                            </div>
                            <input type="email" value={login} onChange={(e) => setLogin(e.target.value)} placeholder='Email' autoComplete='off' />
                        </div>
                        <div className="InputBox">
                            <div className="Icon">
                                <RemixIcons.RiKeyLine />
                            </div>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Mot de passe' autoComplete='off' />
                        </div>
                        <div className="InputBox">
                            {
                                wait ?
                                    <input type="submit" value='Se connecter' /> :
                                    <button>Vérification <PulseLoader color="#fff" size='5' /></button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login