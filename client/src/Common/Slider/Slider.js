import React, { PureComponent } from "react";
import axios from "axios";
import "./Additional_Class.css";
import {
  Slideul,
  Slideli,
  Radio,
  RadioController,
  RadioGroup,
  SlideItemsGroup,
  SlideControllerGroup,
} from "./style";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
var auto;
export default class Slider extends PureComponent {
  constructor(state) {
    super(state);
    this.state = {
      radio: "R1",
      PicsList: [],
      autoslide: false,
    };
    this.loadPicture = this.loadPicture.bind(this);
    this.handleradio = this.handleradio.bind(this);
    this.handle_click_left_button = this.handle_click_left_button.bind(this);
    this.handle_click_right_button = this.handle_click_right_button.bind(this);
    this.autoslideright = this.autoslideright.bind(this);
  }
  render() {
    return (
      <Slideul className="slides">
        <HiOutlineChevronLeft
          className="main-banner-button"
          onClick={this.handle_click_right_button}
        ></HiOutlineChevronLeft>
        <RadioGroup onChange={this.handleradio}>
          {this.state.PicsList[0]
            ? this.state.PicsList.map((pic, index) => {
                const id = "R" + (index + 1);
                return (
                  <Radio
                    key={id}
                    checked={this.state.radio === id ? true : false}
                    id={id}
                    readOnly
                  ></Radio>
                );
              })
            : null}
        </RadioGroup>
        <SlideItemsGroup>
          {this.state.PicsList[0]
            ? this.state.PicsList.map((pic, index) => {
                const id = "R" + (index + 1);
                const offset = index * -100 + "%";
                return (
                  <Slideli
                    className="slide"
                    key={id}
                    style={
                      this.state.radio === id
                        ? {
                            transform: `translateX(${offset})`,
                            opacity: "1",
                            transition:
                              "opacity 0.5s ease-out , transform 0s 0s",
                          }
                        : {
                            transition:
                              "opacity 0.5s ease-out, transform 0s 0.6s",
                          }
                    }
                  >
                    <img
                      src={pic}
                      className="main-banner-picture"
                      alt={pic}
                    ></img>
                  </Slideli>
                );
              })
            : null}
        </SlideItemsGroup>
        <SlideControllerGroup>
          <RadioController
            htmlFor="R1"
            className={this.state.radio === "R1" ? "checked" : ""}
          ></RadioController>
          <RadioController
            htmlFor="R2"
            className={this.state.radio === "R2" ? "checked" : ""}
          ></RadioController>
          <RadioController
            htmlFor="R3"
            className={this.state.radio === "R3" ? "checked" : ""}
          ></RadioController>
          <RadioController
            htmlFor="R4"
            className={this.state.radio === "R4" ? "checked" : ""}
          ></RadioController>
          <RadioController
            htmlFor="R5"
            className={this.state.radio === "R5" ? "checked" : ""}
          ></RadioController>
        </SlideControllerGroup>
        <HiOutlineChevronRight
          className="main-banner-button"
          onClick={this.handle_click_left_button}
        ></HiOutlineChevronRight>
      </Slideul>
    );
  }
  componentDidMount() {
    console.log("載入Slider組件");
    this.loadPicture();
    auto = setInterval(this.autoslideright, 10000);
  }
  componentDidUpdate() {
    //console.log("更新Slider組件");
    if (this.state.autoslide === false) {
      //!類似hook概念
      clearInterval(auto);
      auto = setInterval(this.autoslideright, 10000);
    }
  }
  componentWillUnmount() {
    console.log("卸載Slider組件");
    clearInterval(auto);
  }
  loadPicture() {
    axios
      .get(`http://localhost:5000/sliderPic`)
      .then((response) => {
        this.setState({
          PicsList: response.data[0].pic,
        });
        console.log(this.state.PicsList);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleradio(e) {
    let id = e.target.id;
    this.setState({
      radio: id,
    });
  }
  handle_click_left_button() {
    const currentRadio = this.state.radio.slice(1) % 5;
    if (currentRadio === "0") {
      this.setState({
        radio: "R1",
      });
    } else {
      this.setState({ radio: "R" + (currentRadio + 1) });
    }
    this.setState({ autoslide: false });
  }
  handle_click_right_button() {
    const currentRadio = this.state.radio.slice(1);
    if (currentRadio === "1") {
      this.setState({ radio: "R5" });
    } else {
      this.setState({ radio: "R" + (currentRadio - 1) });
    }
    this.setState({ autoslide: false });
  }
  autoslideright() {
    const currentRadio = this.state.radio.slice(1) % 5;
    if (currentRadio === "0") {
      this.setState({ radio: "R1" });
    } else {
      this.setState({ radio: "R" + (currentRadio + 1) });
    }
    this.setState({ autoslide: true });
  }
}