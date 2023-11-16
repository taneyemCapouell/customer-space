import React, { useState } from 'react'
import * as RemixIcons from "react-icons/ri"
import { IconContext } from 'react-icons/lib'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../styles/dashboard.scss'
import Pagination from '../../components/pagination/Pagination'

const TableauDeBord = () => {
  const [pageable, setPageable] = useState({

  })

  const data = [
    {
      name: 'Lun',
      Courbe: 10
    },
    {
      name: 'Ma',
      Courbe: 20
    },
    {
      name: 'Me',
      Courbe: 20
    },
    {
      name: 'Jeu',
      Courbe: 30
    },
    {
      name: 'Ven',
      Courbe: 31
    },
    {
      name: 'Sam',
      Courbe: 35
    },
    {
      name: 'Dim',
      Courbe: 50
    },
  ]

  return (
    <>
      <IconContext.Provider value={{ size: '2.5rem' }}>
        <div className="FirstGroup">
          <div className="TBox">
            <div className="Element">
              <span>Total entreprise</span>
              <div className="Length">
                10
              </div>
            </div>
            <div className='IconM'><RemixIcons.RiBuildingLine /></div>
          </div>
          <div className="TBox">
            <div className="Element">
              <span>Total enquête</span>
              <div className="Length">
                30
              </div>
            </div>
            <div className='IconM'><RemixIcons.RiSurveyLine /></div>
          </div>
          <div className="TBox">
            <div className="Element">
              <span>Enquête en cours</span>
              <div className="Length">
                20
              </div>
            </div>
            <div className='IconM'><RemixIcons.RiAlarmWarningLine /></div>
          </div>
          <div className="TBox">
            <div className="Element">
              <span>Entreprise bloquée</span>
              <div className="Length">
                15
              </div>
            </div>
            <div className='IconM'><RemixIcons.RiCloseCircleLine /></div>
          </div>
        </div>

        <div className="SecondGroup">
          <div className="TBoxx">
            <h5>Entreprises enregistrées</h5>
            <ResponsiveContainer width="100%" height="90%" className="OK">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Courbe" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="TBoxx">
            <div className="Left">
              <h5>Meilleure note </h5>
              <div className="ReturnContent">
                <h3>Resto Famine</h3>
                <div className='Return'>
                  <h2>70</h2>
                </div>
              </div>
            </div>
            <div className="Right">
              <h5>Dernière note </h5>
              <div className="ReturnContent">
                <h3>Kage Auto</h3>
                <div className='Return'>
                  <h2>20</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="TBoxx">
            <h5>Détails entreprises</h5>
            <div className="Details">
              <table>
                <thead>
                  <tr>
                    <td>No.</td>
                    <td>Nom</td>
                    <td>Email</td>
                    <td>Téléphone</td>
                    <td>Immatriculation</td>
                    <td>Statut</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Resto famine</td>
                    <td>resto.famine@gmail.com</td>
                    <td>655 67 89 90</td>
                    <td>RJ45UKSWE34098</td>
                    <td><RemixIcons.RiCheckboxCircleLine size={16} /></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Resto famine</td>
                    <td>resto.famine@gmail.com</td>
                    <td>655 67 89 90</td>
                    <td>RJ45UKSWE34098</td>
                    <td><RemixIcons.RiCheckboxCircleLine size={16} /></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Resto famine</td>
                    <td>resto.famine@gmail.com</td>
                    <td>655 67 89 90</td>
                    <td>RJ45UKSWE34098</td>
                    <td><RemixIcons.RiCheckboxCircleLine size={16} /></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Resto famine</td>
                    <td>resto.famine@gmail.com</td>
                    <td>655 67 89 90</td>
                    <td>RJ45UKSWE34098</td>
                    <td><RemixIcons.RiCheckboxCircleLine size={16} /></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Resto famine</td>
                    <td>resto.famine@gmail.com</td>
                    <td>655 67 89 90</td>
                    <td>RJ45UKSWE34098</td>
                    <td><RemixIcons.RiCheckboxCircleLine size={16} /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Pagination
              pageable={pageable}
            />
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default TableauDeBord