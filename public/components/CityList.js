class CityList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cities: ['Santiago','Zurich','Auckland','Sidney','London','Georgia'],
            loaded: false
        }
    }

    componentDidMount() {
      this.setState({loaded: true})
    }
    componentDidUpdate() {
      if (!this.state.loaded) {
        this.setState({loaded: true})
      }
    }
    updateCities = () => {
      this.setState({loaded: false})
    };
    render(){
        return(
            <div>
                {this.state.loaded && <button onClick={()=>this.updateCities()}>REFRESH</button>}
                {
                  this.state.loaded && this.state.cities.map((city, i) => (
                    <CityWeather key={city} city={city} />
                  ))
                }

            </div>
        )
    }


}
