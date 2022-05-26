import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

const Gistogram = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
      })
          const [chartOptions, setChartOptions] = useState({});
    
      useEffect(() => {
        setChartData({
        labels: ["РКСП", "ООП", "История России"],
        datasets: [
          {
            label: "Успеваемость",
            data: [75, 50, 30],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
              ],
          },
        ],
      });
      setChartOptions({
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
        }
      })
      }, [])

      return(
        <div>
            <div className='vertical-menu'>
                <li>
                <Link to="/profile" style={{ textDecoration: 'none' }}>Таблица</Link>
                  </li>
                <li>
                 Прогресс
                  </li>
                <li><Link to="/profile/gistogram" style={{ textDecoration: 'none' }}>Гистрограмма</Link></li>
        </div>
        <div className='gistogram'> 
        <Bar options={chartOptions} data={chartData} />
        </div> 
      </div>
      )
}

export default Gistogram;