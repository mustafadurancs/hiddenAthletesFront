import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const BlogSidebar = () => {
    return (
        <div className="widget-area" id="secondary">
            <div className="widget widget_search">
                <form className="search-form">
                    <label>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit">
                        <Icon.Search />
                    </button>
                </form>
            </div>

            <div className="widget widget_startp_posts_thumb">
                <h3 className="widget-title">Popular Posts</h3>

                <article className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>

                    <div className="info">
                        <time>June 10, 2021</time>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>Making Peace With The Feast Or Famine Of Freelancing</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <time>June 21, 2021</time>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>I Used The Web For A Day On A 50 MB Budget</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <time>June 30, 2021</time>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>How To Create A Responsive Popup Gallery?</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    <li>
                        <Link href="/careers">
                            <a>Business</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/careers">
                            <a>Privacy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/careers">
                            <a>Technology</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/careers">
                            <a>Tips</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/careers">
                            <a>Uncategorized</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tags</h3>

                <div className="tagcloud">
                    <Link href="/careers">
                        <a>IT <span className="tag-link-count">(3)</span></a>
                    </Link>

                    <Link href="/careers">
                        <a>Spacle <span className="tag-link-count">(3)</span></a>
                    </Link>

                    <Link href="/careers">
                        <a>Games <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link href="/careers">
                        <a>Fashion <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link href="/careers">
                        <a>Travel <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link href="/careers">
                        <a>Smart <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link href="/careers">
                        <a>Marketing <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link href="/careers">
                        <a>Tips <span className="tag-link-count">(2)</span></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;  