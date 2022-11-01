import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const eeeData: ApexOptions['series'] = [
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
        name: 'Inventino',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(11,30),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(8,30),
                    dateFormatter(11,0),
                ],
            },
        ]
    },
    {
        name: 'Quizadry',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(12,30),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Paper Presentation',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(13,30),
                ],
            },
        ]
    },
    {
        name: 'Ideate',
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
        name: 'Workshop',
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
        name: 'IPL Bidding',
        data: [
            {

                x: 'Day 1',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(12,0),
                ],
            },
            {
                x: 'Day 1',
                y: [
                    dateFormatter(13,0),
                    dateFormatter(15,30)
                ],
            }
        ]
    },
    {
        name: 'Tentkotta',
        data: [
            {

                x: 'Day 2',
                y: [
                    dateFormatter(13,0),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'D Sim',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(8,30),
                    dateFormatter(11,0),
                ],
            },
        ]
    },
    {
        name: 'E Maze',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(12,30),
                ],
            },
        ]
    },
    {
        name: 'No Jargon',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(10,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(13,30),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'D(E)-Bugging',
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
]