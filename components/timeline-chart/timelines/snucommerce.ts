import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const snucData: ApexOptions['series'] = [
    {
        name: 'Business Quiz',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateFormatter(10,30),
                    dateFormatter(12,30),
                ]
            }
        ]
    },
    {
        name: 'Fintech Workshop',
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
        name: 'Startup Plan',
        data: [
            {
                x: 'Day 2',
                y: [
                    dateFormatter(9,30),
                    dateFormatter(15,30),
                ],
            },
        ]
    },
]