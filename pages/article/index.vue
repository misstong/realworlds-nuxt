<template>
    <div class="article-page">

  <div class="banner">
    <div class="container">

      <h1>{{article.title}}</h1>

    <article-meta :article="article"></article-meta>
    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="article.body">
      </div>
    </div>

    <hr />

    <div class="article-actions">
      <article-meta :article="article"></article-meta>
    </div>

    <div class="row">

      <div class="col-xs-12 col-md-8 offset-md-2">

        <article-comments :article="article"></article-comments>
        
      </div>

    </div>

  </div>

</div>
</template>
<script>

import {getArticle} from '@/api/article'
import MarkdownIt from 'markdown-it'
import articleMeta from './components/articleMeta'
import articleComments from './components/articleComments'

export default {
    name: 'article',
    middleware: 'authenticated',
    components: {articleMeta,articleComments},
    async asyncData({params}) {
       const {slug} = params
       const {data} = await getArticle(slug)
       const { article } = data
       const md = new MarkdownIt()
       article.body = md.render(article.body)

       return {
         article
       }
    },
    head() {
      return {
        title: `${this.article.title} - RealWorld`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.article.description
          }
        ]
      }
    }
}
</script>