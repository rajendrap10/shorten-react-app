import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [longUrl, setLongUrl] = useState('');

    const handleStats = async () => {
        console.log('inside handle stats');
    }

    const handleSubmit = async () => {
        let postData = {
            url
        }

        console.log(postData);

        axios.post('http://localhost:3100/shortener', postData).then((res) => {
            setShortUrl('http://localhost:3000/' + res.data.short_url);
            setLongUrl(res.data.original_url);
        });
    }

    return (
        <div>
            <div className="container mg-t60">
                <div className="row">
                    <div className="col-xs-12 mg-b20">
                        <h1 className="main-heading">Welcome to short.com</h1>
                    </div>
                    <div className="col-sm-12">
                        <form>
                            <div>
                                <input
                                    type="text"
                                    style={{ width: '500px', height: '30px' }}
                                    name="url"
                                    id="url"
                                    className="form-control"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </div>
                            <br /><br />

                            <div className="form-group text-center mg-b0">
                                <button type="button" onClick={handleSubmit} className="btn order-now-btn hidden">SHORTEN</button>
                            </div>
                        </form>
                        <br />

                        {shortUrl != '' ?
                            <div>
                                <h2>Here's your short URL !</h2>
                                <span><a target="_blank" onClick={handleStats} href={longUrl}>{shortUrl}</a></span>
                            </div>
                            : ''
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;