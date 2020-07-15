import React from 'react';
import t from '../services/i18n'
import { goHome } from '../store/actions';
import { connect } from 'react-redux';

class BeginReturnRoute extends React.Component {
render () {
    return (
        <div>
            <div className="bc-returns-header">
                <p className="uk-text-center bc-returns-header uk-padding-small">Terms & Conditions</p>
                <form>
                    <div className="bc-terms-field">
                        <p>{t(`TERMS-GENERIC.generic`)}</p>
                    </div>
                    <div className="uk-text-center uk-margin-top">
                        <label>
                            <input type="checkbox" name="agreeterms" value="check"/> I agree to the Terms and Conditions
                        </label>
                    </div>
                    <div className="bc-selection-div uk-margin">
                        <button className="bc-returns-button" onClick={() => this.props.goHome()}>Cancel</button>
                        <button className="bc-returns-button uk-margin-left" onclick="if(!this.form.checkbox.checked){alert('You must agree to the terms first.');return false}">Continue</button>
                    </div>
                </form>
        </div>
        </div>
    )
}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    goHome
}

export default connect(mapStateToProps, mapDispatchToProps)(BeginReturnRoute);