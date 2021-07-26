import React from 'react';
import s from './Post.module.css';


const Post = () => {
    return (
        <div className={s.post}>
            <img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg' />
            1post
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;