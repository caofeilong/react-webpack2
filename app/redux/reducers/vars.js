import  _  from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_VARS':
      let {key, value} = action
      var obj={}
      obj[key]=value
      return _.assign({},state,obj)
  }
  return state
}
