import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js'

export const MultiLineChart: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip
  )
  const labels = [
    'jan',
    'fev',
    'mar',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez'
  ]
  const sales = [65, 90, 70, 105, 80, 120, 75, 125, 95, 211, 135, 273]
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          boxWidth: 20,
          padding: 10
        }
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      }
    }
  }
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total Order',
        data: sales.map((sale) => sale + 75),
        fill: true,
        borderColor: 'rgba(129,107, 255, 1)',
        backgroundColor: 'rgba(129,107, 255, 0.4)',
        borderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 5,
        pointBorderColor: 'rgba(255, 255, 255, 0)',
        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        tension: 0.4
      },
      {
        label: 'Cancelled Order',
        data: sales.map((sale) => sale / 3),
        fill: false,
        borderColor: '#e85347',
        backgroundColor: '#e85347',
        borderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 5,
        pointBorderColor: 'rgba(255, 255, 255, 0)',
        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
        tension: 0.4,
        borderDash: [3]
      }
    ]
  }
  return <Line options={options} data={data} redraw={true} />
}
