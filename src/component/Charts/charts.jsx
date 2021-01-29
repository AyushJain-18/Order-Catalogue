import React from 'react';
import './charts.styles.scss';
import { Line, Bar, Doughnut}  from 'react-chartjs-2';
// import * as chartjs from "chart.js"; // it contains chartOptions and other varible

const Dashboard =() => {
    // data sets for line charts
    const dataForLineCharts ={
        labels  : ['Jan', 'Feb', 'March', 'April', 'May'],
        datasets: [
                    {
                            label               : 'Scale for 2020(M)',
                            data                : [3,2,2,1,5],
                            borderColor         : ['red'],
                            backgroundColor     : ['lightcoral'],
                            pointBackgroundColor: 'yellow',
                            pointBorderColor    : 'blue'
                    },
                    {
                        label               : 'Scale for 2019(M)',
                        data                : [5,2,1,4,3],
                        borderColor         : ['black'],
                        backgroundColor     : ['lightblue'],
                        pointBackgroundColor: 'yellow',
                        pointBorderColor    : 'blue'
                    }
                ]
    }
    const optionsForLineCharts ={
        maintainAspectRatio: true,
        title : {
                    display : true,
                    text    : 'Line Chart' 
                },
        scales :{
                    yAxes: [
                                {
                                    ticks:  {
                                                min : 0,
                                                max : 6,
                                                stepSize: 1
                                            }
                                }
                           ]
                }
    }
    // data set for bar charts 
    const dataForBarCharts ={
        labels  : ['Jan', 'Feb', 'March', 'April', 'May'],
        datasets: [
                    {
                            label               : 'Scale for 2020(M)',
                            data                : [3,2,2,1,5],
                            borderColor         : ['red'],
                            backgroundColor     : ['lightpink','lightpink','lightpink','lightpink','lightpink'],
                            pointBackgroundColor: 'yellow',
                            pointBorderColor    : 'blue'
                    },
                    {
                        label               : 'Scale for 2019(M)',
                        data                : [5,2,1,4,3],
                        borderColor         : ['black'],
                        backgroundColor     : ['lightblue','lightblue','lightblue','lightblue','lightblue'],
                        pointBackgroundColor: 'yellow',
                        pointBorderColor    : 'blue'
                    }
                ]
    }
    const optionsForBarCharts ={
        maintainAspectRatio: true,
        title : {
                    display : true,
                    text    : 'Bar Chart' 
                },
        scales :{
                    yAxes: [
                                {
                                    ticks:  {
                                                min : 0,
                                                max : 6,
                                                stepSize: 1
                                            }
                                }
                           ]
                }
    }
    // data sets for dougnot charts
    const dataForDoughnutCharts ={
        labels  : ['Jan', 'Feb', 'March', 'April', 'May'],
        datasets: [
                    {
                            label               : 'Scale for 2020(M)',
                            data                : [3,2,2,1,5],
                            backgroundColor     : ['lightpink','cadetblue','cornflowerblue','coral','dodgerblue'],
                    }
                ]
    }
    const optionsForDoughnutCharts ={
        maintainAspectRatio: true,
        title : {
                    display : true,
                    text    : 'Doughnut Chart' 
                }
    }
       return (
           <div style={{width: 700, margin: ' 50px auto'}}>
                <Line data = {dataForLineCharts} options ={optionsForLineCharts} />
                <div style ={{height: 100}}></div>
                <Bar data = {dataForBarCharts}   options ={optionsForBarCharts} />
                <div style ={{height: 100}}></div>
                <Doughnut  data = {dataForDoughnutCharts}   options ={optionsForDoughnutCharts} />
            </div>
       )
   }

export default Dashboard;