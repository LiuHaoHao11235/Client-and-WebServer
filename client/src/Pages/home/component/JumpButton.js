import React, { Component, Fragment } from "react";
import {
  BsChevronBarExpand,
  BsArrowUpSquareFill,
  BsArrowDownSquareFill,
  BsChevronBarContract,
} from "react-icons/bs";
import { JumpTo } from "../style";
import { connect } from "react-redux"; //TODO:使header組件連接store
class JumpButton extends Component {
  constructor(props) {
    super(props);
    this.state = { displayTopBackIcon: false };
    this.displayTopBack = this.displayTopBack.bind(this);
    this.jumpToButtom = this.jumpToButtom.bind(this);
    this.jumpTotop = this.jumpTotop.bind(this);
  }
  render() {
    return (
      <Fragment>
        <BsArrowUpSquareFill
          onClick={this.jumpTotop}
          className={
            this.state.displayTopBackIcon
              ? "BsChevronCompactUp"
              : "BsChevronCompactUpHide"
          }
        ></BsArrowUpSquareFill>
        <BsArrowDownSquareFill
          onClick={this.jumpToButtom}
          className={
            this.state.displayTopBackIcon
              ? "BsChevronCompactDown"
              : "BsChevronCompactDownHide"
          }
        ></BsArrowDownSquareFill>
        <JumpTo className="BackToTop" onClick={this.displayTopBack}>
          <BsChevronBarExpand
            className={this.state.displayTopBackIcon ? "display" : "hide"}
          ></BsChevronBarExpand>
          <BsChevronBarContract
            className={!this.state.displayTopBackIcon ? "display2" : "hide2"}
          ></BsChevronBarContract>
        </JumpTo>
      </Fragment>
    );
  }
  displayTopBack() {
    // console.log(this.state.displayTopBackIcon);
    this.setState((prevState) => {
      return {
        displayTopBackIcon: !prevState.displayTopBackIcon,
      };
    });
  }
  jumpTotop() {
    console.log(this.props.height);
    window.scrollTo(0, 0);
  }
  jumpToButtom() {
    // console.log(this.props.height);
    window.scrollTo(0, this.props.height);
  }
  componentDidUpdate() {
    //console.log("更新jump組件");
  }
}
const mapStateToProps = (state) => {
  return {
    height: state.homepage.height,
  };
};
export default connect(mapStateToProps)(JumpButton);
