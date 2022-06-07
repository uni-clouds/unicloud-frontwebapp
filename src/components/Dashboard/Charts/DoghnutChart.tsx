import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

export const DoughnutChart: React.FC = () => {
  ChartJS.register(ArcElement, Tooltip, Legend)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 10
        }
      },
      layout: {
        padding: {
          bottom: 10
        }
      }
    },
    hoverOffSet: 4,
    offset: 6,
    borderRadius: 4,
    borderAlignment: 'inner',
    cutout: '70%'
  }

  const data = {
    labels: ['Completed', 'Processing', 'Cancelled'],
    datasets: [
      {
        label: '# of Votes',
        data: [42, 39, 9],
        backgroundColor: [
          'rgba(129,107, 255, 1)',
          'rgba(0, 178, 206, 1)',
          'rgba(255, 99, 165, 1)'
        ],
        borderColor: [
          'rgba(129,107, 255, 1)',
          'rgba(0, 178, 206, 1)',
          'rgba(255, 99, 165, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  return <Doughnut data={data} options={options} />
}
