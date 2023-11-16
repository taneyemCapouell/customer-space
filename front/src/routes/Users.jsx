import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout, ListeEnquete, ListeNote, ListeClient, Parametre, TableauDeBord } from '../pages/users'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Profil from '../components/profil/Profil'
import Erreur404 from '../_util/Erreur404'

const Users = () => {
    const [profil, setProfil] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    return (
        <div className="Pages">
            <Header
                sidebar={sidebar}
                setSidebar={setSidebar}
            />
            <main className='Main'>
                <Sidebar
                    profil={profil}
                    setProfil={setProfil}
                    sidebar={sidebar}
                />
                <div className={sidebar ? "ContentMax" : "Content"}>
                    <Profil
                        profil={profil}
                        setProfil={setProfil}
                    />
                    <Routes>
                        <Route element={<Layout />}>
                            <Route index element={<TableauDeBord />} />
                            <Route path='/dashboard' element={<TableauDeBord />} />
                            <Route path='/survey' element={<ListeEnquete />} />
                            <Route path='/note' element={<ListeNote />} />
                            <Route path='/setting' element={<Parametre />} />
                            <Route path='/customer' element={<ListeClient />} />
                            <Route path='*' element={<Erreur404 />} />
                        </Route>
                    </Routes>
                </div>
            </main>
        </div>
    )
}

export default Users