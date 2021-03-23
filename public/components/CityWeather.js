class CityWeather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: null,
            temp: null,
            lat: null,
            lon: null,
            message: 'Searching...'
        }
    }

    getCityWeather = name => {
      return axios.get(`/weather/${name}`)
        .then((response) => {
          if (Math.random(0, 1) < 0.1) throw new Error('How unfortunate! The API Request Failed')
          const { data } = response;
          this.setState({temp: data.main.temp, lat: data.coord.lat, lon: data.coord.lon})
          return data;
        })
        .catch(error => {
          this.setState({message: 'Click to Retry'})
          return Promise.reject(error)
        });
    };

    componentDidMount() {
      this.setState({name: this.props.city})
      if (!this.state.temp) {
        this.getCityWeather(this.props.city)
        .catch(error => {
          Promise.reject(error);
          this.setState({message: 'Searching...'})
          this.getCityWeather(this.props.city)});
      }
    }

    render(){
        return(
            <h3><p onClick={()=>this.getCityWeather(this.state.name)}>{this.state.temp ? `${this.state.name}: ${this.state.temp} C`: `${this.state.name}: ${this.state.message}`}</p></h3>
        )
    }


}
