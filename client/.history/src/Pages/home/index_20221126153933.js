import React, { Component } from "react";
import { ReactComponent as FiveG } from "../../Statices/5g.svg";
import { ReactComponent as Bestphoto } from "../../Statices/bestphoto.svg";
import { ReactComponent as Bestcp } from "../../Statices/bestcp.svg";
import { ReactComponent as Apple } from "../../Statices/apple.svg";
import { ReactComponent as Asus } from "../../Statices/asus.svg";
import { ReactComponent as Samsung } from "../../Statices/samsung.svg";
import { ReactComponent as Mi } from "../../Statices/mi.svg";
import { ReactComponent as Google } from "../../Statices/google.svg";
import { ReactComponent as Oppo } from "../../Statices/oppo.svg";
import { Link } from "react-router-dom";
import JumpButton from "./component/JumpButton";
import Slider from "./component/Slider";
import axios from "axios";
import Header from "../../Common/Header";
import { connect } from "react-redux"; //TODO:使header組件連接store
import { HiFire } from "react-icons/hi";
import { BsChevronDoubleDown } from "react-icons/bs";
import {
  HomeWrapper,
  MainInfoSection,
  MainCommoditySection,
  MainInfoTitle,
  MainInfoItemWrap,
  Commodity,
  MainInfoItem,
  CommodityTitle,
  CommodityInfo,
  Commodityprize,
} from "./style";
import "./Additional_Class.css";
import { Fragment } from "react";
var local_commoditylist = [];
var list_of_loaded_phonebrand = [];
var phonebrand;
var onclick_searchbrand = false;
var Ref_list = [];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
    };
    this.searchphone = this.searchphone.bind(this);
  }
  render() {
    if (this.props.commoditylist[0] !== undefined) {
      local_commoditylist = [
        ...local_commoditylist,
        ...this.props.commoditylist,
      ];
    }
    return (
      <Fragment>
        <Header></Header>
        <HomeWrapper>
          <Slider></Slider>
          <MainInfoSection>
            <MainInfoTitle>
              <h1>熱門品牌</h1>
              <HiFire></HiFire>
            </MainInfoTitle>
            <MainInfoItemWrap>
              <MainInfoItem id="apple" onClick={this.searchphone}>
                Apple
              </MainInfoItem>
              <MainInfoItem id="asus" onClick={this.searchphone}>
                Asus
              </MainInfoItem>
              <MainInfoItem id="samsung" onClick={this.searchphone}>
                Samsung
              </MainInfoItem>
              <MainInfoItem id="mi" onClick={this.searchphone}>
                小米
              </MainInfoItem>
              <MainInfoItem id="google" onClick={this.searchphone}>
                Google
              </MainInfoItem>
              <MainInfoItem id="oppo" onClick={this.searchphone}>
                OPPO
              </MainInfoItem>
              <MainInfoItem id="vivo" onClick={this.searchphone}>
                VIVO
              </MainInfoItem>
              <MainInfoItem id="lg" onClick={this.searchphone}>
                LG
              </MainInfoItem>
              <MainInfoItem id="sony" onClick={this.searchphone}>
                SONY
              </MainInfoItem>
            </MainInfoItemWrap>
          </MainInfoSection>
          <MainCommoditySection>
            {local_commoditylist.map((commodity) => {
              if (commodity.brand) {
                var loaded = false;
                list_of_loaded_phonebrand.forEach((element) => {
                  if (element === commodity.brand) {
                    loaded = true;
                  }
                });
                if (!loaded) {
                  list_of_loaded_phonebrand.push(commodity.brand);
                  //console.log(list_of_loaded_phonebrand);
                }
                return (
                  <Commodity
                    className="CommodityBrand"
                    key={commodity.brand}
                    id={commodity.brand}
                    ref={(ref) => {
                      if (ref !== null) {
                        const length = Ref_list.length;
                        var loaded = false;
                        for (let i = 0; i < length; i++) {
                          if (Ref_list[i].id === ref.id) {
                            loaded = true;
                            break;
                          }
                        }
                        if (!loaded) {
                          Ref_list.push(ref);
                        }
                      } else if (ref !== null || Ref_list.length === 0) {
                        Ref_list.push(ref);
                      }
                    }}
                  >
                    <CommodityTitle>
                      {commodity.brand === "apple" ? (
                        <Apple style={{ width: "200px" }}></Apple>
                      ) : null}
                      {commodity.brand === "asus" ? (
                        <Asus style={{ width: "200px" }}></Asus>
                      ) : null}
                      {commodity.brand === "samsung" ? (
                        <Samsung style={{ width: "200px" }}></Samsung>
                      ) : null}
                      {commodity.brand === "mi" ? (
                        <Mi
                          style={{
                            width: "200px",
                            height: "100px",
                            marginTop: "10px",
                          }}
                        ></Mi>
                      ) : null}
                      {commodity.brand === "google" ? (
                        <Google
                          style={{ width: "200px", marginTop: "20px" }}
                        ></Google>
                      ) : null}
                      {commodity.brand === "oppo" ? (
                        <Oppo
                          style={{ width: "200px", marginTop: "10px" }}
                        ></Oppo>
                      ) : null}
                    </CommodityTitle>
                    <CommodityInfo></CommodityInfo>
                  </Commodity>
                );
              }
              return (
                <Commodity key={commodity.producttitle}>
                  <CommodityTitle>
                    <FiveG className="producttitleicon"></FiveG>
                    <span className="producttitle">
                      {commodity.producttitle}
                    </span>
                  </CommodityTitle>
                  <CommodityInfo>
                    {commodity.productinfoicon === "bestcp" ? (
                      <Bestcp style={{ width: "80px" }}></Bestcp>
                    ) : null}
                    {commodity.productinfoicon === "bestphoto" ? (
                      <Bestphoto style={{ width: "80px" }}></Bestphoto>
                    ) : null}
                    <Commodityprize>
                      <span className="market-price">
                        市價:{commodity.marketprice}
                      </span>
                      <span className="special-price">
                        門市價:{commodity.specialprice}
                      </span>
                    </Commodityprize>
                    <Link to={`/detail/${commodity.productseries}`}>
                      <button className="productbotton">詳情</button>
                    </Link>
                  </CommodityInfo>
                </Commodity>
              );
            })}
            {local_commoditylist[0] !== undefined &&
            this.props.page < this.props.maxpage ? (
              <BsChevronDoubleDown
                onClick={() => this.props.load_more_commodity(this.props.page)}
                title="加載更多"
                className="BsFillCaretDownFill"
              ></BsChevronDoubleDown>
            ) : null}
            <JumpButton></JumpButton>
          </MainCommoditySection>
        </HomeWrapper>
      </Fragment>
    );
  }
  componentDidMount() {
    console.log("載入HOME組件");
    this.props.firstloaddata();
  }
  componentDidUpdate() {
    console.log("更新HOME組件");
    if (this.props.window_resize) {
      //!類似hook概念 每當載入新資料 完成更新頁面時 元件自動呼叫componentDidUpdate()生命週期函數 利用這個函數執行給條件 可以再取得想要的新state狀態
      this.props.resizeWindox();
    }
    if (this.props.window_resize && onclick_searchbrand) {
      //!類似hook概念 每當載入新資料 完成更新頁面時 元件自動呼叫componentDidUpdate()生命週期函數 利用這個函數執行給條件 可以再取得想要的新state狀態
      onclick_searchbrand = false;
      this.props.resizeWindox();
      this.searchphone();
    }
  }
  componentWillUnmount() {
    console.log("卸載HOME組件");
    this.props.reset_Homecomponent();
  }
  searchphone(e) {
    var loaded = false;
    if (e) {
      phonebrand = e.target.id;
      console.log(phonebrand);
      for (let i = 0; i < list_of_loaded_phonebrand.length; i++) {
        if (list_of_loaded_phonebrand[i] === phonebrand) {
          loaded = true;
          console.log("此品牌已經載入");
          break;
        }
      }
      if (loaded) {
        Ref_list.forEach((ref) => {
          if (ref.id === phonebrand) {
            ref.scrollIntoView({ behavior: "smooth" });
          }
        });
      } else if (!loaded) {
        console.log("載入中");
        this.props.load_more_commodity(this.props.page);
      }
    } else {
      console.log("由生命週期函數再次確認是否載入");
      for (let i = 0; i < list_of_loaded_phonebrand.length; i++) {
        if (list_of_loaded_phonebrand[i] === phonebrand) {
          loaded = true;
          console.log("檢查到此品牌已經載入");
          break;
        }
      }
      if (loaded) {
        Ref_list.forEach((ref) => {
          if (ref.id === phonebrand) {
            ref.scrollIntoView({ behavior: "smooth" });
          }
        });
      } else if (!loaded) {
        console.log("再次載入中");
        this.props.load_more_commodity(this.props.page);
      }
    }
    onclick_searchbrand = true;
  }
}
const mapStateToProps = (state) => {
  return {
    radio: state.homepage.radio,
    autoslide: state.homepage.autoslide,
    commoditylist: state.homepage.commoditylist,
    page: state.homepage.page,
    maxpage: state.homepage.maxpage,
    window_resize: state.homepage.window_resize,
    height: state.homepage.height,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    firstloaddata() {
      const action = function (dispatch) {
        //!因為thunk讓我可以action可以是function型態
        axios
          .get(`http://localhost:8000/commodity`)
          .then((res) =>
            dispatch({
              type: "LOAD_COMMODITY_SUCCESS",
              data: res.data,
            })
          )
          .catch(() =>
            dispatch({
              type: "LOAD_COMMODITY_FAILURE",
            })
          );
      };
      dispatch(action);
    },
    load_more_commodity(page) {
      // console.log("資料庫資料載入成功");
      const action = function (dispatch) {
        //!因為thunk讓我可以action可以是function型態
        axios
          .get(`http://localhost:8000/commodity${page}`)
          .then((res) =>
            dispatch({
              type: "load_more_commodity",
              data: res.data,
              window_resize: true,
            })
          )
          .catch(() => console.log("資料庫資料載入失敗"));
      };
      dispatch(action);
    },
    resizeWindox() {
      const new_height = document.documentElement.scrollHeight;
      //console.log(new_height);
      const action = {
        type: "resizeWindow",
        new_height: new_height,
        window_resize: false,
      };
      dispatch(action);
    },
    reset_Homecomponent() {
      local_commoditylist = [];
      //console.log(local_commoditylist);
      const action = {
        type: "reset_Homecomponent",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// json-server --watch db.json --port 8000
