import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      status: 'ok',
      // apikey: '6e91e865886f481d82806dcab2e5210e',
      apikey: 'dd29d16732e24b0d9efc308630e3bf8e',
      
    }
  }

  static defaultProps = {
    category: 'general',
    pageSize: 6,
    country: 'in'
  }
  static propsTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
    country: PropTypes.string
  }
  async updateNews() {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false, status: parsedata.status });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews();
    
  }


  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      loading: false,
    });
    
  };


  render() {
    const fontstyle2 = { color: 'black', margin: '2rem' };
    const fontstyle1 = { color: 'white', margin: '2rem' };
    if (this.state.status === 'ok') {
      return (
        <>
          <h2 className='text-center' style={this.props.mode === 'light' ? fontstyle2 : fontstyle1}>Top Headlines - Latest news from {this.props.category}   </h2>
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className='row my-3' >
                {this.state.articles.map((element) => {
                  return <div className="col-md-4" >
                    <Newsitem title={element.title ? element.title.slice(0, 65) : ''} description={element.description ? element.description.slice(0, 108) : ''} imageUrl={element.urlToImage ? element.urlToImage : 'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/MSNBC/Components/Video/110609/tdy_mor_trends.jpg'} newsUrl={element.url} publishedAt={element.publishedAt} source={element.source.name} mode={this.props.mode} />
                  </div>
                })
                }
              </div>
            </div>
          </InfiniteScroll>


        </>
      )
    }
    else {
      return <div>
        <div className='container page-center' style={{ marginTop: '95px' }}>  <Spinner status={this.state.status} />
          <h2 className='text-center' style={this.props.mode === 'light' ? fontstyle2 : fontstyle1}> Sorry , api request Limit is Exhausted for Today</h2></div>
      </div>

    }
  }
}

export default News
