import React from "react";
import "./styles.css";
import data from "./Components/data.json";
import RestaurantDetails from "./Components/RestaurantDetails";
import { Pagination } from "./Components/Pagination";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterRating: 0,
      paymentMethod: "All",
      sortMethod: null,
      currentPage: 1
    };
  }
  handleRating = (rating) => {
    this.setState({
      filterRating: rating
    });
  };
  handlePayment = (payment) => {
    this.setState({
      paymentMethod: payment
    });
  };
  handleSort = (order) => {
    this.setState({
      sortMethod: order
    });
  };
  handlePage = (page) => {
    this.setState({
      currentPage: page
    });
  };
  render() {
    const perPage = 5;
    const { filterRating, paymentMethod, sortMethod, currentPage } = this.state;
    const totalPages = Math.ceil(data.length / perPage);
    return (
      <div>
        <div className="btns">
          <h1 className="header">Restaurant Details</h1>
          <div>
            Ratings:
            {[4, 3, 2, 1].map((rating) => (
              <button
                style={{ margin: "2px" }}
                onClick={() => this.handleRating(rating)}
              >
                {rating}
              </button>
            ))}
          </div>
          <div>
            Payment methods:
            {["Cash", "Card", "All"].map((method) => (
              <button
                style={{ margin: "2px" }}
                onClick={() => this.handlePayment(method)}
              >
                {method}
              </button>
            ))}
          </div>
          <div>
            Cost:
            {["High to Low", "Low to High"].map((order) => (
              <button
                style={{ margin: "2px", marginBottom: "15px" }}
                onClick={() => this.handleSort(order)}
              >
                {order}
              </button>
            ))}
          </div>
        </div>

        {data
          .filter(({ payment_methods }) => {
            const { cash, card } = payment_methods;
            let paymentCondition = true;
            if (paymentMethod === "Cash") {
              paymentCondition = cash ? true : false;
            } else if (paymentMethod === "Card") {
              paymentCondition = card ? true : false;
            }
            return paymentCondition;
          })
          .filter(({ rating }) => {
            return rating >= filterRating;
          })
          .sort((a, b) => {
            if (sortMethod === null) {
              return 0;
            }
            if (sortMethod === "Low to High") {
              return a.costForTwo - b.costForTwo;
            }
            if (sortMethod === "High to Low") {
              return b.costForTwo - a.costForTwo;
            }
          })
          .filter(
            (_, index) =>
              index >= (currentPage - 1) * perPage &&
              index < currentPage * perPage
          )
          .map((item) => (
            <RestaurantDetails data={item} key={item.id} />
          ))}
        <div className="btns">
          <Pagination
            handlePage={this.handlePage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    );
  }
}
export default App;
