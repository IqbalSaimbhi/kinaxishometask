import React from "react";
import styles from "./Home.module.css";
import {
  VictorySharedEvents,
  VictoryLabel,
  VictoryBar,
  VictoryChart,
  VictoryPie
} from "victory";
import { connect } from "react-redux";

const data1 = [
  { product: 1, sale: 3000 },
  { product: 2, sale: 6500 },
  { product: 3, sale: 4250 },
  { product: 4, sale: 3000 }
];
const data2 = [
  { product: 1, sale: 10 },
  { product: 2, sale: 40 },
  { product: 3, sale: 30 },
  { product: 4, sale: 20 }
];

const Home = () => {
  return (
    <header className={styles.singleItem}>
      <h1 data-testid="sales-heading" className={styles.singleItem}>Sales Overview</h1>
      <svg viewBox="0 0 900 300">
        <VictorySharedEvents
          events={[
            {
              childName: ["pie", "bar"],
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      childName: ["pie", "bar"],
                      mutation: props => {
                        return {
                          style: Object.assign({}, props.style, {
                            fill: "red"
                          })
                        };
                      }
                    }
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      childName: ["pie", "bar"],
                      mutation: () => {
                        return null;
                      }
                    }
                  ];
                }
              }
            }
          ]}
        >
          <g transform={"translate(450, 10)"}>
            <VictoryBar
              name="bar"
              width={300}
              standalone={false}
              style={{
                data: { width: 20, fill: "#18456C" },
                background: { fill: "pink" },
                labels: { fontSize: 10 }
              }}
              data={data1}
              x="product"
              y="sale"
              labels={[
                "Personal Care",
                "Electronics",
                "Home Decore",
                "Clothes"
              ]}
              labelComponent={<VictoryLabel y={290} />}
            />
          </g>
          <g transform={"translate(100, -75)"}>
            <VictoryPie
              name="pie"
              width={250}
              standalone={false}
              style={{ labels: { fontSize: 10, padding: 10 } }}
              data={data2}
              x="product"
              y="sale"
              labels={[
                "Personal Care",
                "Electronics",
                "Home Decore",
                "Clothes"
              ]}
            />
          </g>
        </VictorySharedEvents>
      </svg>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    current: state.shop.currentItem
  };
};

export default connect(mapStateToProps)(Home);
