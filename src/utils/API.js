import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=u";


export default {
  search: function() {
    var answer =  axios.get(BASEURL);
    console.log(answer.results)
    return(answer)
  }
};
