import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Additional_Class.css";
import { connect } from "react-redux"; //TODO:使header組件連接store
import {
  BsFillArchiveFill,
  BsSearch,
  //BsFillStarFill,
  BsTrophyFill,
  BsCoin,
  BsPhone,
  BsFillMegaphoneFill,
  BsInfoCircle,
} from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import ShowSearchInfo from "./component/SearchInfo";
import {
  Headersection,
  HeaderWrapper,
  Logo,
  Nav,
  Navitem,
  Searchsection,
  NavUser,
  Navitemaddtional,
  Additionlink,
} from "./style.js";
class Header extends Component {
  constructor(state) {
    super(state);
    this.state = {
      isfocus: false,
      star: "0",
      leaveinfopage: true,
      overwhichnavitem: "",
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handlemouseenter = this.handlemouseenter.bind(this);
    this.navitemMouseOver = this.navitemMouseOver.bind(this);
    this.navitemMouseOut = this.navitemMouseOut.bind(this);
    this.handlemouseleave = this.handlemouseleave.bind(this);
  }
  render() {
    return (
      <Headersection>
        <HeaderWrapper>
          <Link style={{ display: "inline" }} to="/">
            <Logo />
          </Link>
          <Nav>
            <Navitem
              id="1"
              onMouseOver={this.navitemMouseOver}
              onMouseOut={this.navitemMouseOut}
            >
              <BsFillArchiveFill className="Navicon-box"></BsFillArchiveFill>
              所有商品
              <Navitemaddtional
                id="1"
                className={
                  this.state.overwhichnavitem === "1" ? "overnavitem" : ""
                }
              >
                <Additionlink id="1">手機</Additionlink>
                <Additionlink id="1">筆電</Additionlink>
                <Additionlink id="1">平板電腦</Additionlink>
                <Additionlink id="1">周邊設備</Additionlink>
              </Navitemaddtional>
            </Navitem>
            <Navitem
              id="2"
              onMouseOver={this.navitemMouseOver}
              onMouseOut={this.navitemMouseOut}
            >
              <BsTrophyFill className="Navicon-rank"></BsTrophyFill>
              暢銷商品
              <Navitemaddtional
                id="2"
                className={
                  this.state.overwhichnavitem === "2" ? "overnavitem" : ""
                }
              >
                <Additionlink id="2">暢銷手機排行</Additionlink>
                <Additionlink id="2">暢銷筆電排行</Additionlink>
                <Additionlink id="2">暢銷平板排行</Additionlink>
                <Additionlink id="2">暢銷電腦周邊排行</Additionlink>
              </Navitemaddtional>
            </Navitem>
            <Navitem
              id="3"
              onMouseOver={this.navitemMouseOver}
              onMouseOut={this.navitemMouseOut}
            >
              <BsCoin className="Navicon-coin"></BsCoin>
              價格總覽
              <Navitemaddtional
                id="3"
                className={
                  this.state.overwhichnavitem === "3" ? "overnavitem" : ""
                }
              >
                <Additionlink id="3">價格3萬以上</Additionlink>
                <Additionlink id="3">價格3萬以下</Additionlink>
                <Additionlink id="3">價格2萬以下</Additionlink>
                <Additionlink id="3">價格1萬以下</Additionlink>
              </Navitemaddtional>
            </Navitem>
            <Navitem
              id="4"
              onMouseOver={this.navitemMouseOver}
              onMouseOut={this.navitemMouseOut}
            >
              <BsPhone className="Navicon-phone"></BsPhone>
              規格比較
              <Navitemaddtional
                id="4"
                className={
                  this.state.overwhichnavitem === "4" ? "overnavitem" : ""
                }
              >
                <Additionlink id="4">手機</Additionlink>
                <Additionlink id="4">筆電</Additionlink>
                <Additionlink id="4">電腦硬體</Additionlink>
              </Navitemaddtional>
            </Navitem>
            <Navitem
              id="5"
              onMouseOver={this.navitemMouseOver}
              onMouseOut={this.navitemMouseOut}
            >
              <BsFillMegaphoneFill className="Navicon-notion"></BsFillMegaphoneFill>
              最新優惠
              <Navitemaddtional
                id="5"
                className={
                  this.state.overwhichnavitem === "5" ? "overnavitem" : ""
                }
              >
                <Additionlink id="5">優惠打折商品</Additionlink>
                <Additionlink id="5">滿額送好康</Additionlink>
              </Navitemaddtional>
            </Navitem>
            <Navitem>
              <BsInfoCircle className="Navicon-about"></BsInfoCircle>
              關於我們
              <Navitemaddtional>
                <Additionlink>asd</Additionlink>
                <Additionlink>asd</Additionlink>
                <Additionlink>asd</Additionlink>
              </Navitemaddtional>
            </Navitem>
            <Searchsection onMouseOut={this.handlemouseleave}>
              <CSSTransition
                in={this.state.isfocus}
                timeout={500}
                classNames="slide"
              >
                <input //!這裡input不使用style components是因為 他不支援label for 使元件互相綁定
                  id="DES"
                  className={
                    this.state.isfocus === false &&
                    this.state.leaveinfopage === true
                      ? "NavSearch"
                      : "NavSearch_onfocus"
                  }
                  placeholder="搜尋商品"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                ></input>
              </CSSTransition>
              <label htmlFor="DES" className="label">
                <CSSTransition
                  in={this.state.isfocus}
                  timeout={500}
                  classNames="slide"
                >
                  <BsSearch
                    className={
                      this.state.isfocus === false &&
                      this.state.leaveinfopage === true
                        ? "search"
                        : "onfocusSearch"
                    }
                  ></BsSearch>
                </CSSTransition>
                <ShowSearchInfo
                  isfocus={this.state.isfocus}
                  reload={
                    this.props.phonetype === "iphone" //檢查當前狀態為哪種類型手機 將reload方法綁定 reload另種類型的手機
                      ? this.props.handle_reload_android
                      : this.props.handle_reload_iphone
                  } //TODO:將方法以參數方式傳下去 不然無法裡面的component使用外面的function
                  handlemouseenter={this.handlemouseenter}
                  mouseleave={this.handlemouseleave} //!必須監測滑鼠是否離開searchinfo 區域 雖然是綁定的 但是每次點擊 綁定物件 而非本input時 都會產生onblur 會將isfocus狀態改掉 切掉searchinfo顯示 根本無法產生點擊的連結 可以用console.log檢查
                  leaveinfopage={this.state.leaveinfopage}
                  phonedatafromapi={this.props.phonedatafromapi}
                  phonetype={this.props.phonetype}
                ></ShowSearchInfo>
              </label>
            </Searchsection>
            {/* <Stargrouper>
            <BsFillStarFill
              id="1"
              className={this.state.star >= 1 ? "StarLightUp" : "StarLightDown"}
              onClick={this.state.handlestarclick}
            ></BsFillStarFill>
            <BsFillStarFill
              id="2"
              className={this.state.star >= 2 ? "StarLightUp" : "StarLightDown"}
              onClick={this.state.handlestarclick}
            ></BsFillStarFill>
            <BsFillStarFill
              id="3"
              className={this.state.star >= 3 ? "StarLightUp" : "StarLightDown"}
              onClick={this.state.handlestarclick}
            ></BsFillStarFill>
            <BsFillStarFill
              id="4"
              className={this.state.star >= 4 ? "StarLightUp" : "StarLightDown"}
              onClick={this.state.handlestarclick}
            ></BsFillStarFill>
            <BsFillStarFill
              id="5"
              className={this.state.star >= 5 ? "StarLightUp" : "StarLightDown"}
              onClick={this.state.handlestarclick}
            ></BsFillStarFill>
          </Stargrouper> */}
            <Link to={"login"}>
              <NavUser>
                <Navitem className="user_title">
                  <HiUserCircle className="usericon"></HiUserCircle>
                  會員中心
                </Navitem>
              </NavUser>
            </Link>
          </Nav>
        </HeaderWrapper>
      </Headersection>
    );
  }
  componentDidMount() {
    //獲取一次ajax請求 最好放在這個生命週期函數中 也可以使用componentwillMount()但是在react native或是在其他高級技術上會有錯誤
    this.props.firstloaddata();
  }
  handleFocus() {
    this.setState({
      isfocus: true,
      leaveinfopage: false,
    });
  }
  handleBlur() {
    if (this.state.leaveinfopage === false) {
      this.setState({
        isfocus: false,
        leaveinfopage: false,
      });
    } else {
      this.setState({
        isfocus: false,
        leaveinfopage: true,
      });
    }
  }
  handlemouseenter() {
    this.setState({
      leaveinfopage: false,
    });
  }
  handlemouseleave() {
    this.setState({
      leaveinfopage: true,
    });
  }
  navitemMouseOver(e) {
    const overwhichnavitem = e.target.id;
    this.setState({
      overwhichnavitem: overwhichnavitem,
    });
  }
  navitemMouseOut() {
    this.setState({
      overwhichnavitem: "",
    });
  }
}

const mapStateTostate = (state) => {
  return {
    phonetype: state.header.phonetype,
    phonedatafromapi: state.header.phonedatafromapi,
  };
};
const mapDispatchTostate = (dispatch) => {
  return {
    // handlestarclick(e) {
    //   if (e.target.nearestViewportElement) {
    //     //console.log("星星本身");
    //     //?有兩層e.target.nearestViewportElement為星星本身 e.target為星星外邊避免報錯或是點了星星的邊角沒反應
    //     const star = parseInt(e.target.nearestViewportElement.id);
    //     const action = {
    //       type: "click_star",
    //       star: star,
    //     };
    //     dispatch(action);
    //   } else {
    //     //console.log("星星邊邊");
    //     const star = parseInt(e.target.id);
    //     const action = {
    //       type: "click_star",
    //       star: star,
    //     };
    //     dispatch(action);
    //   }
    // },
    handle_reload_android() {
      const action = {
        type: "reload_phone",
        phonetype: "android",
      };
      dispatch(action);
    },
    handle_reload_iphone() {
      const action = {
        type: "reload_phone",
        phonetype: "iphone",
      };
      dispatch(action);
    },
    firstloaddata() {
      const action = function (dispatch) {
        //!因為thunk讓我可以action可以是function型態
        axios
          .get(`http://localhost:8000/TOP_phones`)
          .then((res) =>
            dispatch({
              type: "LOAD_POSTS_SUCCESS",
              data: res.data,
            })
          )
          .catch(() =>
            dispatch({
              type: "LOAD_POSTS_FAILURE",
            })
          );
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateTostate, mapDispatchTostate)(Header); //TODO:輸出並連接取得在app這個最上層組件中的store 使用map過來的 store state 和使用map過來的 store dispatch方法
// json-server --watch db.json --port 8000
