<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- show side nav -->
    <div
      class="lg:w-1/3 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between"
    >
      <div>
        <button
          class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue"
        >
          <i class="fab fa-twitter"></i>
        </button>
        <div>
          <button
            v-for="tab in tabs"
            @click="id = tab.id"
            :key="tab.id"
            :class="
              `focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${
                id === tab.id ? 'text-blue' : ''
              }`
            "
          >
            <i :class="`${tab.icon} text-2xl mr-4 text-left`"></i>
            <p class="text-lg font-semibold text-left hidden lg:block">
              {{ tab.title }}
            </p>
          </button>
        </div>
        <button
          class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue"
        >
          <p class="hidden lg:block">Tweet</p>
          <i class="fas fa-plus lg:hidden"></i>
        </button>
      </div>
      <div class="lg:w-full relative">
        <button
          @click.stop="dropdown = true"
          class="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none"
        >
          <img
            src="profile.jpg"
            class="w-10 h-10 rounded-full border border-lighter"
          />
          <div class="hidden lg:block ml-4 text-left">
            <p class="text-sm font-bold leading-tight">Stephane Gram</p>
            <p class="text-sm leading-tight">@Gramm</p>
          </div>
          <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
        </button>
        <div
          v-if="dropdown === true"
          class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16"
        >
          <button
            @click="dropdown = false"
            class="p-3 flex items-center w-full hover:bg-lightest p-2 focus:outline-none"
          >
            <img
              src="profile.jpg"
              class="w-10 h-10 rounded-full border border-lighter"
            />
            <div class="ml-4">
              <p class="text-sm font-bold leading-tight">Stephane Gram</p>
              <p class="text-sm leading-tight">@Gramm</p>
            </div>
            <i class="fas fa-check ml-auto test-blue"></i>
          </button>
          <button
            @click="dropdown = false"
            class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
          >
            Add an existing account
          </button>
          <button
            @click="dropdown = false"
            class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
          >
            Log out @SaaSyEth
          </button>
        </div>
      </div>
    </div>
    <!-- show tweets -->
    <div class="w-full flex-grow h-full overflow-y-scroll">
      <div
        class="px-5 py-3 border-b border-lighter flex items-center justify-between"
      >
        <h1 class="text-xl font-extrabold">Home</h1>
        <!-- <i class="far fa-star text-xl text-blue"></i> -->
        <svg width="24" viewBox="0 0 24 24" class="fill-current text-blue">
          <g>
            <path
              d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
            ></path>
          </g>
        </svg>
      </div>
      <div class="px-5 py-3 border-b-8 border-lighter flex">
        <div class="flex-none">
          <img
            src="profile.jpg"
            class="flex-none w-12 h-12 rounded-full border border-lighter"
          />
        </div>
        <form v-on:submit.stop="addTweet" class="w-full px-4 relative">
          <textarea
            v-model="tweet.content"
            placeholder="What's Happening?"
            class="mt-3 pb-3 w-full focus:outline-none  resize-none"
          />
          <div class="flex items-center">
            <svg
              viewBox="0 0 24 24"
              class="text-lg fill-current text-blue mr-4"
              width="24"
            >
              <g>
                <path
                  d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"
                ></path>
                <circle cx="8.868" cy="8.309" r="1.542"></circle>
              </g>
            </svg>
            <svg
              class="text-lg fill-current text-blue mr-4"
              width="24"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"
                ></path>
                <path
                  d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"
                ></path>
              </g>
            </svg>
            <svg
              class="text-lg fill-current text-blue mr-4"
              width="24"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"
                ></path>
              </g>
            </svg>
            <svg
              class="text-lg fill-current text-blue mr-4"
              width="24"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
                ></path>
                <path
                  d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"
                ></path>
                <circle cx="14.738" cy="9.458" r="1.478"></circle>
                <circle cx="9.262" cy="9.458" r="1.478"></circle>
              </g>
            </svg>
            <!-- <i class="text-lg text-blue mr-4 far fa-calendar-alt"></i> -->
            <svg
              class="text-lg fill-current text-blue mr-4"
              width="24"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"></path>
                <path
                  d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"
                ></path>
                <path
                  d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"
                ></path>
                <path
                  d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"
                ></path>
              </g>
            </svg>
          </div>
          <button
            type="submit"
            class="h-10 px-4 hidden lg:block text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0"
          >
            Tweet
          </button>
        </form>
      </div>
      <div class="flex flex-col-reverse">
        <div
          v-for="tweet in tweets"
          :key="tweet.id"
          class="w-full p-4 border-b hover:bg-lighter flex"
        >
          <div class="flex-none mr-4">
            <img src="profile.jpg" class="h-12 w-12 rounded-full flex-none" />
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold">Stephane Gram</p>
              <p class="text-sm text-dark ml-2">@Gramm</p>
              <p class="text-sm text-dark ml-2">4 sec</p>
              <i class="fas fa-angle-down text-dark ml-auto"></i>
            </div>
            <p class="py-2">
              {{ tweet.content }}
            </p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <i class="far fa-comment mr-3"></i>
                <p>4</p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-retweet mr-3"></i>
                <p>5</p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-heart mr-3"></i>
                <p>4</p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="follow in following"
        :key="follow.id"
        class="w-full p-4 border-b hover:bg-lighter flex"
      >
        <div class="flex-none mr-4">
          <img
            :src="`${follow.src}`"
            class="h-12 w-12 rounded-full flex-none"
          />
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold">{{ follow.name }}</p>
            <p class="text-sm text-dark ml-2">{{ follow.handle }}</p>
            <p class="text-sm text-dark ml-2">{{ follow.time }}</p>
            <i class="fas fa-angle-down text-dark ml-auto"></i>
          </div>
          <p class="py-2">
            {{ follow.tweet }}
          </p>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center text-sm text-dark">
              <i class="far fa-comment mr-3"></i>
              <p>{{ follow.comments }}</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-retweet mr-3"></i>
              <p>{{ follow.retweets }}</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-heart mr-3"></i>
              <p>{{ follow.like }}</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-share-square mr-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- show trending -->
    <div
      class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative"
    >
      <input
        class="pl-12 rounded-full w-full p-2 bg-lighter text-md mb-4"
        placeholder="Search Twitter"
      />
      <i
        class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-md text-light"
      ></i>
      <div class="w-full rounded-lg bg-lightest">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-extrabold">What's Happening?</p>
        </div>
        <button
          v-for="trend in trending"
          :key="trend.id"
          class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter"
        >
          <div>
            <p class="text-xs text-left leading-tight text-dark">
              {{ trend.top }}
            </p>
            <p class="font-semibold text-sm text-left leading-tight">
              {{ trend.title }}
            </p>
            <p class="text-left text-sm leading-tight text-dark">
              {{ trend.bottom }}
            </p>
          </div>
          <!-- <i class="fas fa-angle-down text-lg text-dark"></i> -->
          <i class="fas fa-ellipsis-h mr-3 text-sm text-dark"></i>
        </button>
        <button
          class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter"
        >
          Show More
        </button>
      </div>
      <div class="w-full rounded-lg bg-lightest my-4">
        <div class=" p-3">
          <p class="text-lg font-extrabold">Who to Follow</p>
        </div>
        <button
          v-for="friend in friends"
          :key="friend.id"
          class="w-full flex hover:bg-lighter p-3 border-t border-lighter"
        >
          <img
            :src="`${friend.src}`"
            class="w-12 h-12 rounded-full border border-lighter"
          />
          <div class="hidden lg:block ml-4 text-left">
            <p class="text-sm font-bold leading-tight">{{ friend.name }}</p>
            <p class="text-sm leading-tight">{{ friend.handle }}</p>
          </div>
          <button
            class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue"
          >
            Follow
          </button>
        </button>
        <button
          class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter"
        >
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      tabs: [
        { icon: "fas fa-home", title: "Home", id: "home" },
        { icon: "fas fa-hashtag", title: "Explore", id: "explore" },
        { icon: "far fa-bell", title: "Notifications", id: "notifications" },
        { icon: "far fa-envelope", title: "Messages", id: "messages" },
        { icon: "fas fa-clipboard-list", title: "Lists", id: "lists" },
        { icon: "far fa-comment", title: "Topics", id: "topics" },
        { icon: "far fa-user", title: "Profile", id: "profile" },
        { icon: "fas fa-ellipsis-h", title: "More", id: "more" },
      ],
      id: "home",
      dropdown: false,
      trending: [
        {
          id: 1,
          top: "Trending in AL",
          title: "Rafa",
          bottom: "Trending with: Rip Rafa",
        },
        { id: 2, top: "Movie", title: "Great", bottom: "125K Tweets" },
        { id: 3, top: "Pop", title: "Red skirts", bottom: "20k tweets" },
        {
          id: 4,
          top: "Trending in FR",
          title: "Dammiam",
          bottom: "30k tweets",
        },
        {
          id: 5,
          top: "Trending in UK",
          title: "Lady Gaga",
          bottom: "23.2k tweets",
        },
      ],
      friends: [
        { src: "elena.jpg", name: "Elena", handle: "@lucasBoy" },
        { src: "laura.jpg", name: "Laura Greta", handle: "@lawer:)" },
        { src: "mavin.jpg", name: "Mavin Lower", handle: "@localHeart" },
      ],
      following: [
        {
          id: 1,
          src: "elena.jpg",
          name: "Elena",
          handle: "@lucasBoy",
          time: "60 min",
          tweet: "Raining again?",
          comments: "1,000",
          retweets: "5220",
          like: "1,000,003",
        },
        {
          id: 2,
          src: "mavin.jpg",
          name: "Mavin Lower",
          handle: "@localHeart",
          time: "15 min",
          tweet: "Where are you????",
          comments: "1,020",
          retweets: "50",
          like: "10,103",
        },
        {
          id: 3,
          src: "elena.jpg",
          name: "Elena",
          handle: "@lucasBoy",
          time: "2.5 hr",
          tweet: "What is this?",
          comments: "120,000",
          retweets: "1,100,002",
          like: "3,000,001",
        },
        {
          id: 4,
          src: "elena.jpg",
          name: "Elena",
          handle: "@lucasBoy",
          time: "2 hr",
          tweet: "Great Job",
          comments: "200,500",
          retweets: "2,100,032",
          like: "1,102,103",
        },
      ],
      tweets: [{ id: "1", content: "It is beautiful!" }],
      tweet: { content: "" },
    };
  },
  methods: {
    addTweet() {
      let newTweet = {
        content: this.tweet.content,
      };
      this.tweets = [...newTweet, newTweet];
    },
  },
};
</script>
