import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Line } from 'react-chartjs-2'

export const LineSimple: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  )

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      fillStyle: '#000'
    }
  }

  const data = {
    labels: ['', ' ', ' ', ' '],
    datasets: [
      {
        label: 'rating',
        data: [5, 30, 10, 20],
        borderColor: '#3ab2f2',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
        tension: 0.5,
        scales: {
          beginAtZero: true
        }
      }
    ]
  }
  return <Line options={options} data={data} />
}
