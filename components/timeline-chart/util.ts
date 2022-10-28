import { ApexOptions } from "apexcharts";
import data from './data.json';

const fontFamily = 'Azonix';

const axisStyle = {
    colors: ['#ffffff'],
    fontSize: '14px',
    fontWeight: 400,
    fontFamily,
}
const dataLabelStyle = {
    fontWeight: 500,
    fontSize: '14px',
    fontFamily,
}
const gridBorderColor = '#504F89';
const gradientStyle = {
    type: 'horizontal',
    colorStops: [
        [
            {
                offset: 0,
                color: '#AD35DC',
            },
            {
                offset: 10,
                color: '#D53995',
            },
            {
                offset: 100,
                color: '#F43254',
            }
        ],
        [
            {
                offset: 0,
                color: '#F17241',
            },
            {
                offset: 10,
                color: '#F2833F',
            },
            {
                offset: 100,
                color: '#F9B457',
            }
        ],
        [
            {
                offset: 0,
                color: '#362DE3',
            },
            {
                offset: 10,
                color: '#3385E2',
            },
            {
                offset: 100,
                color: '#3BF5DA',
            }
        ]
    ]
}

export const options: ApexOptions = {
    legend: {
        show: false,
    },
    chart: {
        type: 'rangeBar',
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '90%',
            borderRadius: 30,
            rangeBarOverlap: true,
        }
    },
    xaxis: {
        type: 'datetime',
        position: 'top',
        labels: {
            style: axisStyle,
        },
        axisBorder: {
            show: false
        }
    },
    yaxis: {
        labels: {
            style: {
                ...axisStyle,
                fontSize: '28px',
            }
        },
    },
    stroke: {
        show: false,
    },
    fill: {
        type: 'gradient',
        gradient: gradientStyle,
    },
    tooltip: {
        enabled: true,
        onDatasetHover: {
            highlightDataSeries: true,
        },
        x: {
            show: true,
        },
        y: {
            title: {
                formatter: (seriesName) => seriesName,
            }
        }
    },
    dataLabels: {
        enabled: true,
        formatter: (val, { seriesIndex, config }) => config.series[seriesIndex].name,
        style: dataLabelStyle,
    },
    grid: {
        show: true,
        borderColor: gridBorderColor,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    },
};

const dateGetter = (hr: number, min: number) =>
    min > 29 ?
    new Date(2022, 10, 3, hr+6, min+30-60).getTime() :
    new Date(2022, 10, 3, hr+5, min+30).getTime();

export const series: ApexOptions['series'] = [
    {
        name: 'Websitica (prelims)',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateGetter(9,0),
                    dateGetter(10,0),
                ],
            },
            {
                x: 'Day 1',
                y: [
                    dateGetter(11,0),
                    dateGetter(12, 30),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateGetter(9,0),
                    dateGetter(11,30),
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
                    dateGetter(9,30),
                    dateGetter(11,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateGetter(9,30),
                    dateGetter(11,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateGetter(12,0),
                    dateGetter(13,0),
                ],
            },
        ]
    },
    {
        name: 'Sysops(prelims)',
        data: [
            {
                x: 'Day 1',
                y: [
                    dateGetter(9,30),
                    dateGetter(11,0),
                ],
            },
            {

                x: 'Day 2',
                y: [
                    dateGetter(9,30),
                    dateGetter(11,0),
                ],
            },
            {
                x: 'Day 2',
                y: [
                    dateGetter(11,30),
                    dateGetter(12,30)
                ],
            }
        ]
    }
]