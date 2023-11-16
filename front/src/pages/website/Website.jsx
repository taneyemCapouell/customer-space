import React, { useState } from 'react'
import * as RemixIcons from "react-icons/ri"
import './website.scss'
import Img from '../../assets/images/cover_survey.jpg'
import StepItem from './StepItem'

const Website = () => {
    const [step, setStep] = useState(0)
    const Increment = () => {
        if (step < 4) {
            setStep((current) => current + 1)
        }
    }

    const Decrement = () => {
        setStep((current) => current - 1)
    }

    const AllStep = [
        {
            question: "Comment avez vous trouvé notre accueil ?"
        },
        {
            question: "Comment avez vous trouvé notre animation ?"
        },
        {
            question: "Comment avez vous trouvé notre cuisine ?"
        },
        {
            question: "Comment avez vous trouvé notre boisson ?"
        },
    ]

    return (
        <div className='Website'>
            <div className="Description">
                <div className="Img-Des">
                    <img src={Img} alt="" />
                </div>
                <div className="Desc">
                    <h1>A propos de nous</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente deserunt debitis libero sunt atque architecto ipsam fugit pariatur deleniti, est voluptate accusantium! Accusantium eos hic est doloremque dolorum voluptatum!
                        Ab veritatis autem, itaque blanditiis omnis deserunt aspernatur, repudiandae ducimus odio magni praesentium cumque eum enim pariatur labore provident atque maxime illum nostrum, inventore molestias nobis! Optio numquam facere iusto.
                        Praesentium atque perferendis maxime eligendi quam cum quis inventore, vero porro sed facere odit recusandae optio placeat ut laudantium, sapiente amet laboriosam iste nam unde vel similique repellendus! Sed, quisquam.
                    </p>
                </div>
            </div>
            <div className="Cont">
                <div className="Survey">
                    <div className="Head">
                        <h1>Resto Famine</h1>
                        <hr />
                    </div>
                    <div className="Body">
                        <p className="Name-Survey">Satisfaction client</p>
                        <p>Cher client, nous aimerions que vous notez notre service à travers les questions ci-dessous :</p>
                        <div className="Survey-Cont">
                            {
                                step === 0 ?
                                    <div className="Quest-Content">
                                        <span className="Question">Comment avez vous trouvé notre accueil ?</span>
                                        <div className="Star">
                                            <RemixIcons.RiStarLine />
                                            <RemixIcons.RiStarLine />
                                            <RemixIcons.RiStarLine />
                                            <RemixIcons.RiStarLine />
                                            <RemixIcons.RiStarLine />
                                        </div>
                                        <textarea name="" id="" cols="30" rows="10" placeholder='Votre avis sur la question'></textarea>
                                    </div>
                                    : step === 1 ?
                                        <div className="Quest-Content">
                                            <span className="Question">Comment avez vous trouvé notre animation ?</span>
                                            <div className="Star">
                                                <RemixIcons.RiStarLine />
                                                <RemixIcons.RiStarLine />
                                                <RemixIcons.RiStarLine />
                                                <RemixIcons.RiStarLine />
                                                <RemixIcons.RiStarLine />
                                            </div>
                                            <textarea name="" id="" cols="30" rows="10" placeholder='Votre avis sur la question'></textarea>
                                        </div>
                                        : step === 2 ?
                                            <div className="Quest-Content">
                                                <span className="Question">Comment avez vous trouvé notre cuisine ?</span>
                                                <div className="Star">
                                                    <RemixIcons.RiStarLine />
                                                    <RemixIcons.RiStarLine />
                                                    <RemixIcons.RiStarLine />
                                                    <RemixIcons.RiStarLine />
                                                    <RemixIcons.RiStarLine />
                                                </div>
                                                <textarea name="" id="" cols="30" rows="10" placeholder='Votre avis sur la question'></textarea>
                                            </div>
                                            : step === 3 ?
                                                <div className="Quest-Content">
                                                    <span className="Question">Comment avez vous trouvé notre boisson ?</span>
                                                    <div className="Star">
                                                        <RemixIcons.RiStarLine />
                                                        <RemixIcons.RiStarLine />
                                                        <RemixIcons.RiStarLine />
                                                        <RemixIcons.RiStarLine />
                                                        <RemixIcons.RiStarLine />
                                                    </div>
                                                    <textarea name="" id="" cols="30" rows="10" placeholder='Votre avis sur la question'></textarea>
                                                </div>
                                                : step === 4 ?
                                                    <div className="Quest-Content">
                                                        <span className="Question">Comment avez vous trouvé notre sécurité ?</span>
                                                        <div className="Star">
                                                            <RemixIcons.RiStarLine />
                                                            <RemixIcons.RiStarLine />
                                                            <RemixIcons.RiStarLine />
                                                            <RemixIcons.RiStarLine />
                                                            <RemixIcons.RiStarLine />
                                                        </div>
                                                        <textarea name="" id="" cols="30" rows="10" placeholder='Votre avis sur la question'></textarea>
                                                    </div>
                                                    :
                                                    "Finish"

                            }
                        </div>
                        <div className="Nav-Step">
                            {
                                step > 0 ?
                                    <button className='Btn' onClick={Decrement}> <RemixIcons.RiArrowDropLeftLine size={18} /> Précédent</button> : ""
                            }
                            {
                                step === 4 ? 
                                <button className='Btn' onClick={Increment}>Envoyer <RemixIcons.RiSendPlaneLine size={18} /></button> :
                                <button className='Btn' onClick={Increment}>Suivant <RemixIcons.RiArrowDropRightLine size={18} /></button>
                            }
                        </div>
                    </div>
                    <div className="Step-Cont">
                        <StepItem index={0} step={step} />
                        <StepItem index={1} step={step} />
                        <StepItem index={2} step={step} />
                        <StepItem index={3} step={step} />
                        <StepItem index={4} step={step} />
                    </div>
                </div>
                <div className="Service">
                    eefef
                </div>
            </div>
        </div>
    )
}

export default Website