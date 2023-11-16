import React from 'react'
import * as RemixIcons from "react-icons/ri"

export const ItemsAdmin = [
    {
        Icon: <RemixIcons.RiHomeOfficeLine />,
        Display: "Tableau de bord",
        Link: "/admin/"
    },
    {
        Icon: <RemixIcons.RiBuildingLine />,
        Display: "Entreprises",
        Link: "/admin/company",
        subNav: [
            {
                Icon: <RemixIcons.RiAddLine />,
                Display: "Nouvelle entreprise.",
                Link: "/admin/company/new",
            },
            {
                Icon: <RemixIcons.RiListRadio />,
                Display: "Liste des entreprises",
                Link: "/admin/company",
            }
        ]
    },
    {
        Icon: <RemixIcons.RiSurveyLine />,
        Display: "Enquêtes",
        Link: "/admin/survey",
        subNav: [
            {
                Icon: <RemixIcons.RiListRadio />,
                Display: "Liste des enquêtes",
                Link: "/admin/survey",
            },
            {
                Icon: <RemixIcons.RiStickyNoteLine />,
                Display: "Liste des notes",
                Link: "/admin/note",
            }
        ]
    },
    {
        Icon: <RemixIcons.RiUserHeartLine />,
        Display: "Clients",
        Link: "/admin/customer",
    },
    {
        Icon: <RemixIcons.RiSoundModuleLine />,
        Display: "Paramètres",
        Link: "/admin/setting",
    }
]

export const ItemsUser = [
    {
        Icon: <RemixIcons.RiHomeOfficeLine />,
        Display: "Tableau de bord",
        Link: "/"
    },
    {
        Icon: <RemixIcons.RiSurveyLine />,
        Display: "Enquête",
        Link: "/users/survey",
        subNav: [
            {
                Icon: <RemixIcons.RiListRadio />,
                Display: "Liste des enquêtes",
                Link: "/users/survey",
            },
            {
                Icon: <RemixIcons.RiStickyNoteLine />,
                Display: "Liste des notes",
                Link: "/users/note",
            }
        ]
    },
    {
        Icon: <RemixIcons.RiUserHeartLine />,
        Display: "Client",
        Link: "/users/customer",
    },
    {
        Icon: <RemixIcons.RiSoundModuleLine />,
        Display: "Paramètres",
        Link: "/users/setting",
    }
]
