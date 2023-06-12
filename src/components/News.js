import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

  // const apikey = 'dd29d16732e24b0d9efc308630e3bf8e';
  //const apikey= '6e91e865886f481d82806dcab2e5210e';
  const apikey = 'cd42e8e6bc8b4139b3e37f742d653247';
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [status, setstatus] = useState('ok');
  const [totalResults, settotalResults] = useState(0);

  const updateNews = async () => {

    props.setProgress(0);
   // console.log(props.progress)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(parsedata.articles);
    settotalResults(parsedata.totalResults);
    setstatus(parsedata.status);
    setloading(false);
    props.setProgress(100);
   // console.log(props.progress);
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  },[]);



  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1)
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(articles.concat(parsedata.articles));
    settotalResults(parsedata.totalResults);
    setloading(false);
  };
  const fontstyle2 = { color: 'black', margin: '2rem' };
  const fontstyle1 = { color: 'white', margin: '2rem' };
  if (status === 'ok') {
    return (
      <>
        <h2 className='text-center' style={props.mode === 'light' ? fontstyle2 : fontstyle1}>Top Headlines - Latest news from {props.category}   </h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className='row my-3' >
              {articles.map((element) => {
                return <div className="col-md-4" >
                  <Newsitem title={element.title ? element.title.slice(0, 65) : ''} description={element.description ? element.description.slice(0, 108) : ''} imageUrl={element.urlToImage ? element.urlToImage : 'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/MSNBC/Components/Video/110609/tdy_mor_trends.jpg'} newsUrl={element.url} publishedAt={element.publishedAt} source={element.source.name} mode={props.mode} />
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
      <div className='container page-center' style={{ marginTop: '95px' }}>  <Spinner status={status} />
        <h2 className='text-center' style={props.mode === 'light' ? fontstyle2 : fontstyle1}> Sorry , api request Limit is Exhausted for Today</h2></div>
    </div>

  }

}
News.defaultProps = {
  category: 'general',
  pageSize: 6,
  country: 'in'
}
News.propsTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
  country: PropTypes.string

}


export default News
