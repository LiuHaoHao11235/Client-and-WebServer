{
  /* <Stargrouper>
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
          </Stargrouper> */
}
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
