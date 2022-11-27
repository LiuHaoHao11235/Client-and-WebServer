import { TfiReload } from "react-icons/tfi";
import React, { Component } from "react";
import { DiApple, DiAndroid } from "react-icons/di";
import { Searchinfo, SearchinfoItem, Reloadsection } from "../style.js";
export default class ShowSearchInfo extends Component {
  render() {
    if (this.props.isfocus === false && this.props.leaveinfopage === true) {
      // *console.log(this.state.isfocus); 檢查狀態
      // *console.log(this.state.leaveinfopage);
      return null;
    } else if (
      this.props.phonetype === "iphone" &&
      this.props.phonedatafromapi[0]
    ) {
      // *console.log(this.state.isfocus);
      // *console.log(this.state.leaveinfopage);
      return (
        <Searchinfo
          onMouseOver={this.props.handlemouseenter}
          onMouseOut={this.props.mouseleave}
        >
          <Reloadsection>
            <h1 className="searchinfoTitle">熱門機型</h1>
            <DiApple className="appleicon"></DiApple>
            <TfiReload
              className={"iphone"}
              onClick={this.props.reload}
            ></TfiReload>
            <p className="reloadword">切換安卓機型</p>
          </Reloadsection>
          <SearchinfoItem>
            {this.props.phonedatafromapi[0].title}
          </SearchinfoItem>
          <SearchinfoItem>
            {this.props.phonedatafromapi[1].title}
          </SearchinfoItem>
          <SearchinfoItem>
            {this.props.phonedatafromapi[2].title}
          </SearchinfoItem>
          <SearchinfoItem>
            {this.props.phonedatafromapi[3].title}
          </SearchinfoItem>
          <SearchinfoItem>
            {this.props.phonedatafromapi[4].title}
          </SearchinfoItem>
        </Searchinfo>
      );
    } else if (
      this.props.phonetype === "android" &&
      this.props.phonedatafromapi[0]
    ) {
      return (
        <Searchinfo
          onMouseOver={this.props.handlemouseenter}
          onMouseOut={this.props.mouseleave}
        >
          <Reloadsection>
            <h1 className="searchinfoTitle">熱門機型 </h1>
            <DiAndroid className="androidicon"></DiAndroid>
            <TfiReload
              className={"android"}
              onClick={this.props.reload}
            ></TfiReload>
            <p className="reloadword">切換蘋果機型</p>
          </Reloadsection>
          <SearchinfoItem>
            {this.props.phonedatafromapi[5].title}
          </SearchinfoItem>
          <SearchinfoItem>
            {this.props.phonedatafromapi[6].title}
          </SearchinfoItem>
          <SearchinfoItem>
            {this.props.phonedatafromapi[7].title}
          </SearchinfoItem>
          <SearchinfoItem>
            {this.props.phonedatafromapi[8].title}
          </SearchinfoItem>
          <SearchinfoItem>
            {this.props.phonedatafromapi[9].title}
          </SearchinfoItem>
        </Searchinfo>
      );
    } else {
      return (
        <Searchinfo
          onMouseOver={this.props.handlemouseenter}
          onMouseOut={this.props.mouseleave}
        >
          <Reloadsection>
            <h1 className="searchinfoTitle">熱門機型 </h1>
            <TfiReload
              className={"iphone"}
              onClick={this.props.reload}
            ></TfiReload>
            <p className="reloadword">無法取得機型</p>
          </Reloadsection>
          <SearchinfoItem>無獲取資料</SearchinfoItem>
          <SearchinfoItem>無獲取資料</SearchinfoItem>
          <SearchinfoItem>無獲取資料</SearchinfoItem>
          <SearchinfoItem>無獲取資料</SearchinfoItem>
          <SearchinfoItem>無獲取資料</SearchinfoItem>
        </Searchinfo>
      );
    }
  }
}
