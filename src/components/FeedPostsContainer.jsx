import React from "react";
import SingleTweet from "./SingleTweet";


function FeedPostsContainer() {
  var feedPostsContainerStyles = {
    width: '100%',
  };

  var value = 2;
  
  var masterTweetList = [
    {
      image: "https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg",
      title: "Bob",
      postBody: "Rabble rabble bla bla bla"
    },
    {
      image: "https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg",
      title: "Bob",
      postBody: "Rabble rabble bla bla bla"
    },
    {
      image: "https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg",
      title: "Bob",
      postBody: "Rabble rabble bla bla bla"
    },
    {
      image: "https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg",
      title: "Bob",
      postBody: "Rabble rabble bla bla bla"
    }
  ];

  if (value === 2){
    return (
      <div style={feedPostsContainerStyles} className="bob">
        {masterTweetList.map((tweet, index) =>
          <SingleTweet
            image={tweet.image}
            title={tweet.title}
            postBody={tweet.postBody}
            key={index}
          />
          
        )}
        <p>dsdfsdfdsfr</p>
        <style jsx global>{`
          body {
            background-color: red;
          }
        `}
        </style>
        <style jsx>{`
          .bob {
            background-color: blue !important;
          }
        `}
        </style>
      </div>
      
    );
  }
}

export default FeedPostsContainer;