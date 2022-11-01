import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const eceData: ApexOptions['series'] = [
    {
        name: 'Pitch-It-Please',
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
        name: 'Hexathlon',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(11,0),
                ],
            },
            {
                x: 'Day 1',
                y: [
                    dateFormatter(11,30),
                    dateFormatter(13,0),
                ],
            },
        ]
    },
    {
        name: 'Trump the Aces',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(13,0),
                    dateFormatter(13,30),
                ],
            },
            {
                x: 'Day 1',
                y: [
                    dateFormatter(13,45),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
    {
        name: 'Nyquizzed',
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
        name: 'Make-a-Thon',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(12,30),
                    dateFormatter(15,0),
                ],
            },
        ]
    },
    {
        name: 'HackInfinity',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(9,30),
                    dateFormatter(15,0)
                ]
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(15,0)
                ]
            },
        ]
    },
    {
        name: 'Data Utopia',
        data: [
            {

                x: 'Day 2',
                y: [
                    dateFormatter(12,30),
                    dateFormatter(13,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(13,30),
                    dateFormatter(15,0)
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
                    dateFormatter(13,0),
                ],
            },
        ]
    },
    {
        name: 'Enigma',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,45),
                    dateFormatter(10,30),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(11,0),
                    dateFormatter(12,0)
                ],
            }
        ]
    },
    {
        name: 'IPL Auction',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(12,0),
                    dateFormatter(12,30),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateFormatter(13,0),
                    dateFormatter(14,50)
                ],
            }
        ]
    },
    {
        name: 'Solder It',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,0),
                    dateFormatter(12,0)
                ],
            }
        ]
    },
]