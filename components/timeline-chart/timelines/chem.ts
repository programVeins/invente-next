import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const chemData: ApexOptions['series'] = [
    {
        name: 'Inaugration',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(9,30),
                    dateFormatter(10,30)
                ]
            },
        ]
    },
    {
        name: 'Jumanji',
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
                    dateFormatter(12,0),
                    dateFormatter(13,30),
                ],
            },
        ]
    },
    {
        name: 'Chem Connexions',
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
                    dateFormatter(13,30),
                    dateFormatter(15,0),
                ],
            },
        ]
    },
    {
        name: 'House of fun',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(15,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(15,0),
                ],
            },
        ]
    },
    {
        name: 'Treasure Trove',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(15,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(15,0),
                ],
            },
        ]
    },
    {
        name: 'Puzzle Hunt',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(15,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(15,0),
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
                    dateFormatter(12,0),
                    dateFormatter(13,30),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(12,30),
                ],
            },
        ]
    },
    {
        name: 'Poster Presentation',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(10,0),
                ],
            },
        ]
    },
    {
        name: 'Trippy Trivia',
        data: [
            {

                x: 'Day 2',
                y: [
                    dateFormatter(10,0),
                    dateFormatter(11,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(14,0),
                    dateFormatter(15,0),
                ],
            },
        ]
    },
    {
        name: 'Chem Wordle',
        data: [
            {

                x: 'Day 2',
                y: [
                    dateFormatter(10,0),
                    dateFormatter(11,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(12,30),
                    dateFormatter(14,0),
                ],
            },
        ]
    },
    {
        name: 'Deep Waters',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(13,0),
                ],
            },
        ]
    },
]