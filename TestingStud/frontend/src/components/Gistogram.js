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
        labels: ["Vadim", "Daniil", "Gleb"],
        datasets: [
          {
            label: "check label",
            data: [12, 55, 34, 120, 720],
            borderColor: "rgb(53,162,235)",
            backgroundColor: "rgb(53, 162, 235, 0.4)",
          },
        ],
      });
      setChartOptions({
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Check Title"
          }
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
                  График
                  </li>
                <li><Link to="/profile/gistogramm" style={{ textDecoration: 'none' }}>Гистрограмма</Link></li>
        </div>  
        <Bar options={chartOptions} data={chartData} />
      </div>
      )
}

export default Gistogram;