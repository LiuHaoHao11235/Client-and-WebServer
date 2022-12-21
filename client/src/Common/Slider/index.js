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
          {this.state.PicsList[0] && this.props.checkbox
            ? this.state.PicsList.map((pic, index) => {
                const id = "R" + (index + 1);
                return (
                  <RadioController
                    key={id}
                    htmlFor={id}
                    className={this.state.radio === id ? "checked" : ""}
                  ></RadioController>
                );
              })
            : null}
        </SlideControllerGroup>
        <HiOutlineChevronRight
          className="main-banner-button"
          onClick={this.handle_click_left_button}
        ></HiOutlineChevronRight>
      </Slideul>
    );
  }
  componentDidMount() {
    // console.log("載入Slider組件");
    if (this.props.url) {
      this.loadPicture();
    }
    if (this.props.picture) {
      this.setState({
        PicsList: this.props.picture,
      });
    }
    if (this.props.auto) {
      auto = setInterval(this.autoslideright, this.props.auto || 10000);
    } else if (!this.props.auto) {
      auto = null;
    }
  }
  componentDidUpdate() {
    // console.log("更新Slider組件");
    if (this.state.autoslide === false) {
      //!類似hook概念
      if (auto) {
        clearInterval(auto);
        auto = setInterval(this.autoslideright, this.props.auto || 10000);
      }
    }
    if (this.props.picture && this.props.picture !== this.state.PicsList) {
      this.setState({
        PicsList: this.props.picture,
      });
    }
  }
  componentWillUnmount() {
    // console.log("卸載Slider組件");
    clearInterval(auto);
  }
  loadPicture() {
    axios
      .get(this.props.url)
      .then((response) => {
        this.setState({
          PicsList: response.data[0].pic,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleradio(e) {
    let id = e.target.id;
    this.setState({
      radio: id,
      autoslide: false,
    });
  }
  handle_click_left_button() {
    const currentRadio = this.state.radio.slice(1) % this.state.PicsList.length;
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
      this.setState({ radio: "R" + this.state.PicsList.length });
    } else {
      this.setState({ radio: "R" + (currentRadio - 1) });
    }
    this.setState({ autoslide: false });
  }
  autoslideright() {
    const currentRadio = this.state.radio.slice(1) % this.state.PicsList.length;
    if (currentRadio === "0") {
      this.setState({ radio: "R1" });
    } else {
      this.setState({ radio: "R" + (currentRadio + 1) });
    }
    this.setState({ autoslide: true });
  }
}
