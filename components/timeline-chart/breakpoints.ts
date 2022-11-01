const fontFamily = 'Azonix';
export const dataLabelStyle = {
    fontWeight: 500,
    fontSize: '14px',
    fontFamily,
}
export const axisStyle = {
    colors: ['#ffffff'],
    fontSize: '14px',
    fontWeight: 400,
    fontFamily,
}

// Breakpoint: 1280px
export const xlOptions = {
    dataLabels: {
        style: {
            ...dataLabelStyle,
            fontSize: '12px'
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '80%',
            rangeBarOverlap: true,
        }
    },
}

// Breakpoint: 1024px
export const lgOptions = {
    dataLabels: {
        style: {
            ...dataLabelStyle,
            fontSize: '10px'
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '60%',
            rangeBarOverlap: true,
        }
    },
}

// Breakpoint: 768px
export const mdOptions = {
    legend: {
        show: true,
        fontFamily,
        floating: true,
        labels: {
            colors: ['#ffffff']
        }
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '40%',
            rangeBarOverlap: true,
        }
    },
}

// Breakpoint: 640px
export const smOptions = {
    legend: {
        show: true,
        fontFamily,
        floating: true,
        labels: {
            colors: ['#ffffff']
        }
    },
    dataLabels: {
        enabled: false
    },
    yaxis: {
        labels: {
            style: {
                ...axisStyle,
                fontSize: '18px',
            }
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '40%',
            rangeBarOverlap: true,
        }
    },

}