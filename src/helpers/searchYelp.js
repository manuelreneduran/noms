import axios from 'axios';
//
var searchYelp = function(loc, cat) {
  const data = { loc, cat };
  return axios.post('/yelp', data)
  .then((response) => {
    //filter out non-food-trucks
    var data = response.data.businesses.filter(ele => {
      var isTruck = false;
      for (var i = 0; i < ele.categories.length; i++) {
        if (ele.categories[i].alias === "foodtrucks" || ele.categories[i].alias === "foodstands") {
          isTruck = true;
        }
      }
      return isTruck ? true : false;
    })
    return data;
  })
}

export default searchYelp;