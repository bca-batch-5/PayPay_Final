import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import {
  transactionDebit,
  transactionKredit,
} from "../../services/TransactionService";

const Chart = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      getTransactionKredit();
      getTransactionDebit();
    }
  });

  const [transaksiKredit, setTransaksiKredit] = useState([]);
  const [transaksiDebit, setTransaksiDebit] = useState([]);
  const [mappingKredit, SetMappingKredit] = useState([]);
  const [mappingDebit, SetMappingDebit] = useState([]);


  const getTransactionKredit = async () => {
    if (localStorage.getItem("user") != null) {
      const res = await transactionKredit();
      setTransaksiKredit(res.data.data);
      SetMappingKredit([
        transaksiKredit.length > 0
          ? transaksiKredit.map((el) => {
              return el.nominal;
            })
          : [0, 0, 0, 0, 0, 0],
      ]);
    }
  };
  const getTransactionDebit = async () => {
    if (localStorage.getItem("user") != null) {
      const res = await transactionDebit();
      setTransaksiDebit(res.data.data);
      SetMappingDebit([
        transaksiDebit.length > 0
          ? transaksiDebit.map((el) => {
              return el.nominal;
            })
          : [0, 0, 0, 0, 0, 0],
      ]);
    }
  };


  const options = {
    responsive: true,
    plugins: {
      Legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Kredit",
        data: mappingKredit[0],
        backgroundColor: "#6379F4",
        borderRadius: "100",
        barPercentage: "0.5",
      },
      {
        label: "Debit",
        data: mappingDebit[0],
        backgroundColor: "#9DA6B5",
        borderRadius: "100",
        barPercentage: "0.5",
      },
    ],
  };
  return <Bar height={250} options={options} data={data} />;
};

export default Chart;
