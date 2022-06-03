import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from 'chart.js'

export const SingleLineChart: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  )

  // ChartJS.defaults.scale.display = false
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    borderColor: '#3ab2f2',
    borderWidth: 2,
    fill: false,
    pointRadius: 1,
    tension: 0.4
  }
  const data = {
    labels: ['jan', 'mar', 'jun', 'set', 'dez'],
    datasets: [
      {
        label: 'rating',
        data: [5, 30, 10, 45, 20],
        scales: {
          beginAtZero: true
        }
      }
    ]
  }
  return <Line options={options} data={data} />
}
