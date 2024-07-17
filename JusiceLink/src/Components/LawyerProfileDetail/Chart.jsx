import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import d from "../../assets/dummy_data.json";

export default function PracticeChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const lawyerData = d;
  const labels = lawyerData.practiceAreas.map((area) => area.name);
  const data = lawyerData.practiceAreas.map((area) => area.percent);
  const backgroundColor = [
    "rgb(100, 149, 237)",
    "rgb(30, 144, 255)",
    "rgb(135, 206, 235)",
    "rgb(70, 130, 180)",
    "rgb(65, 105, 225)",
    "rgb(106, 90, 205)",
    "rgb(0, 199, 235)",
    "rgb(0, 0, 205)",
    "rgb(0, 0, 128)",
    "rgb(0, 128, 128)",
  ];

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const newChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(newChartRef, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: backgroundColor.slice(0, data.length),
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${labels[tooltipItem.index]}: ${
                  data[tooltipItem.index]
                }%`;
              },
            },
          },
          legend: {
            position: "right",
            labels: {
              padding: 20,
              boxWidth: 10,
            },
          },
        },
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels]);

  return (
    <div className="flex justify-center items-center w-fit h-fit">
      <div className="relative w-auto max-w-sm">
        <canvas ref={chartRef} className="w-full h-full"></canvas>
      </div>
    </div>
  );
}
