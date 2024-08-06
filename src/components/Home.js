import React, { useState } from 'react';
import './Home.css'; // Ensure this CSS file is styled as needed
import ProgressChart from './ProgressChart';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import StarRatings from 'react-star-ratings';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional: For Bootstrap's JS components



// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
  const [timePeriod, setTimePeriod] = useState('Weekly');

  const getChartData = () => {
    // Example data for demonstration; you should replace this with actual data
    const data = {
      Weekly: [5, 10, 15, 20, 25, 20, 10, 15, 20, 25],
      Monthly: [50, 100, 300, 100, 200,500, 100, 300, 50, 550],
      Yearly: [500, 1000, 1500, 2000, 2500,3000, 1000, 1500, 2000, 3500],
    };

    return {
      labels: ['2', '4', '6', '8', '10','12','14','16','18','20'],
      datasets: [
        {
          label: `Sales (${timePeriod})`,
          data: data[timePeriod],
          backgroundColor: 'rgba(240, 39, 39, 0.2)',
          borderColor: 'rgba(228, 13, 13, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
  };

  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Bella', orderNo: '15478256', amount: '$345.00', status: 'Delivered' },
    { customer: 'Zara', orderNo: '15478256', amount: '$120.00', status: 'Cancelled' },
    { customer: 'Hawkins', orderNo: '15478256', amount: '$452.00', status: 'Pending' },
    { customer: 'Cooper', orderNo: '15478256', amount: '$501.00', status: 'Delivered' },
    { customer: 'Watson', orderNo: '15478256', amount: '$465.00', status: 'Delivered' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'status-delivered';
      case 'Pending':
        return 'status-pending';
      case 'Cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  const ratings = [
    { name: 'Wade Warren', rating: 4, review: 'Great service and fast delivery' },
    { name: 'Bella', rating: 5,  review: 'Excellent quality, highly recommend' },
    { name: 'Zara', rating: 2,  review: 'Chicken burger cold and poorly packaged,' },
    { name: 'Cooper', rating: 5,  review: 'The burger was juicy, well-toasted, and packed with fresh, tasty toppings' },
    { name: 'Cooper', rating: 5,  review: 'The burger was juicy, well-toasted, and packed with fresh, tasty toppings' },
    { name: 'Cooper', rating: 5,  review: 'The burger was juicy, well-toasted, and packed with fresh, tasty toppings' },
  ];
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-2 mb-2">Dashboard</h1>

      {/* First Row */}
      <div className="row mb-4">
        <div className="col-md-9">
          <div className="row ">
            <div className="col-md-3 mb-3">
              <div className="card bg-dark text-white h-100">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <i className="fas fa-shopping-cart fa-1x mb-3" style={{ color: '#54aeeb' }}></i>
                  <h6 className="card-title">Total Orders</h6>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <button type="button" className="btn btn-outline-info">75</button>
                  <div className="small text-dark"><i className="fas fa-sort-amount-up-alt mb-2" style={{ color: '#41912d' }}></i></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card bg-dark text-white h-100">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <i className="fas fa-truck fa-1x mb-3" style={{ color: '#87d859' }}></i>
                  <h6 className="card-title">Total Deliveries</h6>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <button type="button" className="btn btn-outline-info">70</button>
                  <div className="small text-dark"><i className="fas fa-sort-amount-down-alt mb-2" style={{ color: '#c0463e' }}></i></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card bg-dark text-white h-100">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <i className="fas fa-window-close fa-1x mb-3" style={{ color: '#e44048' }}></i>
                  <h6 className="card-title">Total Cancelled</h6>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <button type="button" className="btn btn-outline-info">05</button>
                  <div className="small text-dark"><i className="fas fa-sort-amount-up-alt mb-2" style={{ color: '#41912d' }}></i></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card bg-dark text-white h-100">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <i className="fas fa-hand-holding-usd fa-1x mb-3" style={{ color: '#d05dc6' }}></i>
                  <h6 className="card-title">Total Revenue</h6>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <button type="button" className="btn btn-outline-info">$12k</button>
                  <div className="small text-dark"><i className="fas fa-sort-amount-down-alt mb-2" style={{ color: '#c0463e' }}></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card bg-dark text-white h-100 position-relative">
            <div className="card-body d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div className="mb-3">Net Profits</div>
                <div className="progress-chart-container">
                  <ProgressChart />
                  <h6 className="card-title small" style={{ fontSize: '0.65rem' }}>Target Achieved: Outstanding Value!</h6>

                </div>
              </div>
              <h5>$ 6759.25</h5>
              <div className="d-flex flex-column justify-content-end mt-auto">
                <div className="small text-dark">
                  <i className="fas fa-sort-amount-up-alt mb-2" style={{ color: '#41912d' }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Second Row */}
      <div className="row mb-4">
      <div className="col-md-9 mb-4">
    <div className="card h-80 bg-dark text-white">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          <i className="fas fa-chart-area me-1"></i>
          Activity
        </div>
        <div className="dropdown">
          <button 
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {timePeriod}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a
                className="dropdown-item"
                href="#!"
                onClick={() => handleTimePeriodChange('Weekly')}
              >
                Weekly
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!" onClick={() => handleTimePeriodChange('Monthly')}>
                Monthly
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#!"
                onClick={() => handleTimePeriodChange('Yearly')}
              >
                Yearly
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body">
        <div style={{ position: 'relative', height: '200px' }}>
          <Bar
            data={getChartData()}
            options={{
              responsive: true,
              maintainAspectRatio: false, 
              plugins: {
                legend: {
                  position: 'top',
                  labels: {
                    color: 'white' // Legend text color
                  }
                },
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => {
                      return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    },
                  },
                  bodyColor: 'white', // Tooltip body text color
                  titleColor: 'white' // Tooltip title text color
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: 'white' // X-axis ticks color
                  },
                  grid: {
                    color: 'rgba(160, 16, 117, 0.2)' // X-axis grid color
                  }
                },
                y: {
                  ticks: {
                    color: 'white' // Y-axis ticks color
                  },
                  grid: {
                    color: 'rgba(75, 71, 71, 1)' // Y-axis grid color
                  }
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  </div>

        <div className="col-md-3 mb-0">
            <div className="card-body ">
            <div className="card bg-dark text-white mb-4">
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <p className="small text-white stretched-link" href="#"><i className="fas fa-bullseye fa-3x " style={{ color: '#9a474f' }} ></i></p>
                    <h6>Goal</h6>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
              <div className="card bg-dark text-white mb-4">
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <p className="small text-white stretched-link" href="#"><i className="fas fa-hamburger fa-3x " style={{ color: '#6181b8' }}></i></p>
                    <h6>Popular Dishes</h6>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
              <div className="card bg-dark text-white mb-4">
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <p className="small text-white stretched-link" href="#"><i className="fas fa-utensils fa-3x " style={{ color: '#63E6BE' }}></i></p>
                    <h6>Menus</h6>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
              </div>
            </div>
          </div>
        
      </div>

      {/* Third Row */}
      <div className="row">
      <div className="col-lg-9 mb-4">
          <div className="card bg-dark text-white">
            <div className="card-header">
              Recent Orders
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-dark table-hover">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Order No.</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index}>
                        <td>{order.customer}</td>
                        <td>{order.orderNo}</td>
                        <td>{order.amount}</td>
                        <td className={getStatusClass(order.status)}>{order.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      

       {/* Feedback Section */}
        <div className="col-lg-3 mb-4">
          <div className="card bg-dark text-white ">
            <div className="card-header">
              <i className="fas fa-comments me-1"></i>
              Customer Feedback
            </div>
            <div className="card-body feedback-section" tabIndex="0">
              {ratings.map((feedback, index) => (
                <div key={index} className="mb-3" tabIndex="0">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <span className="fw-bold">{feedback.name}</span>
                    </div>
                    <div className="me-2">
                      <StarRatings
                        rating={feedback.rating}
                        starRatedColor="gold"
                        starDimension="15px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name='rating'
                      />
                    </div>
                    <div className="ms-auto">
                      <span>{feedback.date}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p>{feedback.review}</p>
                  </div>
                  {index < ratings.length - 1 && <div className="review-separator" tabIndex="0"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

      
  
        
      </div>
    </div>
  );
};

export default Home;
