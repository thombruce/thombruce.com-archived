<template lang='pug'>
article
  ArticleHeader(:article='article')
  ArticleContent(:article='article')
  footer
    CommentsSection(:path='article.path')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
