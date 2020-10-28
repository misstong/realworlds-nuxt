<template>
    <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form  @submit.prevent="onSubmit">
          <fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="Article Title" v-model="article.title" required>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="What's this article about?" v-model="article.description" required>
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" rows="8" placeholder="Write your article (in markdown)" v-model="article.body" required></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="Enter tags" v-model="article.taglist"><div class="tag-list" ></div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary" type="submit">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import {createArticle} from '@/api/article'
export default {
    name: 'editor',
    middleware: 'authenticated',
    data(){
      return {
        article: {
          title: '',
          description: '',
          body: '',
          taglist: []
        }
      }
    },
    methods: {
      async onSubmit() {

        const article = this.article
        console.log(article)
        try {
          const {data} = await createArticle(article)
          const {slug} = data.article
          this.$router.push({
            name: 'article',
            params: {
              slug
            }
          })
        }catch(e) {
          console.log(e)
        }
        
        
      }
    }
}
</script>