import React, {Component} from 'react';

export default class LanguageSwitcher extends Component {
    onChange = e =>{
        this.props.handleChangeLanguage(e.target.className);
    }

    render() {
        const options = languages.map(language => {
            if(language.code != this.props.lang){
                return <li onClick={this.onChange}><div value={language.code} className={language.code} ></div></li>
            }
        });

        return (
            <div className="lang">
                <div
                    className={this.props.lang}
                >
                </div>
                <ul className="dropdown">
                    {options}
                </ul>
            </div>
        )
    }
}