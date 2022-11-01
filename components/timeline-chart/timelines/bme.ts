import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const mechData: ApexOptions['series'] = [
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
                    dateFormatter(11,0),
                    dateFormatter(13,0),
                ],
            },
        ]
    },
    {
        name: 'Medical Merchandise',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(12,0),
                    dateFormatter(15,0),
                ],
            },
        ]
    },
    {
        name: 'Kadhai Kelu',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(13,15),
                    dateFormatter(15,15),
                ],
            },
        ]
    },
    {
        name: 'Futsal',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(12,0),
                    dateFormatter(15,15),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(14,0),
                ],
            },
        ]
    },
    {
        name: 'Project Expo',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(12,0),
                ],
            },
        ]
    },
    {
        name: 'Brain Freeze',
        data: [
            {

                x: 'Day 2',
                y: [
                    dateFormatter(13,15),
                    dateFormatter(15,0),
                ],
            },
        ]
    },
    {
        name: 'Desvity',
        data: [
            {

                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(12,0),
                ],
            },
        ]
    },
    {
        name: 'Telehealth web development',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(15,0),
                ],
            },
        ]
    },
]