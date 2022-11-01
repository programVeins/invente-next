import { ApexOptions } from "apexcharts";
import { axisStyle, dataLabelStyle, lgOptions, mdOptions, smOptions, xlOptions, xsOptions } from "./breakpoints";

const gridBorderColor = '#ccc';
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
    ]
}

export const options: ApexOptions = {
    legend: {
        show: false
    },
    chart: {
        type: 'rangeBar',
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '100%',
            rangeBarOverlap: true,
            dataLabels: {
                hideOverflowingLabels: false,
            }
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
                fontSize: '24px',
            }
        },
    },
    stroke: {
        show: true,
    },
    fill: {
        type: 'gradient',
        gradient: gradientStyle,
    },
    tooltip: {
        enabled: false,
    },
    dataLabels: {
        enabled: true,
        formatter: (val, { seriesIndex, config }) => {
            let name = config.series[seriesIndex].name;
            if (['Hexathlon', 'Trump the Aces', 'Data Utopia', 'IPL Auction', 'Mock Job Drive', 'Hacker\'s Asylum'].includes(name)) {
                name = name.substring(0, 5) + '...';
            }
            if (['Expecto Perceptronum', 'Poster Presentation'].includes(name))
                name = name.substring(0, 10) + '...';

            return name;
        },
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
    responsive: [
        {
            breakpoint: 1280,
            options: xlOptions
        },
        {
            breakpoint: 1024,
            options: lgOptions
        },
        {
            breakpoint: 768,
            options: mdOptions,
        },
        {
            breakpoint: 640,
            options: smOptions
        },
        {
            breakpoint: 450,
            options: xsOptions,
        }
    ]
};

export const dateFormatter = (hr: number, min: number) =>
    min > 29 ?
    new Date(2022, 10, 3, hr+6, min+30-60).getTime() :
    new Date(2022, 10, 3, hr+5, min+30).getTime();
