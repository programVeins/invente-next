import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const bmeData: ApexOptions['series'] = [
    {
        name: 'Inaugration',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(10,30)
                ]
            }
        ]
    },
    {
        name: 'Paper Presentation',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Murder Mystery',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Project Presentation',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(8,30),
                    dateFormatter(12,0),
                ],
            },
        ]
    },
    {
        name: 'Bottle Rocketrix',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Mechathlon',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(8,30),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Hovercraft',
        data: [
            {

                x: 'Day 2',
                y: [
                    dateFormatter(9,30),
                    dateFormatter(13,30),
                ],
            },
        ]
    },
    {
        name: 'Nitro GP',
        data: [
            {

                x: 'Day 2',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(15,0),
                ],
            },
        ]
    },
    {
        name: 'Robo Wars',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(10,0),
                    dateFormatter(13,0),
                ],
            },
        ]
    },
    {
        name: 'Blitz Gp',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(12,0),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Car Wars',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(8,30),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
]