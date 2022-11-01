import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const cseData: ApexOptions['series'] = [
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
        name: 'Mock Job Drive',
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
                    dateFormatter(12,30),
                    dateFormatter(13,30),
                ],
            },
        ]
    },
    {
        name: 'Codeolympics',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(13,0),
                ],
            },
        ]
    },
    {
        name: 'Game Night',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(13,0),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Code Triathlon',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(13,0),
                    dateFormatter(15,30),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(11,30),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Code with Comali',
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
        name: 'Hacker\'s Asylum',
        data: [
            {

                x: 'Day 2',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(12,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(12,30),
                    dateFormatter(15,30)
                ],
            }
        ]
    },
    {
        name: 'Paper Presentation',
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
        name: 'Dev Heist',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(12,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(12,30),
                    dateFormatter(14,30)
                ],
            }
        ]
    },
]