import React from 'react';
import { Meteor } from 'meteor/meteor';

class NewsAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: '',
      title: '',
      text: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const title = this.state.title ? this.state.title.trim() : undefined;
    const text = this.state.text ? this.state.text.trim() : undefined;

    const news = {
      title,
      text,
    };

    Meteor.call('news.insert', news, (error, _id) => {
      if (error) {
        console.log(error.reason);
        this.setState({
          error: error.reason,
        });
      } else {
        this.setState({
          error: '',
          title: '',
          text: '',
        });
        console.log('News Added');
      }
    });
  }

  handleTitleChange(e) {
    const title = e.target.value;

    this.setState({ title });
  }

  handleTextChange(e) {
    const text = e.target.value;

    this.setState({ text });
  }

  render () {
    return (
      <form ref={form => (this.form = form)} onSubmit={ this.handleSubmit}>
        { this.state.error ? <p>{this.state.error}</p> : undefined }
        <label>Title</label>
        <input
          type="text"
          name="title"
          ref={title => (this.title = title)}
          placeholder="Title"
          value={ this.state.title }
          onChange={ this.handleTitleChange }
        />
        <label>Text</label>
        <textarea
          type="text"
          name="text"
          ref={text => (this.text = text)}
          placeholder="News content"
          value={ this.state.text }
          onChange={ this.handleTextChange }
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewsAdd;
