import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const civilData: ApexOptions['series'] = [
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
        name: 'Royal Battle',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(14,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(10,0),
                    dateFormatter(14,0),
                ],
            },
        ]
    },
    {
        name: 'Gully Cricket',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(14,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(10,0),
                    dateFormatter(14,0),
                ],
            },
        ]
    },
    {
        name: 'Snakes & Ladders',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(12,30),
                ],
            },
        ]
    },
    {
        name: 'Quizzards of Oz',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(12,30),
                ],
            },
        ]
    },
    {
        name: 'Solve-It',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(13,30),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Unscripted',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(13,30),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Bob the Builder',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(11,0),
                ],
            },
        ]
    },
    {
        name: 'Paper Presentation',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(12,30),
                ],
            },
        ]
    },
    {
        name: 'CreCad',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(10,0),
                    dateFormatter(12,0),
                ],
            },
        ]
    },
    {
        name: 'JCB',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(13,0),
                    dateFormatter(15,0),
                ],
            },
        ]
    },
]