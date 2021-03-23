class CityList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cities: ['Santiago','Zurich','Auckland','Sidney','London','Georgia']
        }
    }

    render(){
        return(
            <div>
                {

                    this.state.cities.map((city, i) => (
                      <CityWeather key={city} city={city} />
                    ))
                }

            </div>
        )
    }


}
