const youtubeApiKey = "AIzaSyCDOt_pY7-xiA4Olkpli1ysfUqkcGEF1eM";
const youtubeUsername = "UCkaV4nhZV0ubG0DvpDd6WJg";
const youtubeSubCount = document.getElementById("yt-sub-count");
const youtubeChannelName = document.getElementById("yt-channel-name");
const youtubeUsertag = document.getElementById("yt-usertag");

let getYoutubeSubscribers = () => {
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=${youtubeUsername}&key=${youtubeApiKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      youtubeSubCount.innerHTML = data["items"][0].statistics.subscriberCount;
      youtubeChannelName.innerHTML = data["items"][0].snippet.title;
      youtubeUsertag.innerHTML = data["items"][0].snippet.customUrl;
    });
};

getYoutubeSubscribers();

const igUsername = "@guitar_o_quai";
const igProfileName = document.getElementById("ig-profile-name");
const igFolCount = document.getElementById("ig-fol-count");
const igUsertag = document.getElementById("ig-usertag");

igFolCount.innerHTML = 23;
igProfileName.innerHTML = "Hervé Antraigue";
igUsertag.innerHTML = igUsername
