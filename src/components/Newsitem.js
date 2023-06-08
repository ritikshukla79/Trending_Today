import React, { Component } from 'react'
import './Newsitem.css'

export class Newsitem extends Component {
    render() {
        var d = new Date(this.props.publishedAt)
        return (
            <div className='my-3'>
                <div class="card">
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
                        <span className={`badge rounded-pill bg-${this.props.mode === 'light' ? 'danger' : 'success'}`}>
                            {this.props.source}
                        </span>
                    </div>

                    <img src={this.props.imageUrl} class="card-img-top" alt={this.props.imageUrl} />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.title}...

                        </h5>
                        <p class="card-text">{this.props.description}...</p>
                        <p>{(d.toGMTString())}</p>
                        <a href={this.props.newsUrl} rel="noreferrer" class="btn btn-dark" target='_blank'>Read more</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Newsitem
