import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

const Chart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Legend,
        Tooltip,
      );
      
    const options = {
        responsive: true,
        plugins: {
            Legend: {
              position: 'top',
            },
          },
        scales:{
            y:{
                display:false
            },
            x:{
                grid:{
                    display: false
                }
            }
        }
      };
      
      const labels = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Kredit',
            data: [300,209,202,202,100,100,100],
            backgroundColor: '#6379F4',
            borderRadius:'100',
            barPercentage:'0.5'
          },
          {
            label: 'Debit',
            data: [300,209,202,202,100,100,100],
            backgroundColor: '#9DA6B5',
            borderRadius:'100',
            barPercentage:'0.5'
          },
        ],
      };
  return (
    <Bar height={250} options={options} data={data} />
  )
}

export default Chart
