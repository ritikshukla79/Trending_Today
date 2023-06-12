import React from 'react'
import './Newsitem.css'

const Newsitem = (props) =>{
    
    let{publishedAt,imageUrl,mode,source,title,newsUrl,description}= props
   
        var d = new Date(publishedAt)
        return (
            <div className='my-3'>
                <div class="card">
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
                        <span className={`badge rounded-pill bg-${mode === 'light' ? 'danger' : 'success'}`}>
                            {source}
                        </span>
                    </div>

                    <img src={imageUrl} class="card-img-top" alt={imageUrl} />
                    <div class="card-body">
                        <h5 class="card-title">{title}...

                        </h5>
                        <p class="card-text">{description}...</p>
                        <p>{(d.toGMTString())}</p>
                        <a href={newsUrl} rel="noreferrer" class="btn btn-dark" target='_blank'>Read more</a>
                    </div>

                </div>
            </div>
        )
    
}

export default Newsitem
