import React from 'react'

export default function UserComponent(props) {
    console.log(props);
    const { username} = props.data.login;
    const {large} = props.data.picture;

  return (
    <div>
        <div class="card">
            <img src={large} alt="Person" class="card__image">
            </img>
            <p class="card__name">{username}</p>
            <div class="grid-container">

            <div class="grid-child-posts">
                902 Post
            </div>

            <div class="grid-child-followers">
                1300 Likes
            </div>

            </div>
            <ul class="social-icons">
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-codepen"></i></a></li>
            </ul>
            <button class="btn draw-border">Follow</button>
            <button class="btn draw-border">Message</button>
        </div>
    </div>
    
  )
}
