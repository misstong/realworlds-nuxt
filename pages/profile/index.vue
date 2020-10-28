<template>
    <div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.image" class="user-img" />
          <h4>{{profile.username}}</h4>
          <p>
            {{profile.bio}}
          </p>
          <button class="btn btn-sm btn-outline-secondary action-btn"
            @click="onFollow(profile)"
            :disable="profile.followDisabled">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow Eric Simons 
          </button>
        </div>

      </div>
    </div>
  </div>
   <div class="container">
    <div class="row">

      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link active" href="">My Articles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Favorited Articles</a>
            </li>
          </ul>
        </div>

         <div class="article-preview"
           v-for="article in articles"
           :key="article.slug">
          <div class="article-meta">
            <nuxt-link :to="{
              name: 'profile',
              params: {
                username: article.author.username
              }
            }"><img :src="article.author.image" /></nuxt-link>
            <div class="info">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }" class="author">{{article.author.username}}</nuxt-link>
              <span class="date">{{article.createdAt | date}}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right"
              :class="{active: article.favorited}"
              @click="onFavorite(article)"
              :disabled="article.favoriteDisabled"
              >
              <i class="ion-heart"></i>{{article.favoritesCount}}
            </button>
          </div>
          <nuxt-link :to="{name: 'article',
              params: {
                slug: article.slug
              }
            }" class="preview-link">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
            <ul class="tag-list">
              <li class="tag-default tag-pill tag-outline">Music</li>
              <li class="tag-default tag-pill tag-outline">Song</li>
            </ul>
          </nuxt-link>
        </div>


      </div>

    </div>
  </div>
    </div>
</template>
<script>
import {getProfile, follow, unfollow} from '@/api/user'
import {getArticles} from '@/api/article'
export default {
    name: 'profile',
    async asyncData({params, query}) {
      console.log('params', params)
      const page = Number.parseInt(query.page) || 1
      const { data } = await getProfile(params.username)
      console.log('profile', data)
      const { profile} = data
      const limit =20
      const offset = (page -1) * limit
      const {data:articlesRes} = await getArticles(
        {
          limit,
          offset
        }
      )
      console.log('articles', articles)
      return {
        profile,
        articles: articlesRes.articles,
        articlesCount: articlesRes.articlesCount,
        page
      }
    },
    methods: {
      async onFollow(profile) {
        profile.followDisabled = true
        if(profile.following) {
          const {profile} = await unfollow(profile.username)
        }else{
          const {profile} =await follow(profile.username)

        }
        profile.followDisabled = false
      },
      async onFavorite(article) {
        console.log(article)
        article.favoriteDisabled = true
        if(article.favorited) {
          await deleteFavorite(article.slug)
          article.favorited = false
          article.favoritesCount += -1
        } else {
          await addFavorite(article.slug)
          article.favorited = true
          article.favoritesCount +=1
        }
        article.favoriteDisabled = false
      }

    }
}
</script>