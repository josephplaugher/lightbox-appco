#LightBox-AppCo is a simple styled React component that you can use to add a "popup" menu to your React application.

######Installation

```
npm install lightbox-appco
```

######Usage

```
import LightBox from 'lightbox-appco'
import SomeComponentOrElement from './SomeComponentOrElement'

class MyApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLightBox: false //set the lightbox to not mount initially
        }
        this.closeLightBox = this.closeLightBox.bind(this)
        this.showLightBox = this.showLightBox.bind(this)
    }

    //function for closing the lightbox
    //this will be passed into the LightBox compoent as the closing funtion
    closeLightBox = () => {
        this.setState({ showLightBox: false })
    }

    //function for opening the lightbox
    showLightBox = () => {
        this.setState({ showLightBox: true })
    }

    render() {

        return (

            <SomeComponentOrElement onClick={this.showLightBox}>

            {this.state.showLightBox ? (
                <LightBox
                    backgroundDimmer="2"
                            //The backgroundDimmer prop sets the degree of dimming behind the light box.
                            //The lowest (lighting dimming) is 1. The highest (darkest dimming) is 99.
                            //If this property is not specified it defaults to 2.
                    style={//The style prop takes an object of stype properties. You can
                            //provide any combination of these or none at all.
                            //Whatever you do not specify will default to a general
                            //styke that should work well for most purposes.
                            //The default values are shown below.
                        {
                            zIndex: "10",
                            margin: "25px auto auto auto",
                            padding: "25px",
                            width: "600px",
                            height: "80%",
                            backgroundColor: "white",
                            borderRadius: "5px",
                            borderColor: "white",
                            borderStyle: "solid",
                            borderWidth: "3px"
                        }
                    }
                    close={this.closeLightBox}
                    //The close property must be specified or you
                    //will have no way to close the lightbox once it is opened.
                >
                    //must pass in child components or other data. Whatever you put here will be
                    //in the body of the light box
                </LightBox>
            ) : null }
    )
 }
}
```
