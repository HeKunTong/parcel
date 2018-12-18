import React, { Component } from 'react';
import { Article, ArticleNav, Comment } from '../../components';

class ArticleDetail extends Component {
    render() {
        return (
            <div>
                <Article show={true}/>
                <ArticleNav/>
                <Comment />
            </div>
        )
    }
}

export default ArticleDetail;