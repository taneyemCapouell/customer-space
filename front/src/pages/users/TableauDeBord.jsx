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
      name: 'Mer',
      Courbe: 10
    },
    {
      name: 'Jeu',
      Courbe: 30
    },
    {
      name: 'Ven',
      Courbe: 5
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
              <span>Client abonné</span>
              <div className="Length">
                10
              </div>
            </div>
            <div className='IconM'><RemixIcons.RiBuildingLine /></div>
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
            <h5>Courbes des reponses de la semaine</h5>
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
              <h5>Enquête avec plus de note </h5>
              <div className="ReturnContent">
                <h3>Nourriture</h3>
                <div className='Return'>
                  <h2>30</h2>
                </div>
              </div>
            </div>
            <div className="Right">
              <h5>Enquête avec moins de note </h5>
              <div className="ReturnContent">
                <h3>Service</h3>
                <div className='Return'>
                  <h2>5</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="TBoxx">
            <h5>Liste des enquêtes</h5>
            <div className="Details">
              <table>
                <thead>
                  <tr>
                    <td>No.</td>
                    <td>Nom</td>
                    <td>date</td>
                    <td>Question</td>
                    <td>Reponse</td>
                    <td>Statut</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nourriture</td>
                    <td>2023-09-10</td>
                    <td>4</td>
                    <td>20</td>
                    <td>Encours</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Service</td>
                    <td>2023-09-10</td>
                    <td>4</td>
                    <td>20</td>
                    <td>Encours</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Boisson</td>
                    <td>2023-09-10</td>
                    <td>4</td>
                    <td>20</td>
                    <td>Encours</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Animation</td>
                    <td>2023-09-10</td>
                    <td>4</td>
                    <td>20</td>
                    <td>Encours</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Confort</td>
                    <td>2023-09-10</td>
                    <td>4</td>
                    <td>20</td>
                    <td>Encours</td>
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