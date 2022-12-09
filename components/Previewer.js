import React from "react";
import styles from '../styles/Previewer.module.css'
import {marked} from 'marked'

class Previewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '# This is a heading\n\n## This is a sub-heading\n\n[This is a link](https://www.freecodecamp.org)\n\n>This is a blockquote\n\nThis is inline code: `<div></div>`\n\nThis is a code block:\n\n```\nlet x = 1;\nlet y = 2;\nlet z = x + y;\n```\n\nThis is a list:\n\n- item 1\n- item 2\n- item 3\n\nThis is a numbered list:\n\n1. item 1\n2. item 2\n3. item 3\n\nThis is an image:\n\n![Mario Mushroom](https://s1.piq.land/2011/11/11/SzeBd4LeVj3I8H7Ynwh18PHU_400x400.png)\n\nThis is bold text:\n\n**bolded text**\n\nThis is italic text:\n\n*italicized text*'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            markdown: event.target.value
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <textarea id='editor' className={styles.textarea} value={this.state.markdown} onChange={this.handleChange}></textarea>
                <div id='preview' className={styles.preview} dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
            </div>
        )
    }

}

export default Previewer