import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic'
import { options } from './util';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const TimelineChart = ({ data }: { data: ApexOptions['series'] }) => {
    return (
        <main className="w-full m-auto">
            <Chart options={options} series={data} type="rangeBar" />
        </main>
    )
}