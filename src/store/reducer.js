import axios from 'axios';




const INITIAL_STATE = {
    componentDidMount(i) {
        axios.get(`https://api.covidtracking.com/v1/states/current.json`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
}


const reducer = (state = INITIAL_STATE) => {
    return state
}

export default reducer;