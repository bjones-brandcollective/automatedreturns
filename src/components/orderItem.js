import React from 'react';
import { connect } from "react-redux";
import FlavorForm from './dropdown'
import Options from '../components/options'
import { showPopup } from '../store/actions'

class OrderItem extends React.Component {
    constructor(props) {
        super(props);             
    }
    onFruitChosen(choice, e) {
        this.props.showPopup(choice, 3)
        // this.props.showPopup(choice, 3)
        // this.setState({
        //     counter: 2
        // })
      //  this.props.showPopup(this.state.counter + " " + this.props.counter + " " + choice)
    }

    render() {
        var allowedQty = [this.props.item.quantity_return_allowed];
        var elements = [];
        for(var i = 0; i <= allowedQty; i ++){
           elements.push(i);
        }
        return (
            <div>
     <div>
         <div>
             <div>
            <div className="uk-grid">
                <div className="uk-width-1-2">
                    <div className="uk-grid">
                        <div className="uk-width-1-3">
                            <img src={this.props.item.image} width="30em" height="30em" />
                        </div>
                        <div className="uk-width-1-3 uk-margin-small">
                            <p class="uk-margin-remove">{this.props.item.color} {this.props.item.name}</p>
                            <p class="uk-margin-remove">(Size {this.props.item.size})</p>
                        </div>
                        <div className="uk-width-1-3">
                            <p>{this.props.item.unit_price}</p>
                        </div>
                    </div>
                </div>
                <div className="uk-width-1-2">
                    <div className="uk-grid">
                        <div className="uk-width-1-3"> 
                             {this.props.item.quantity_return_allowed > 0 &&
                              <div>
                                   <Options
                                choices={elements}
                                onChoice={(choice) => this.onFruitChosen(choice)} />
                                <p>{this.props.item.validation_errors}</p>
                            </div>
                              }
                              {this.props.item.quantity_return_allowed == 0 &&
                                <p>
                                    {!!(this.props.item.validation_errors) ? this.props.item.validation_errors : "" }
                                </p>
                              }
                        </div>
                        <div className="uk-width-1-3">
                        {this.props.item.quantity_return_allowed > 0 &&
                            <FlavorForm/>
                          }     
                        </div>
                        <div className="uk-width-1-3">
                            {this.props.item.quantity_return_allowed > 0 &&
                                <p><img className="bc-img-upload-icon" src="https://cdn11.bigcommerce.com/s-b972phpqg5/product_images/uploaded_images/camera.png"/></p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
         </div>
      </div>
                     
            </div>
        )
    }
}


const stateMappings = state => ({})
const actionMappings = {
    showPopup
}

export default connect(stateMappings, actionMappings)(OrderItem);
