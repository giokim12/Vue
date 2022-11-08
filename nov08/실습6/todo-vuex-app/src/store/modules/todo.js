const state = () => {
  return {
		// todo 리스트 Array
    list: [
			// 개별 todo Object
      {
        id: 1638771553377,                // nowDateObj.getTime()
        content: 'Vue',                   // Todo 내용
        dueDateTime: '2021-12-09T00:00',  // 마감일
        isCompleted: false,               // 완료된 할 일
        isImportant: true,				        // 중요 할 일
      },
      {
        id: 1638771553378,
        content: 'Vue Router',
        dueDateTime: '2021-12-10T00:00',
        isCompleted: false,
        isImportant: true,
      },
      {
        id: 16387715533779,
        content: 'Vuex',
        dueDateTime: '2021-12-11T00:00',
        isCompleted: true,
        isImportant: false,
      },
    ],
  }
}

const getters = {

}


const mutations = {
  CHANGE_MESSAGE(state, message) {
    state.message = message
  }
}

const actions = {
  changeMessage(context, message) {
    context.commit('CHANGE_MESSAGE', message)
  }
  
}

export default {
  // namespaced: true 옵션이 뭐냐면
  // 액션이나 모듈이 자기 안에 있는 거만 참고해서 실행되게 (독립적으로 사용하게)
  // 다른 모델에서 이름이 겹쳐도 난 내 안에있는거만 하니까 ㄱㅊㄱㅊ
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}