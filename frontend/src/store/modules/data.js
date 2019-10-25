import api from '../../api'

// initial state
const state = {
    userInfo: null,
    // shape: [{ id, title, genres, viewCnt, rating }]
    movieSearchList: [],
    productDetail: {
        imgurl: "http://img.danawa.com/prod_img/500000/060/122/img/3122060_1.jpg?shrink=500:500",
        productname: "얼라이브 원스데일리 멀티비타민",
        brand: "네이쳐스웨이",
        funcs: ["눈건강", "에너지 생성", "세포 재생", "숙취해소", "면역력 증진"],
        dailyintake: "1일 1회 1캡슐",
        reviewCnt: 5,
        rating: 4
    },
    products: [{
        image_url: "https://d9vmi5fxk1gsw.cloudfront.net/home/glowmee/upload/20170105/1483607958793.png",
        company_name: "바세린 (Vaseline)",
        name: "퓨어 스킨 젤리 오리지날",
        rating: 5
    }, {
        image_url: "https://www.koreadepart.com/data/item/1429064957_l1",
        company_name: "유리아쥬 (URIAGE)",
        name: "스틱레브르 오리지널",
        rating: 4
    }],
    manRank: [],
    womanRank: [],
    ageRank: [],
    searchResult: [],
}

// actions
const actions = {
  async signUp(params) {
    await api.signUp(params)
  },
  async logIn({commit}, params) {
    var vm = this
    await api.logIn(params)
      .then((loginInfo) => {
        let token = loginInfo.data.token
        localStorage.setItem("token", token)
      })
      .then(() => {
        vm.dispatch('data/session', { root:true })
      })
      .catch(err => {
        console.log(err, '로그인에러메세지')
      });
  },
  async session({commit}) {
    let token = localStorage.getItem("token")
    let params = {
      headers: {
        "Content-Type": 'application/json',
        Authorization: 'JWT ' + token
        }        
      };
    await api.session(params)
      .then((userInfo) => {
        commit('setUserInfo', userInfo.data)
    })
  },
  async logOut({ commit }) {
    return await api.logOut().then(() => {
      localStorage.removeItem('token');
      commit('setUserInfo', null);
    })
  },
  async searchByKeyword({ commit }, keyword) {
    var resp = await api.searchByKeyword(keyword);
    commit('setSearchResult', resp)
    console.log("%%", state.searchResult);
}
}

// mutations
const mutations = {
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo
    },
    setSearchResult(state, result) {
        state.searchResult = result.data.map(m => m);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}