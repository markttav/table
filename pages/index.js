import {
  Table,
  Col,
  Row,
  Typography,
  AutoComplete,
  Button,
  Select,
} from "antd";
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import "../components/api/api";
import { update } from "../components/api/api";
import styles from "../styles/index.module.css";

const columns = [
  {
    title: "№",
    dataIndex: "number",
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.number - b.number,
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Adress",
    dataIndex: "adress",
  },
  {
    title: "Pet",
    dataIndex: "pet",
  },
];

class App extends React.Component {
  state = {
    data: null,
    loading: false,
    pagination: {
      current: 1,
      pageSize: 5,
    },
    filtered: null,
    nameInputValue: "",
    numberInputValue: "",
    ageInputValue: "",
  };

  reset = () => {
    this.setState({
      filtered: this.state.data,
      nameInputValue: "",
      numberInputValue: "",
      ageInputValue: "",
    });
  };

  fetchFunc = (pagination = {}) => {
    this.setState({ loading: true });
    update({ url: "http://localhost:3000/data" }).then((response) => {
      this.setState({
        loading: false,
        data: response,
        pagination: {
          ...pagination,
        },
        filtered: response,
      });
    });
  };

  componentDidMount = () => {
    const { pagination } = this.state;
    this.fetchFunc({ pagination });
  };

  handlerSelect = (age) => {
    switch (age) {
      case "30": {
        return this.setState({
          filtered: this.state.data.filter((person) => person.age <= 30),
          ageInputValue: age,
          nameInputValue: "",
          numberInputValue: "",
        });
      }
      case "30-45": {
        return this.setState({
          filtered: this.state.data.filter((person) => 30 < person.age <= 45),
          ageInputValue: age,
          nameInputValue: "",
          numberInputValue: "",
        });
      }
      case "45": {
        return this.setState({
          filtered: this.state.data.filter((person) => person.age > 45),
          ageInputValue: age,
          nameInputValue: "",
          numberInputValue: "",
        });
      }
    }
  };

  render() {
    const { Title } = Typography;

    return (
      <>
        <div className={styles.App}>
          <div>
            <Table
              bordered={true}
              className={styles.antTable}
              columns={columns}
              dataSource={this.state.filtered}
              loading={this.state.loading}
            />
          </div>

          {this.state.data && (
            <div className={styles.filter}>
              <Title level={4}>FILTER</Title>
              <Row className={styles.filters}>
                <Typography>Name</Typography>
                <AutoComplete
                  placeholder={"Pick person's name"}
                  value={this.state.nameInputValue}
                  dataSource={this.state.data.map((person) => person.name)}
                  onChange={(nameSearch) =>
                    this.setState({
                      filtered: this.state.data.filter((person) =>
                        person.name.includes(nameSearch)
                      ),
                      nameInputValue: nameSearch,
                      ageInputValue: "",
                      numberInputValue: "",
                    })
                  }
                />
              </Row>

              <Row className={styles.filters}>
                <Typography>Number</Typography>
                <AutoComplete
                  placeholder={"Pick person's number"}
                  value={this.state.numberInputValue}
                  dataSource={this.state.data.map((person) =>
                    person.number.toString()
                  )}
                  onChange={(number) =>
                    this.setState({
                      filtered: this.state.data.filter(
                        (person) => person.number == number
                      ),
                      numberInputValue: number,
                      ageInputValue: "",
                      nameInputValue: "",
                    })
                  }
                />
              </Row>

              <Row className={styles.filters}>
                <Typography>Age</Typography>
                <Select
                  value={this.state.ageInputValue}
                  onChange={(e) => {
                    this.handlerSelect(e);
                  }}
                >
                  <Option value={"30"}> Up to 30 </Option>
                  <Option value={"30-45"}> 30-45 </Option>
                  <Option value={"45"}> 45-whatever </Option>
                </Select>
              </Row>
              <Button
                onClick={() => {
                  this.reset();
                }}
              >
                Reset
              </Button>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default App;
