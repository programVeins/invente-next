import dynamic from 'next/dynamic'
import { options, series } from './util';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const TimelineChart = () => {
    return (
        <main className="w-3/4 m-auto">
            <Chart options={options} series={series} type="rangeBar" height={450} />
        </main>
    )
}