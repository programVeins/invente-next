import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const itData: ApexOptions['series'] = [
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
        name: 'Websitica',
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
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Papyrus',
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
        name: 'Reverse Gear',
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
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Expecto Perceptronum',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(12,0),
                ],
            },
        ]
    },
    {
        name: 'Kickoff',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(12,0),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Codera',
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
                    dateFormatter(11,0),
                    dateFormatter(13,0)
                ],
            }
        ]
    },
    {
        name: 'Sysops',
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
                    dateFormatter(12,0),
                    dateFormatter(15,0)
                ],
            }
        ]
    },
    {
        name: 'Brand It!',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(10,0),
                    dateFormatter(12,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(13,0),
                    dateFormatter(15,30)
                ],
            }
        ]
    },
    {
        name: 'Charades',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(12,30),
                ],
            },
        ]
    }
]