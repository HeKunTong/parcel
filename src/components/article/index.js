import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';

class Article extends Component {
    render() {
        const { article, show } = this.props;
        return (
            <article className="article article-type-post article-index">
                <div className="article-inner">
                    <header className="article-header">
                        {
                            show ?
                                <h1 itemProp="name" className="article-title">{article.title}</h1> :
                                <h1 itemProp="name">
                                    <Link className="article-title" to={`/article/${article.id}`}>{article.title}</Link>
                                </h1>
                        }
                        <a className="archive-article-date">
                            <time dateTime="2017-07-09T02:36:00.000Z" itemProp="datePublished"><i className="icon-calendar icon"/>2017-07-09</time>
                        </a>
                    </header>
                    <div className="article-entry" itemProp="articleBody">
                        <div dangerouslySetInnerHTML={{ __html: article.brief}}/>
                        {
                            !show &&
                            <a className="article-more-a">more &gt;&gt;</a>
                        }
                        {
                            show &&
                            <div dangerouslySetInnerHTML={{ __html: article.content }}/>
                        }
                    </div>
                    <div className="article-info article-info-index">
                        <div className="article-tag tagcloud">
                            <i className="icon-price-tags icon"/>
                            <ul className="article-tag-list">
                                {
                                    map(article.belong, (belong, index) => (
                                        <li className="article-tag-list-item" key={index}>
                                            <a className="js-tag article-tag-list-link color3">{belong.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <p className="article-more-link">
                            <a className="article-more-a">展开全文 &gt;&gt;</a>
                        </p>
                        <div className="clearfix"/>
                    </div>
                </div>
            </article>
        );
    }
}

export default Article;