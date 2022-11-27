import React, { PureComponent } from "react";
import {
  HomeBannerSection,
  MainHomeBanner,
  SubHomeBanner,
  Slideul,
  Slideli,
  Radio,
  RadioController,
  RadioGroup,
  SlideItemsGroup,
  SlideControllerGroup,
} from "../style";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import pic1 from "../../../Statices/pic1.jpg";
import pic2 from "../../../Statices/pic2.jpg";
import pic3 from "../../../Statices/pic3.jpg";
import pic4 from "../../../Statices/pic4.jpg";
import pic5 from "../../../Statices/pic5.jpg";
import pic6 from "../../../Statices/pic6.jpg";
import pic7 from "../../../Statices/pic7.jpg";
import pic8 from "../../../Statices/pic8.jpg";
import pic9 from "../../../Statices/pic9.jpg";
import pic10 from "../../../Statices/pic10.jpg";
var auto;
export default class Slider extends PureComponent {
  constructor(state) {
    super(state);
    this.state = {
      radio: "R1",
      radioNumber: 5,
      autoslide: false,
    };
    this.handleradio = this.handleradio.bind(this);
    this.handle_click_left_button = this.handle_click_left_button.bind(this);
    this.handle_click_right_button = this.handle_click_right_button.bind(this);
    this.autoslideright = this.autoslideright.bind(this);
  }
  render() {
    return (
      <HomeBannerSection>
        <MainHomeBanner>
          <Slideul className="slides">
            <HiOutlineChevronLeft
              className="main-banner-button"
              onClick={this.handle_click_right_button}
            ></HiOutlineChevronLeft>
            <RadioGroup onChange={this.handleradio}>
              <Radio
                checked={this.state.radio === "R1" ? true : false}
                id="R1"
                readOnly
              ></Radio>
              <Radio
                checked={this.state.radio === "R2" ? true : false}
                id="R2"
                readOnly
              ></Radio>
              <Radio
                checked={this.state.radio === "R3" ? true : false}
                id="R3"
                readOnly
              ></Radio>
              <Radio
                checked={this.state.radio === "R4" ? true : false}
                id="R4"
                readOnly
              ></Radio>
              <Radio
                checked={this.state.radio === "R5" ? true : false}
                id="R5"
                readOnly
              ></Radio>
            </RadioGroup>
            <SlideItemsGroup>
              <Slideli
                className="slide"
                style={
                  this.state.radio === "R1"
                    ? {
                        transform: "translateX(0%)",
                        opacity: "1",
                        transition: "opacity 0.5s ease-out , transform 0s 0s",
                      }
                    : {
                        transition: "opacity 0.5s ease-out, transform 0s 0.6s",
                      }
                }
              >
                <img
                  src={pic1}
                  className="main-banner-picture"
                  alt="pic1"
                ></img>
              </Slideli>
              <Slideli
                className="slide"
                style={
                  this.state.radio === "R2"
                    ? {
                        transform: "translateX(-100%)",
                        opacity: "1",
                        transition: "opacity 0.5s ease-out , transform 0s 0s",
                      }
                    : {
                        transition: "opacity 0.5s ease-out, transform 0s 0.6s",
                      }
                }
              >
                <img
                  src={pic2}
                  className="main-banner-picture"
                  alt="pic2"
                ></img>
              </Slideli>
              <Slideli
                className="slide"
                style={
                  this.state.radio === "R3"
                    ? {
                        transform: "translateX(-200%)",
                        opacity: "1",
                        transition: "opacity 0.5s ease-out , transform 0s 0s",
                      }
                    : {
                        transition: "opacity 0.5s ease-out, transform 0s 0.6s",
                      }
                }
              >
                <img
                  src={pic3}
                  className="main-banner-picture"
                  alt="pic3"
                ></img>
              </Slideli>
              <Slideli
                className="slide"
                style={
                  this.state.radio === "R4"
                    ? {
                        transform: "translateX(-300%)",
                        opacity: "1",
                        transition: "opacity 0.5s ease-out , transform 0s 0s",
                      }
                    : {
                        transition: "opacity 0.5s ease-out, transform 0s 0.6s",
                      }
                }
              >
                <img
                  src={pic4}
                  className="main-banner-picture"
                  alt="pic4"
                ></img>
              </Slideli>
              <Slideli
                className="slide"
                style={
                  this.state.radio === "R5"
                    ? {
                        transform: "translateX(-400%)",
                        opacity: "1",
                        transition: "opacity 0.5s ease-out , transform 0s 0s",
                      }
                    : {
                        transition: "opacity 0.5s ease-out, transform 0s 0.6s",
                      }
                }
              >
                <img
                  src={pic5}
                  className="main-banner-picture"
                  alt="pic5"
                ></img>
              </Slideli>
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
        </MainHomeBanner>
        <SubHomeBanner>
          <img src={pic6} className="sub-banner-picture" alt="pic6"></img>
          <img src={pic7} className="sub-banner-picture" alt="pic7"></img>
          <img src={pic8} className="sub-banner-picture" alt="pic8"></img>
          <img src={pic9} className="sub-banner-picture" alt="pic9"></img>
          <img src={pic10} className="sub-banner-picture" alt="pic10"></img>
        </SubHomeBanner>
      </HomeBannerSection>
    );
  }
  componentDidMount() {
    console.log("載入Slider組件");
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
