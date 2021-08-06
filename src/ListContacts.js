import React, {Component} from "react";

class ListContacts extends Component {
    render() {
        return (
            <ol className="contact-list">
                {this.props.contacts.map(contact => (<li className="contact-list-item" key={contact.id}>
                    <div style={{
                        backgroundImage: `url(${contact.avatarURL})`
                    }} className="contact-avatar"> </div>
                    <div className="contact-details">
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                    </div>
                    <button className={'contact-remove'}> </button>
                </li>))}
            </ol>
        );
    }
}

export default ListContacts;
