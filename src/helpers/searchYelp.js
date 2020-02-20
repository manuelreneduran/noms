import axios from 'axios';

var searchYelp = function(loc, cat) {
  return axios.get(`${'https://evening-coast-30388.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${loc}`, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
  },
    params: {
    term: `${cat}`,
    limi: 50
  }
  })
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